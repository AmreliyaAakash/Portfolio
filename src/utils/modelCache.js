import { get, set } from 'idb-keyval';

export const loadCachedModel = async (url) => {
    try {
        // 1. Try to get from cache
        const cachedBlob = await get(url);
        if (cachedBlob) {
            // console.log('Model loaded from IndexedDB cache');
            return URL.createObjectURL(cachedBlob);
        }

        // 2. If not in cache, fetch it
        // console.log('Model not in cache, downloading...');
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        const blob = await response.blob();

        // 3. Save to cache (don't await this, let it happen in background)
        set(url, blob).catch((err) => console.warn('Failed to cache model', err));

        // 4. Return the blob URL
        return URL.createObjectURL(blob);
    } catch (error) {
        console.warn('Error loading cached model, falling back to network', error);
        return url; // Fallback to original URL
    }
};
