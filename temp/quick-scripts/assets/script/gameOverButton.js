(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/gameOverButton.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '17cc18mhuBA+bGUfKEBO3YN', 'gameOverButton', __filename);
// script/gameOverButton.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},
    gameoverButtonLogic: function gameoverButtonLogic() {
        console.log(123);
        window.location.reload();
    },


    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.node.on("click", this.gameoverButtonLogic, this);
    }
}

// start () {},

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
        //# sourceMappingURL=gameOverButton.js.map
        