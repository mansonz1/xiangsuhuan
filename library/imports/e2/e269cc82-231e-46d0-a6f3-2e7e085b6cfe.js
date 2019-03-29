"use strict";
cc._RF.push(module, 'e269cyCIx5G0KbzLn4IW2z+', 'BirdCollider');
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