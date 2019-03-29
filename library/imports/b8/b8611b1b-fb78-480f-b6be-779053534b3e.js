"use strict";
cc._RF.push(module, 'b8611sb+3hID7a+d5BTU0s+', 'click');
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