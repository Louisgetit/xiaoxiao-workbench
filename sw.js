/* 小小工作台 Service Worker */
const CACHE='xiaoxiao-workbench-v2';
const ASSETS=['./','./index.html','./manifest.json','./app.js','./lunar.js','./style.css',
  './icons/icon-180.png','./icons/icon-192.png','./icons/icon-512.png'];

self.addEventListener('install',e=>{
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));
});

self.addEventListener('activate',e=>{
  e.waitUntil(Promise.all([
    self.clients.claim(),
    caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))
  ]));
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const u=new URL(req.url);
  if(u.origin!==location.origin)return;              // 外部请求（新闻抓取）直连

  e.respondWith(
    caches.match(req).then(hit=>{
      if(hit){
        // 缓存优先，后台静默更新
        fetch(req).then(res=>{
          if(res&&res.status===200)caches.open(CACHE).then(c=>c.put(req,res.clone()));
        }).catch(()=>{});
        return hit;
      }
      return fetch(req).then(res=>{
        if(res&&res.status===200)caches.open(CACHE).then(c=>{c.put(req,res.clone());});
        return res;
      }).catch(()=>{
        // 仅页面导航才回退到首页，静态资源不回退（避免返回 HTML 造成解析错误）
        if(req.mode==='navigate')return caches.match('./index.html');
        return new Response('',{status:504,statusText:'Offline'});
      });
    })
  );
});
