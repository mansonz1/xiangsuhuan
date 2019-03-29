(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/click.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b8611sb+3hID7a+d5BTU0s+', 'click', __filename);
// script/click.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.a = cc.find("Canvas/player");
        this.node.on(cc.Node.EventType.TOUCH_START, this.clickJump, this);
        cc.director.getCollisionManager().enabled = true;
    },
    clickJump: function clickJump() {
        var newJump = this.a.getComponent("player");
        newJump.gameStart();
    }
}
//start () {}, 
//update (dt) { },
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
        //# sourceMappingURL=click.js.map
        