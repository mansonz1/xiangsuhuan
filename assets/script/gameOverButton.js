
cc.Class({
    extends: cc.Component,

    properties: {
       
    },
    gameoverButtonLogic () {
      console.log(123);
      window.location.reload();  
      
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
      this.node.on("click",this.gameoverButtonLogic,this);
    },

    // start () {},

    // update (dt) {},
});
