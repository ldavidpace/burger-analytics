(function() {
  var cly = document.createElement('script'); cly.type = 'text/javascript';
  cly.async = true;
  // Enter url of script here (see below for other option)
  cly.src = 'https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js';
  cly.onload = function(){
    Countly.init({
      app_key: "12345",
      url: `https://webhook-bridge-f5f9m1de3hzh.runkit.sh/eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiI5MmJhM2EzZjIwZjk0MWI0YmE2ZmQ2ODg5ZmU4N2UxZTphcHBzdG9yZTo3ODg5Njk2MDUifQ.bnsZwJnJre3QSl6jqmMjFqRqwMRDVMxlErWR6W_HWXA`,
      force_post: true,
      app_version: "0.0.1"
    })
    Countly.track_sessions();
    Countly.track_pageview();
    Countly.track_links();
    Countly.track_scrolls();
    loadUserData();
    Countly.q.push(['collect_from_forms']);
  };
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
})();

const loadUserData = function() {
  fetch('https://ipapi.co/json').then(function(response) {return response.json()}).then(function(location) {
    console.log(location);
    Countly.q.push(['user_details', {
      "custom": location,
    }])
  })
}