var FFBracketLoader = (function() {

    var isMirrored = function() {
        return FFUrlHelper.getParam("mirror").length > 0;
    }
    
    var renderParty = function($round, region, partyText) {
        var $charImages = (isMirrored() ? $("#charImagesMirrored") : $("#charImages"));
        var $party = $("<div/>").addClass("party");
        $party.appendTo($round);
        
        if (partyText.length > 0) {
            var partyChars = partyText.split(" - ");
            for (var c in partyChars) {
                //var $charImage = $("." + partyChars[c], $charImages).clone();
                var $charImage = $("<p/>").addClass("charImage").addClass(partyChars[c]);
                if (isMirrored()) {
                  $charImage.addClass("mirror");
                }
                $charImage.appendTo($party);
            }
        } else if ($round.attr("id") == "round1") {
            $party.addClass("bye").append($("<span>BYE</span>"));
        }
        
        return $party;
    };
    
    var loadRegion = function(regionName) { 
        var region = FFRegionData[regionName];
        
        if (!region) {
            alert("Invalid region [" + regionName + "]");
            return false;
        }
        
        $("h1").text(regionName + " Region");
        
        if (isMirrored()) { 
            $("body").addClass("mirror");
        }
        
        for (var r in region) {
            var $round = $("#" + r);
            var $connectors = $("#" + r + "connectors");
            var round = region[r];
            
            for (var m in round) {
                var matchup = round[m];
                
                if (jQuery.isArray(matchup)) {
                    renderParty($round, regionName, matchup[0]);
                    renderParty($round, regionName, matchup[1]).addClass("bottom");
                    $connectors.append($("<p/>"));
                } else {
                    var $party = renderParty($round, regionName, matchup);
                    if (matchup.length > 0){
                        $party.addClass("winner");
                        $round.prepend($("<p/>").html("WINNER").addClass("winner"));
                    }
                }
            }
        }
    };
    
    return {
        loadRegion : function(region) { return loadRegion(region); }
    };
})();