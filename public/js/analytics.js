(function() {
  var cly = document.createElement('script'); cly.type = 'text/javascript'; 
  cly.async = true;
  // Enter url of script here (see below for other option)
  cly.src = 'https://cdn.jsdelivr.net/npm/countly-sdk-web@latest/lib/countly.min.js';
  cly.onload = function(){Countly.init({
    app_key: "12345",
    url: `https://webhook-bridge-f5f9m1de3hzh.runkit.sh/eyJhbGciOiJIUzI1NiJ9.eyJzdHJlYW0iOiJjMGVhYzdlMjk2ZDM0ZTlmODcwYzhlN2I2OTVkNjI3YTpkb21vOjI2NjUzNjg2OCJ9.b0yH1xzKiLK3lsKRSurMlCUQJIdnIx37vknQuhrHP-Y`,
    force_post: true,
    app_version: "0.0.1"
  })};
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(cly, s);
})();