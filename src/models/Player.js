// src/models/Player.js
var m = require("mithril")
var localList_file = require("../data/local.json")

console.log("player loading...")
// LocalPlayerList item 
if (localStorage.getItem("LocalPlayerList")){
    console.log("loading data from local storage")
    var localList = localStorage.getItem("LocalPlayerList");
}else{
    // var localListFile = require("../data/local.json")
    var _PlayerList = JSON.stringify(localListFile);
    localStorage.setItem("LocalPlayerList", _PlayerList);
    var localList = localStorage.getItem("LocalPlayerList");    // set data to parse it
    console.log("Player saved: " + localStorage.getItem("LocalPlayerList"))
}
console.log("logintud localList" + localList.length);
console.log("logintud 1 localList" + localList[1]);
// List of results - if no data -> lauch query data
// if (localStorage.getItem("LocalPlayerListResults"))  {
//     console.log("loading data results from local storage")
//     var localListResults = localStorage.getItem("LocalPlayerListResults");    
// }else{
//     for (let index = 0; index < localList.length; index++) {
//         const element = array[index];
        
//     }
//     var _PlayerListResults = JSON.stringify(localListFile);
//     localStorage.setItem("LocalPlayerList", _PlayerList);
//     var localList = localStorage.getItem("LocalPlayerList");    // set data to parse it
//     console.log("Player saved: " + localStorage.getItem("LocalPlayerList"))
// }

var Player = { 
    list: [],
    loadList: function() {
        if (localList){
            Player.list = JSON.parse(localList);
        }else{
            console.log("loadlist vacio")
        }
        console.log("Loaded json file and assigned to Player.list: " + localList[0].name);
    },
    current: {}, 
    load: function(vnode) { 
        console.log(this);
        //alert(vnode);
        /* 
        return m.request({
            method: "GET",
            url: "https://r6db.com/api/v2/players?name=" + id + "&platform=PC&exact=true",
            headers: {
                'X-App-Id': 'b6131c13d379bb5429a1437e1e823836'
            },  
        })
        .then(function(result) {
            console.log("load funcion done and result was given with value: " + result)
            Player.current = result
        })  */
    } 
}

if (Player.list[0] == null){
    console.log("Player no full")
}else{
    console.log("Player.list[1]")
}

module.exports = Player

 