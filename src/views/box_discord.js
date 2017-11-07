//src/views/box_discord.js
var m = require("mithril")

console.log("layout loaded")


module.exports = {
    view: function(vnode) {
        return m(
            "button",
            { "class": "mdl-chip demo-chip" },
            m(
                "span",
                { "class": "mdl-chip__contact" },
                "\xA0"
            ),
            m(
                "span",
                { "class": "mdl-chip__text" },
                "Canal Discord https://discord.gg/x3eeX6u"
            ),
            m(
                "a",
                { href: "https://discord.gg/x3eeX6u", "class": "mdl-chip__action" },
                m(
                    "i",
                    { "class": "material-icons" },
                    "chat"
                )
            )
        )
}
}