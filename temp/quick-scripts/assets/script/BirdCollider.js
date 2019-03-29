(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/BirdCollider.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e269cyCIx5G0KbzLn4IW2z+', 'BirdCollider', __filename);
// script/BirdCollider.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        cc.director.getCollisionManager().enabled = true;

        this.bird = this.node;

        /*       cc.director.getCollisionManager().enabledDebugDraw = true;
               cc.director.getCollisionManager().enabledDrawBoundingBox = true; */

        /*  this.touchingNumber = 0; */
    },

    onCollisionEnter: function onCollisionEnter(other, self) {},
    onCollisionStay: function onCollisionStay(other, self) {
        var bird = this.node;

        if (bird.y <= -400) {
            bird.y = -400;
        }
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
        //# sourceMappingURL=BirdCollider.js.map
        