cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.a =cc.find("Canvas/player");
        this.node.on(cc.Node.EventType.TOUCH_START,this.clickJump,this);
        cc.director.getCollisionManager().enabled = true;
      
    },

  clickJump () {
      var newJump = this.a.getComponent("player");
      newJump.gameStart();

},
    //start () {}, 
    //update (dt) { },
});