var FFUrlHelper = (function() {

    return { 
        getParam : function( name )
        {
          name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
          var regexS = "[\\?&]"+name+"=([^&#]*)";
          var regex = new RegExp( regexS );
          var results = regex.exec( window.location.href );
          if( results == null )
            return "";
          else
            return unescape(results[1]);
        },
    
        buildSiteUrl : function(app) {
            var siteUrl = "";
            var currentUrl = window.location.href; 
            if (currentUrl.indexOf("/app") > -1) {
                var urlPrefix = currentUrl.substr(0, currentUrl.indexOf("/app"));
                siteUrl = urlPrefix.substr(0, urlPrefix.lastIndexOf("/") + 1) + app + "/app/";
            } else {
                var staticUrl = "toddhansberger.com";
                siteUrl = currentUrl.substr(0, currentUrl.indexOf(staticUrl) + staticUrl.length) + "/ffdreplay/";
            }
            
            return siteUrl;
        }
    };
})();