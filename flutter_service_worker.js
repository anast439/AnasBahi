'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "74f09e3b6d701d714feccac90a531914",
"assets/AssetManifest.bin.json": "3d6e9a119372ce21563b72df8f484732",
"assets/AssetManifest.json": "05e15319e9e5cf67069ed1b75122aaf2",
"assets/assets/Cv.pdf": "fa12345b08b053b1618f85c52e6b6db8",
"assets/assets/dart1.png": "1a092a515af72fea533f3733ce67de3b",
"assets/assets/dart2.png": "61d8dbc5af954493649223d90e163cd9",
"assets/assets/Ellipse1.png": "3dcd732c078f746677ab7cb81077e71f",
"assets/assets/Ellipse2.png": "176ac7168a605f29361c19288fc6f051",
"assets/assets/Ellipse3.png": "ee7300205bf6d0de693a260b6fd995c8",
"assets/assets/Ellipse4.png": "044af230bbfbd982f5505544a9d0134f",
"assets/assets/firebase.png": "599a6345c872408147faa8325702628c",
"assets/assets/flutter1.png": "74a632c6a2357400d065191a6a95dcde",
"assets/assets/flutter2.png": "4f5c4a8dc2fc65cd873d1f601c4d084c",
"assets/assets/IMG_0226.JPG": "ad24f8f796c0a754867abf6f67aa9536",
"assets/assets/javascript.png": "c1f39577de277de6ff5f654e996f1028",
"assets/assets/jquery.png": "7e3270de4c75c11d22a898f235340200",
"assets/assets/load1.mp4": "d63055173a84ca31f630b97b552fd036",
"assets/assets/load2.mp4": "a3d449ae8b2344fddb051fb639e232cf",
"assets/assets/loader1.gif": "26a9dc606568bfdc33ca1501509f8201",
"assets/assets/loader2.gif": "028691d661134f47fe94f912c9283abb",
"assets/assets/loader3.gif": "2526722c0f0695df66a5a6acf255043c",
"assets/assets/loader4.gif": "b2b7e3ec9f4a19a7709026d8e3236ab5",
"assets/assets/man1.png": "190a459f432223151bc1c3a636996332",
"assets/assets/man2.png": "00819b0a7e10c6b6a46e78f6b33f55e1",
"assets/assets/php1.png": "be4e97dc2013d24f31fc83b8e1b87733",
"assets/assets/php2.png": "0b627a9581c51a7660ab4a19d65e551c",
"assets/assets/preview1.png": "c9bfca8b712316070b6c9c712d93b070",
"assets/assets/preview2.png": "4c9c5ce204d3a10444cb9258badc25ba",
"assets/assets/preview3.png": "61c7832bdbe45ce0a430a440d036c17a",
"assets/assets/preview4.png": "175a72f6e4b73a90d593d98d3748ef0c",
"assets/assets/preview5.png": "c2cc09022d3ebe873a19cc2af7ea3f8f",
"assets/assets/preview6.png": "271ccf151a27aab92fda5777aaf2251a",
"assets/assets/python.png": "db3c482a0af10aa64e5088409502bfa6",
"assets/assets/sql1.png": "257a1bbec521e776f64870c2e67d061d",
"assets/assets/sql2.png": "bd6f6745a7569e06343ae13832f4d1fc",
"assets/assets/star.png": "996dbbb50e1f0d499dbd254745900717",
"assets/assets/Vector.png": "59f96d4d7d7944db37d65b100fe731f6",
"assets/assets/web.png": "cf0c1baa38783b87071f6c18836a12b0",
"assets/FontManifest.json": "3c6f2aec284ba6e927fd5e00fb6c4257",
"assets/fonts/MaterialIcons-Regular.otf": "4895f78374ad463ce5b857d599e14dd4",
"assets/load1.mp4": "d63055173a84ca31f630b97b552fd036",
"assets/load2.mp4": "a3d449ae8b2344fddb051fb639e232cf",
"assets/load3.gif": "e4e5b247cc605929a22a71af3eb8e1cc",
"assets/NOTICES": "535ae68c0c7c66dc1c2a7ef494883f29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/web/assets/load1.mp4": "d63055173a84ca31f630b97b552fd036",
"assets/web/assets/load2.mp4": "a3d449ae8b2344fddb051fb639e232cf",
"assets/web/assets/load3.gif": "e4e5b247cc605929a22a71af3eb8e1cc",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c5704215201eee156eb4ce7faa72c809",
"/": "c5704215201eee156eb4ce7faa72c809",
"main.dart.js": "7bc011a38f4161603d5fdf41e3707503",
"manifest.json": "9489fd5631ba1e20b033acee24aa6a18",
"version.json": "fb8d4678888024cd5f83d8522bb3a722"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
