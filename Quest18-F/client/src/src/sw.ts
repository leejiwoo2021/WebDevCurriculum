const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/main.js',
  '/logo.png',
  '/logo2.png',
  '/manifest.json'
];

let db:IDBDatabase;
var request = indexedDB.open("MyTestDatabase");
request.onerror = function(event) {
  console.log("Why didn't you allow my web app to use IndexedDB?!");
};
request.onsuccess = function(event:any) {
  db = event.target.result;
};

// const requestData = [
//   {request: "444-44-4444", response: "Bill", },
//   {request: "555-55-5555", response: "Donna", }
// ];


request.onupgradeneeded = function(event:any) {
  var db = event.target.result;
  var objectStore = db.createObjectStore("fetches",{autoIncrement: true});
  objectStore.createIndex("request", "request", { unique: true });
  objectStore.createIndex("response", "response", { unique: false });
  // objectStore.transaction.oncomplete = function() {
  //   const fetchObjectStore = db.transaction("fetches", "readwrite").objectStore("fetches");
  //   requestData.forEach(function(reqResObj) {
  //     fetchObjectStore.add(reqResObj);
  //   });
  // };
};



self.addEventListener('install', function(event:any) {
  // Perform install steps\
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event:any) {
  if(event.request.method === 'GET') {
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request).then(function(response) {
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(event.request, response.clone());
        });
        return response;
      });
    })
  }
  else if(event.request.method === 'POST') {
    const reqClone = event.request.clone();
    console.log(reqClone);

    fetch(event.request).then(function(response) {
      const transaction = db.transaction("fetches", "readwrite");

      transaction.oncomplete = function(event) {
      };
      
      transaction.onerror = function(event) {
      };

      const objectStore = transaction.objectStore("fetches");
      const obj =   {request:event.request, response: "Donna!" }
      objectStore.add(obj);
      console.log('added');
      return response;
    });
  }
});