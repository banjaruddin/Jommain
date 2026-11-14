const C="jommain-v1";
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./manifest.json","./icon-192.png","./icon-512.png"])));self.skipWaiting()});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{const u=e.request.url;
  if(u.startsWith(self.location.origin)||u.includes("cdn.jsdelivr.net")){const cp=n.clone();caches.open(C).then(c=>c.put(e.request,cp))}return n}).catch(()=>r)))});
