"use strict";
cc._RF.push(module, '671c57F68VDfIIyQS438Ta7', 'main');
// script/main.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    onclick: function onclick() {
        cc.director.loadScene("GameScene");
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var button = this.node.getChildByName("button");
        button.on("click", this.onclick, this);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();