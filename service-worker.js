const CACHE_NAME = "recipe-book-v3";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",
    "./icon-512.png",
    "./images/gummies.jpg",
    "./images/chicken-pizza.jpg"
    "./images/keto-bread.jpg"
    "./images/keto-cake.jpg"
];

self.addEventListener("activate", function(event) {

    event.waitUntil(
        caches.keys().then(function(cacheNames) {

            return Promise.all(
                cacheNames.map(function(cacheName) {

                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }

                })
            );

        })
    );

});