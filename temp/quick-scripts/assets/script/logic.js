(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/logic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24c9aMsAutNqq3njf9SHNhO', 'logic', __filename);
// script/logic.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {

        cc.director.getCollisionManager().enabled = true;
        /*    cc.director.getCollisionManager().enabledDebugDraw = true;
            cc.director.getCollisionManager().enabledDrawBoundingBox = true;
              this.touchingNumber = 0; */
        /*  var loop = this.node.getChildByName("loop");
         var loopRotate = loop.getComponent(cc.Animation);
         loopRotate.play("rotation"); */
    },


    /*  gameStart () {
    
     var animationComponent = player.getComponent(cc.Animation);
     animationComponent.play("normal");
    
     }, */

    // start () {  },

    update: function update(dt) {}
});

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
        //# sourceMappingURL=logic.js.map
        