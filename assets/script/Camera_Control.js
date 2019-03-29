
cc.Class({
    extends: cc.Component,

    properties: {
      target: {
          default: null,
          type: cc.Node
      }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.camera = this.getComponent(cc.Camera);
    },

    onEnable: function () {

    },
    
    onDisable: function () {

    },

    start () {
    },

    // update (dt) {},

    update: function (dt) {
        let targetPos = this.target.convertToWorldSpaceAR(cc.Vec2.ZERO);
        // pos:人物坐标
        let pos = this.node.parent.convertToNodeSpaceAR(targetPos);
    
        //摄影机Y超过1000时，环消失
        if ((pos.y > this.node.position.y)) {
            this.node.position = pos;
        }
    }
});
