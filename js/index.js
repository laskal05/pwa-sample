const locate = window.location.origin;
let serviceWorkerPath = '/js/service-worker.js';

if ( locate.indexOf('github.io') == -1 ) {
  serviceWorkerPath = '/pwa-sample' + serviceWorkerPath;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(serviceWorkerPath)
    .then(function(reg) {
      console.log('ServiceWorker registeration successed: ', reg.scope);
    }).catch(function(err) {
      console.log('ServiceWorker registration failed: ', err);
    });
}
