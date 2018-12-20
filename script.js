'use strict';


function blankChange() {
    var x = document.getElementById("blank");
    let Colors = ["azure", "bisque", "seashell", "salmon", "powderblue"];
    var cNum = Math.floor(Math.random() * (Colors.length));
    let Loves = ["Kai of EXO", "Tattoos", "Typography", "Instagramming", "Rommance"];
    var lNum = Math.floor(Math.random() * (Loves.length));
    x.style.color = Colors[cNum];
    x.innerHTML = Loves[lNum];
}

function changeToo() {
    var x = document.getElementById("category");
    var y = document.getElementById("blank");

    x.innerHTML = y.innerHTML;
}

$(window).load(function () {
            $('#load').hide();
});

module.exports = {
    "env": {
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [2, 2],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
    