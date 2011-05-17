var FFBracketLoader = (function() {

  var isMirrored = function() {
    return FFUrlHelper.getParam("mirror").length > 0;
  }
  
  var renderParty = function($round, partyText, opt) {
    var $party = $("<div/>").addClass("party");
    var options = opt || {};
    $party.appendTo($round);
    
    if (partyText.length > 0) {
      var partyChars = partyText.split("-");
      for (var c in partyChars) {
        var $charImage = $("<p/>").addClass("charImage").addClass(partyChars[c]);
        if (isMirrored()) {
          $charImage.addClass("mirror");
        }
        $charImage.appendTo($party);
      }
    } else if (options.firstRound) {
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
    
    if (regionName == "Championship") {
      loadChampionship(region);
    } else {
      loadInitialRegion(region);
    }
  };
  
  var loadInitialRegion = function(region) {
    for (var r in region) {
      var $round = $("#" + r);
      var $connectors = $("#" + r + "connectors");
      var round = region[r];
      
      for (var m in round) {
        var matchup = round[m];
        
        if (jQuery.isArray(matchup)) {
          renderParty($round, matchup[0]);
          renderParty($round, matchup[1]).addClass("bottom");
          $connectors.append($("<p/>"));
        } else {
          var $party = renderParty($round, matchup);
          if (matchup.length > 0){
            $party.addClass("winner");
            $round.prepend($("<p/>").html("WINNER").addClass("winner"));
          }
        }
      }
    }
  };
  
  var loadChampionship = function(region) {
    var $leftBracket = $(".left.bracket");
    var $rightBracket = $(".right.bracket");
    var $rounds = [".quarter.round", ".semi.round", ".final.round"];
    for (var r in region) {
      var round = region[r];
      var roundNum = parseInt(r.charAt(r.length - 1));
      for (var m in round) {
        var matchup = round[m];
        
        if (round.length > 1) {
          var mirrored = parseInt(m) / (round.length * 0.5) >= 1;
          var $bracket = mirrored ? $rightBracket : $leftBracket;
          var $round = $bracket.find($rounds[roundNum - 1]);
          renderParty($round, matchup[0]).addClass(mirrored ? "mirror" : "");
          renderParty($round, matchup[1]).addClass(mirrored ? "mirror" : "").addClass("bottom");
        } else {
          renderParty($leftBracket.find($rounds[roundNum - 1]), matchup[0]);
          renderParty($rightBracket.find($rounds[roundNum - 1]), matchup[1]).addClass("mirror");
        }
      }
    }
  }
  
  var loadFullBracket = function() {
    var ordinals = ["first", "second", "third", "fourth", "fifth"];
    for (var r in FFRegionData.AllRegions) {
      var region = FFRegionData.AllRegions[r];
      var rounds = region.rounds;
      var $region = $(".region." + r.toLowerCase());
      var i = 0;

      jQuery.each(rounds, function(roundName, round) {
        var $round = $("<div/>").addClass("round");
        $round.addClass(ordinals[i]);
        $round.addClass(i > 0 ? "connector" : "");
        $round.addClass(region.mirrored ? "mirror" : "");
        for (var m in round) {
          var matchup = round[m];
          if (round.length == 1 && !jQuery.isArray(matchup)) {
            renderParty($round, matchup);
          } else {
            var opt = {firstRound:(i == 0)};
            renderParty($round, matchup[0]);
            renderParty($round, matchup[1], opt).addClass("bottom");
          }
        }
        $region.append($round);
        i++;
      });
    }
  };
  
  return {
    loadRegion : function(region) { return loadRegion(region); }
   ,loadFullBracket : loadFullBracket
  };
})();