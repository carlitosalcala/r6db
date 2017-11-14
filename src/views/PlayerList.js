// src/views/PlayerList.js
var m = require("mithril")


var Player = require("../models/Player")


module.exports = {    
    oninit: Player.loadList,
    view: function() {      
        return m(".player-list", Player.list.map(function(player) {
            return m("ul", { "class": "demo-list-item mdl-list" },
                    m("li", { "class": "mdl-list__item" },
                    m("span",{ "class": "mdl-list__item-primary-content" },
                    m("a.player-list-item", 
                        {href: "/basicdetail/" + player.name, oncreate: m.route.link}, " Nick Uplay: " + player.name +
                    "f"
                    
                    )
                    )                    
                )) 
        }))
    }
}