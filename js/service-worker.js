self.addEventListener('install', event => {
  console.log('Install completed.');
});

self.addEventListener('fetch', event => {
  console.log('Fetch event is occured.');
});

self.addEventListener('activate', function(event) {
  console.log('Activate is done.');
});
