/* Build 01 replaces both markers; never deploy this source unchanged. */
'use strict';
const CACHE_PREFIX = 'terrorprints-studio-';
const BUILD_VERSION = 'e43f270c60ce585c1d255a5bbe5355717a5a04dbe18523963cb6101039b3da0d';
const PRECACHE_ASSETS = ["/","/assets/app.css","/assets/app.js","/build-meta.json","/icons/icon-192.png","/icons/icon-512.png","/icons/terrorprints.svg","/index.html","/licenses/Nunito-OFL.txt","/licenses/esbuild-LICENSE.txt","/licenses/manifold-3d-LICENSE.txt","/licenses/provenance.md","/licenses/three-LICENSE.txt","/manifest.webmanifest","/sw.js"];
const CACHE_NAME = CACHE_PREFIX + BUILD_VERSION;
const SHELL = '/index.html';
const CACHEABLE_ASSETS = PRECACHE_ASSETS.filter(function (asset) { return asset !== '/sw.js'; });
const STATIC_PATHS = new Set(CACHEABLE_ASSETS);

function validBuild() {
  return /^[a-f0-9]{16,128}$/.test(BUILD_VERSION) &&
    PRECACHE_ASSETS.length > 0 &&
    new Set(PRECACHE_ASSETS).size === PRECACHE_ASSETS.length &&
    STATIC_PATHS.has(SHELL) &&
    PRECACHE_ASSETS.every(function (path) {
      if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) return false;
      if (/[?#\\:\u0000-\u0020\u007f]/.test(path)) return false;
      if (path === '/') return true;
      return path.split('/').slice(1).every(function (segment) {
        try {
          const decoded = decodeURIComponent(segment);
          return decoded.length > 0 && decoded !== '.' && decoded !== '..' && !decoded.startsWith('.') &&
            !decoded.endsWith('.') && !decoded.endsWith(' ') &&
            !/[/\\:<>"|*\u0000-\u001f\u007f]/.test(decoded) && !/\p{C}/u.test(decoded) &&
            encodeURIComponent(decoded) === segment;
        } catch { return false; }
      });
    });
}

self.addEventListener('install', function (event) {
  event.waitUntil((async function () {
    if (!validBuild()) throw new Error('Terror Prints: unresolved or invalid offline build.');
    try {
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll(CACHEABLE_ASSETS.map(function (path) {
        return new Request(path, { cache: 'reload', credentials: 'same-origin' });
      }));
    } catch (error) {
      await caches.delete(CACHE_NAME);
      throw error;
    }
    // No skipWaiting: existing tabs keep one coherent HTML/JS/geometry version.
  })());
});

self.addEventListener('activate', function (event) {
  event.waitUntil((async function () {
    const names = await caches.keys();
    await Promise.all(names.filter(function (name) {
      return name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME;
    }).map(function (name) { return caches.delete(name); }));
    // No clients.claim: a page loaded without this version is not taken over.
  })());
});

self.addEventListener('fetch', function (event) {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || url.search || url.hash) return;
  const path = url.pathname === '/' ? SHELL : url.pathname;
  if (!STATIC_PATHS.has(path)) return;
  event.respondWith((async function () {
    const cache = await caches.open(CACHE_NAME);
    const response = await cache.match(path);
    if (response) return response;
    // A missing installed asset must not mix a later online build into this page.
    return new Response('Offline resources are incomplete. Close the app and reopen it online.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store' }
    });
  })());
});
