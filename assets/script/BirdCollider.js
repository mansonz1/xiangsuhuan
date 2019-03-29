
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
        cc.director.getCollisionManager().enabled = true;

        this.bird = this.node;
        
 /*       cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true; */

       /*  this.touchingNumber = 0; */

        
    },
onCollisionEnter: function (other, self) {   
 }, 
 onCollisionStay: function (other, self) {
    var bird = this.node;

    if (bird.y <= -400) {
      bird.y = -400
    }
},
    start () {

    },

    // update (dt) {},
});
