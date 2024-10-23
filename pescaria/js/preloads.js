
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.pt-BR.0f9786b570ba75e5e918.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/8919.latest.pt-BR.362ec8a1781caa2de569.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/5853.latest.pt-BR.d123761ae397261d885d.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/4085.latest.pt-BR.00d0e773ceb74385737a.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.b62a26eaaca457032d1c.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/2542.latest.pt-BR.e8b98a9ed829efc0c730.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/9317.latest.pt-BR.eb1dbd55607a377a8342.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/8070.latest.pt-BR.8ff27283522475e94436.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/2080.latest.pt-BR.5117e670600bcaf49bb5.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/145.latest.pt-BR.4e01c68d88c63069f40b.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/434.latest.pt-BR.8aec8849a3c97f455f44.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/8096.latest.pt-BR.b96587e3c67a6c425629.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/8398.latest.pt-BR.af33f3c702acbf3bf184.js","../../cdn.shopify.com/shopifycloud/checkout-web/assets/4619.latest.pt-BR.76ff9b9dd9e015bf9636.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.pt-BR.6e920ca8fe50f67bddf1.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/8919.latest.pt-BR.57ef3369c9cd93bde4db.css","../../cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.pt-BR.19558d19ece777c39c33.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.pt-BR.8039276cabb7faecfb04.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET.html', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  