(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '671c57F68VDfIIyQS438Ta7', 'main', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=main.js.map
        