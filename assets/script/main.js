
cc.Class({
    extends: cc.Component,

    properties: {
       
    },

    onclick () {
        cc.director.loadScene("GameScene");

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var button = this.node.getChildByName("button");
        button.on("click",this.onclick,this);
    },

    start () {
       
    },

    // update (dt) {},
});
