/*global m */
var app = app || {};
// src/index.js
var m = require("mithril")
var UserList = require("./views/UserList")
var UserForm = require("./views/UserForm") 

 
// my shit
var storage = require("./models/storage")
var PlayerList = require("./views/PlayerList")
var PlayerBasicDetail = require("./views/PlayerBasicDetail")
var discord_box = require("./views/box_discord")

// standard shit
var Layout = require("./views/Layout")

console.log("require from index loaded")

//storage.put("test")

m.route(document.body, "/player", {
   "/list": {
        render: function() {
            return m(Layout, m(UserList))
        }
    }, 
    "/edit/:id": {
        render: function(vnode) {
            return m(Layout, m(UserForm, vnode.attrs))
        }
    },  
    // my shit
    "/player": {
        render: function() {
         return m(Layout, m(PlayerList),m(discord_box))
          // return m(PlayerList ,m(discord_box))
        }
    },
    "/basicdetail/:id": {
        render: function() {
            return m(Layout, m(PlayerBasicDetail)) // m(PlayerBasicDetail))
        }
    },
})