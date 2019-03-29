"use strict";
cc._RF.push(module, '8dcb2J5hL1MoKe3ZpjJv06b', 'bottomCollider');
// script/bottomCollider.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();