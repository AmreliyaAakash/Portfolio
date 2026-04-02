import { get, set } from 'idb-keyval';

// Global queue to ensure models load one by one sequentially
let loadQueue = Promise.resolve();

export const loadCachedModel = (url) => {
    return new Promise((resolve, reject) => {
        // Enqueue the request
        loadQueue = loadQueue.then(async () => {
            try {
                // 1. Try to get from cache
                const cachedBlob = await get(url);
                if (cachedBlob) {
                    resolve(URL.createObjectURL(cachedBlob));
                    return; // Done
                }

                // 2. Fetch if not in cache (happens sequentially)
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');

                const blob = await response.blob();

                // 3. Save to cache
                set(url, blob).catch((err) => console.warn('Failed to cache model', err));

                // 4. Return the blob URL
                resolve(URL.createObjectURL(blob));
            } catch (error) {
                console.warn('Error loading cached model, falling back to network', error);
                resolve(url); // Fallback to original URL
            }
        }).catch(err => {
            console.error('Error in model queue', err);
            resolve(url); // Fallback
        });
    });
};
