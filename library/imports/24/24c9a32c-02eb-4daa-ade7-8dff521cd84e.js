"use strict";
cc._RF.push(module, '24c9aMsAutNqq3njf9SHNhO', 'logic');
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