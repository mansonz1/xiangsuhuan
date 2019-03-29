"use strict";
cc._RF.push(module, '17cc18mhuBA+bGUfKEBO3YN', 'gameOverButton');
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