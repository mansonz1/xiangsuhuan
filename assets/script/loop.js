
cc.Class({
    extends: cc.Component,

    properties: {
    
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.node.runAction(cc.rotateBy(5,360).repeatForever());
    },

    // update (dt) {},
});
