// src/models/Player.js
var m = require("mithril")

var localList = require("../data/local.json")
console.log("player loading...")

// if (localStorage.getItem("LocalPlayerList")){
//     console.log("loading data from local storage")
//     var localList = localStorage.getItem("LocalPlayerList");
// }else{
//     var _Player = JSON.stringify(localList);
//     localStorage.setItem("LocalPlayerList", _Player);
//     console.log("Player saved: " + localStorage.getItem("LocalPlayerList"))
// }

var Player = {
    list: [],
    loadList: function() {
        Player.list = localList
        console.log("Loaded json file and assigned to Player.list: " + localList[0].name);
    },
    current: {}, 
    load: function(id) { 
        console.log(id);
        alert(id.name);
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

 