import { get, set } from 'idb-keyval';

const CACHE_VERSION = 'v2_';

export const loadCachedModel = async (url) => {
    try {
        const cacheKey = CACHE_VERSION + url;
        // Extract original extension or default to .glb to trick THREE.js loader
        const extMatch = url.match(/\.[0-9a-z]+$/i);
        const ext = extMatch ? extMatch[0] : '.glb';

        // 1. Try to get from cache
        const cachedBlob = await get(cacheKey);
        if (cachedBlob) {
            if (cachedBlob.type === 'text/html') {
                console.warn('Poisoned HTML blob detected in IndexedDB cache. Re-fetching...');
            } else {
                return URL.createObjectURL(cachedBlob) + '#' + ext;
            }
        }

        // 2. If not in cache, fetch it
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');

        // Prevent Vite SPA fallbacks (index.html) from being cached as 3D models
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('text/html')) {
            throw new Error('Received HTML instead of a model! The path might be incorrect: ' + url);
        }

        const blob = await response.blob();
        if (blob.type === 'text/html') {
            throw new Error('Received HTML blob.');
        }

        // 3. Save to cache
        set(cacheKey, blob).catch((err) => console.warn('Failed to cache model', err));

        // 4. Return the blob URL
        return URL.createObjectURL(blob) + '#' + ext;
    } catch (error) {
        console.warn('Error loading cached model, falling back to network', error);
        return url; // Fallback to original URL
    }
};
