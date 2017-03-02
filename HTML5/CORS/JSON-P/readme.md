# JSON-P  






















https://code.google.com/archive/p/html5security/wikis/CrossOriginRequestSecurity.wiki



https://developer.github.com/v3/#cross-origin-resource-sharing


https://developer.github.com/v3/#json-p-callbacks



curl https://api.github.com?callback=foo

/**/foo({
  "meta": {
    "status": 200,
    "X-RateLimit-Limit": "5000",
    "X-RateLimit-Remaining": "4966",
    "X-RateLimit-Reset": "1372700873",
    "Link": [ // pagination headers and other links
      ["https://api.github.com?page=2", {"rel": "next"}]
    ]
  },
  "data": {
    // the data
  }
})











