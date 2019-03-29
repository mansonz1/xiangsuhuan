(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/Camera_Control.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4d0d8vAeZFApamkHe6eVQbD', 'Camera_Control', __filename);
// script/Camera_Control.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        target: {
            default: null,
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.camera = this.getComponent(cc.Camera);
    },


    onEnable: function onEnable() {},

    onDisable: function onDisable() {},

    start: function start() {},


    // update (dt) {},

    update: function update(dt) {
        var targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // pos:人物坐标
        var pos = this.node.parent.convertToNodeSpaceAR(targetPos);

        //摄影机Y超过1000时，环消失
        if (pos.y > this.node.position.y) {
            this.node.position = pos;
        }
    }
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
        //# sourceMappingURL=Camera_Control.js.map
        