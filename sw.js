/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about_tdl.html",
    "revision": "ffb3874f2e49083fd07898b3bcaff977"
  },
  {
    "url": "app.js",
    "revision": "ca9e2a3be820a01a87a0682572c29c5f"
  },
  {
    "url": "icons/big2.jpg",
    "revision": "fa51d4879b0f0bfac2100ab9eb149293"
  },
  {
    "url": "icons/tdl-144.png",
    "revision": "91e5cabd15383b5cb0d3bb4f27886d66"
  },
  {
    "url": "icons/tdl-196.png",
    "revision": "778ec5284af2274e024784f29e987468"
  },
  {
    "url": "icons/tdl-48.png",
    "revision": "3eaa451beea5b86ce3045baaba591ab2"
  },
  {
    "url": "icons/tdl-512.png",
    "revision": "7bf07fbe71fc7d86fa2c5c793a999abb"
  },
  {
    "url": "icons/tdl-96.png",
    "revision": "93b1329692be4f112ef04bb0abf2ff2f"
  },
  {
    "url": "icons/tdl-fev.png",
    "revision": "df85dffc20e525c1293b7ffd6154bd4d"
  },
  {
    "url": "icons/v.png",
    "revision": "28cc8b848ed0212e972cb833177ff730"
  },
  {
    "url": "index.html",
    "revision": "9977036eba4873d7f2ff3980a08d3f2e"
  },
  {
    "url": "manifest.json",
    "revision": "8dd8dfcb76eb8593ff92f38cdffdc47c"
  },
  {
    "url": "package.json",
    "revision": "e47383208f968a2e145068142ab7c8c4"
  },
  {
    "url": "vk.jpg",
    "revision": "7e957ced322e102421747d6f8d8a2b29"
  },
  {
    "url": "workbox-config.js",
    "revision": "32a578962eaedc909abc2c07b14f9112"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
