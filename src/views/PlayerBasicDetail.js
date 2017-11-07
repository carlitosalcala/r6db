// copied from src/views/UserForm.js
var m = require("mithril")
var Player = require("../models/Player")

module.exports = {
    oninit: function(vnode) {Player.load(vnode.attrs.id)},
    view: function() {      
            return m("ul", { "class": "demo-list-item mdl-list" },
                    m("li", { "class": "mdl-list__item" },
                    m("span",{ "class": "mdl-list__item-primary-content" },
                    m("a.player-list-item", 
                        {href: "/basicdetail/" + player.name, oncreate: m.route.link}, " Nick Uplay: " + player.name )
                    )                    
                )) 
    }
}