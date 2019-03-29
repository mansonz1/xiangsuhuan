"use strict";
cc._RF.push(module, '09d67lIoClMYKuQmZ3jHYfl', 'loop');
// script/loop.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        this.node.runAction(cc.rotateBy(5, 360).repeatForever());
    }
}

// update (dt) {},
);

cc._RF.pop();