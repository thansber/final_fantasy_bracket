var FFRegionData = (function() {

  var Championship = {
    round1:[["WM-BM-BM-BM", "BB-WM-WM-WM"] // Coneria v Pravoka
           ,["WM-WM-BM-BM", "WM-WM-WM-BM"] // Elfland v Melmond
           ,["BM-BM-BM-BM", "WM-WM-WM-WM"] // Crescent Lake v Onrac
           ,["Fi-WM-WM-WM", "Fi-Fi-WM-WM"]] // Gaia v Lefein
   ,round2:[["", ""]
           ,["", ""]]
   ,round3:[["", ""]]
   ,round4:[""]};
  
  var Coneria = {
      round1:[["Fi-Fi-BM-BM", ""]
             ,["Th-BB-BM-BM", "Fi-BB-RM-WM"]
             ,["Fi-BB-RM-RM", "BB-RM-RM-BM"]
             ,["Th-RM-WM-BM", "WM-BM-BM-BM"]
             ,["Fi-BB-WM-BM", "Th-Th-Th-BB"]
             ,["Th-WM-BM-BM", "BB-BB-BB-BM"]
             ,["Fi-Fi-Fi-BB", "RM-RM-WM-WM"]
             ,["Th-BM-BM-BM", "Fi-Fi-Fi-Fi"]],
      round2:[["Fi-Fi-BM-BM", "Fi-BB-RM-WM"]
             ,["Fi-BB-RM-RM", "WM-BM-BM-BM"]
             ,["Fi-BB-WM-BM", "Th-WM-BM-BM"]
             ,["RM-RM-WM-WM", "Th-BM-BM-BM"]],
      round3:[["Fi-Fi-BM-BM", "WM-BM-BM-BM"]
             ,["Fi-BB-WM-BM", "Th-BM-BM-BM"]],
      round4:[["WM-BM-BM-BM", "Fi-BB-WM-BM"]],
      round5:["WM-BM-BM-BM"]};
    
  var Pravoka = {
    round1:[["Fi-Th-Th-BM", "Fi-RM-BM-BM"]
           ,["Th-Th-Th-WM", "BB-RM-RM-RM"]
           ,["Fi-RM-RM-BM", "Fi-Th-Th-WM"]
           ,["Fi-Fi-RM-WM", "Fi-Fi-BB-RM"]
           ,["Fi-Th-RM-RM", "Th-WM-WM-WM"]
           ,["BB-WM-BM-BM", "Th-BB-WM-BM"]
           ,["Fi-BB-WM-WM", "Th-RM-BM-BM"]
           ,["Fi-Th-BB-BB", "BB-WM-WM-WM"]],
    round2:[["Fi-RM-BM-BM", "BB-RM-RM-RM"]
           ,["Fi-RM-RM-BM", "Fi-Fi-RM-WM"]
           ,["Th-WM-WM-WM", "BB-WM-BM-BM"]
           ,["Fi-BB-WM-WM", "BB-WM-WM-WM"]],
    round3:[["Fi-RM-BM-BM", "Fi-Fi-RM-WM"]
           ,["Th-WM-WM-WM", "BB-WM-WM-WM"]],
    round4:[["Fi-RM-BM-BM", "BB-WM-WM-WM"]],
    round5:["BB-WM-WM-WM"]};
  
  var Elfland = {
      round1:[["Fi-RM-RM-RM", "RM-WM-WM-BM"]
             ,["Th-BB-BB-BB", "BB-RM-WM-BM"]
             ,["Th-Th-BB-BM", "BB-BB-BB-WM"]
             ,["Th-Th-RM-WM", "WM-WM-BM-BM"]
             ,["Fi-BB-RM-BM", "BB-BB-RM-BM"]
             ,["Fi-RM-WM-WM", "Fi-Fi-RM-RM"]
             ,["Fi-BB-BB-BB", "Fi-WM-BM-BM"]
             ,["Th-Th-Th-BM", "Th-Th-BB-BB"]],
      round2:[["RM-WM-WM-BM", "BB-RM-WM-BM"]
             ,["BB-BB-BB-WM", "WM-WM-BM-BM"]
             ,["Fi-BB-RM-BM", "Fi-RM-WM-WM"]
             ,["Fi-WM-BM-BM", "Th-Th-Th-BM"]],
      round3:[["RM-WM-WM-BM", "WM-WM-BM-BM"]
             ,["Fi-RM-WM-WM", "Fi-WM-BM-BM"]],
      round4:[["WM-WM-BM-BM", "Fi-WM-BM-BM"]],
      round5:["WM-WM-BM-BM"]};
  
  var Melmond = {
      round1:[["WM-WM-WM-BM", "Fi-Fi-BB-BM"]
             ,["Fi-Th-RM-WM", "Fi-Th-Th-RM"]
             ,["RM-RM-RM-RM", "BB-BB-WM-WM"]
             ,["BB-BB-RM-WM", "Fi-Fi-Fi-RM"]
             ,["Th-Th-Th-Th", "Th-RM-RM-BM"]
             ,["Fi-Th-BB-WM", "BB-BB-BB-BB"]
             ,["Th-Th-Th-RM", "RM-RM-BM-BM"]
             ,["Fi-RM-WM-BM", "Fi-Th-BB-RM"]],
      round2:[["WM-WM-WM-BM", "Fi-Th-RM-WM"]
             ,["BB-BB-WM-WM", "Fi-Fi-Fi-RM"]
             ,["Th-RM-RM-BM", "Fi-Th-BB-WM"]
             ,["RM-RM-BM-BM", "Fi-RM-WM-BM"]],
      round3:[["WM-WM-WM-BM", "BB-BB-WM-WM"]
             ,["Fi-Th-BB-WM", "Fi-RM-WM-BM"]],
      round4:[["WM-WM-WM-BM", "Fi-RM-WM-BM"]],
      round5:["WM-WM-WM-BM"]};
  
  var CrescentLake = {
      round1:[["Fi-BB-BB-WM", ""]
             ,["RM-RM-RM-WM", "Fi-BM-BM-BM"]
             ,["Th-BB-RM-BM", "BB-BB-BB-RM"]
             ,["BM-BM-BM-BM", "Fi-Th-BM-BM"]
             ,["Fi-Fi-Th-BM", "Fi-Fi-WM-BM"]
             ,["Th-Th-WM-BM", "RM-BM-BM-BM"]
             ,["Th-RM-RM-WM", "Fi-BB-BB-BM"]
             ,["Th-BB-RM-WM", "Fi-Fi-RM-BM"]],
      round2:[["Fi-BB-BB-WM", "Fi-BM-BM-BM"]
             ,["BB-BB-BB-RM", "BM-BM-BM-BM"]
             ,["Fi-Fi-WM-BM", "RM-BM-BM-BM"]
             ,["Fi-BB-BB-BM", "Fi-Fi-RM-BM"]],
      round3:[["Fi-BM-BM-BM", "BM-BM-BM-BM"]
             ,["Fi-Fi-WM-BM", "Fi-BB-BB-BM"]],
      round4:[["BM-BM-BM-BM", "Fi-Fi-WM-BM"]],
      round5:["BM-BM-BM-BM"]};
  
  var Onrac = {
      round1:[["BB-RM-RM-WM", "Th-BB-BB-RM"]
             ,["Fi-Fi-Th-Th", "Th-Th-WM-WM"]
             ,["BB-RM-BM-BM", "Th-Th-BM-BM"]
             ,["Th-WM-WM-BM", "Th-Th-RM-BM"]
             ,["BB-BM-BM-BM", "WM-WM-WM-WM"]
             ,["Th-BB-RM-RM", "Th-BB-WM-WM"]
             ,["Fi-Th-BB-BM", "Fi-BB-BM-BM"]
             ,["Fi-Fi-Fi-BM", "BB-BB-WM-BM"]],
      round2:[["Th-BB-BB-RM", "Th-Th-WM-WM"]
             ,["BB-RM-BM-BM", "Th-WM-WM-BM"]
             ,["WM-WM-WM-WM", "Th-BB-WM-WM"]
             ,["Fi-BB-BM-BM", "BB-BB-WM-BM"]],
      round3:[["Th-Th-WM-WM", "Th-WM-WM-BM"]
             ,["WM-WM-WM-WM", "Fi-BB-BM-BM"]],
      round4:[["Th-WM-WM-BM", "WM-WM-WM-WM"]],
      round5:["WM-WM-WM-WM"]};
  
  var Gaia = {
      round1:[["RM-WM-WM-WM", "Fi-Th-WM-WM"]
             ,["Th-Th-BB-RM", "BB-WM-WM-BM"]
             ,["BB-BB-RM-RM", "Fi-Th-Th-Th"]
             ,["Fi-Th-Th-BB", "Fi-Fi-BB-WM"]
             ,["Fi-BB-BB-RM", "RM-RM-RM-BM"]
             ,["Fi-WM-WM-WM", "Fi-Th-WM-BM"]
             ,["BB-RM-WM-WM", "BB-BB-BM-BM"]
             ,["Fi-WM-WM-BM", "Fi-Fi-BB-BB"]],
      round2:[["RM-WM-WM-WM", "BB-WM-WM-BM"]
             ,["BB-BB-RM-RM", "Fi-Fi-BB-WM"]
             ,["Fi-BB-BB-RM", "Fi-WM-WM-WM"]
             ,["BB-BB-BM-BM", "Fi-WM-WM-BM"]],
      round3:[["BB-WM-WM-BM", "Fi-Fi-BB-WM"]
             ,["Fi-WM-WM-WM", "Fi-WM-WM-BM"]],
      round4:[["BB-WM-WM-BM", "Fi-WM-WM-WM"]],
      round5:["Fi-WM-WM-WM"]}; 
  
  var Lefein = {
      round1:[["Th-RM-RM-RM", "RM-RM-WM-BM"]
             ,["Fi-Fi-Th-RM", "Th-BB-BB-WM"]
             ,["RM-WM-BM-BM", "Fi-Fi-Fi-WM"]
             ,["Th-BB-BB-BM", "Fi-Fi-Th-BB"]
             ,["Fi-Fi-WM-WM", "Fi-Fi-Th-WM"]
             ,["Th-Th-BB-WM", "Fi-Th-RM-BM"]
             ,["Th-RM-WM-WM", "Fi-Fi-Fi-Th"]
             ,["Th-Th-RM-RM", "Fi-RM-RM-WM"]],
      round2:[["RM-RM-WM-BM", "Th-BB-BB-WM"]
             ,["RM-WM-BM-BM", "Th-BB-BB-BM"]
             ,["Fi-Fi-WM-WM", "Fi-Th-RM-BM"]
             ,["Th-RM-WM-WM", "Fi-RM-RM-WM"]],
      round3:[["Th-BB-BB-WM", "RM-WM-BM-BM"]
             ,["Fi-Fi-WM-WM", "Fi-RM-RM-WM"]],
      round4:[["RM-WM-BM-BM", "Fi-Fi-WM-WM"]],
      round5:["Fi-Fi-WM-WM"]}; 
  
  var all = {"coneria":{rounds:Coneria, name:"Coneria"}
            ,"pravoka":{rounds:Pravoka, name:"Pravoka"}
            ,"elfland":{rounds:Elfland, name:"Elfland"}
            ,"melmond":{rounds:Melmond, name:"Melmond"}
            ,"crescent_lake":{rounds:CrescentLake, name:"Crescent Lake", mirrored:true}
            ,"onrac":{rounds:Onrac, name:"Onrac", mirrored:true}
            ,"gaia":{rounds:Gaia, name:"Gaia", mirrored:true}
            ,"lefein":{rounds:Lefein, name:"Lefein", mirrored:true}};
  
  return {
    Coneria : Coneria,
    Pravoka : Pravoka,
    Elfland : Elfland, 
    Melmond : Melmond, 
    "Crescent Lake" : CrescentLake, 
    Onrac : Onrac, 
    Gaia : Gaia,
    Lefein : Lefein,
    Championship : Championship,
    AllRegions : all
  }
    
})();