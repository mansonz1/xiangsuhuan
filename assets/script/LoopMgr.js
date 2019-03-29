
cc.Class({
    extends: cc.Component,

    properties: {
       loopPrefab:{default:null, type:cc.Prefab},
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        /* Game.loopMgr = this; */
        this.loopPool = new cc.NodePool();
        let initCount = 5;
        for (let i=0; i<initCount; ++i) {
            let loop = cc.instantiate(this.loopPrefab);
            this.loopPool.put(loop);
        }
        for (let i = 0; i < 5; ++i) {
            this.addLoop(i);
        }
    },
    addLoop: function (index) {
        let loop = null;
        if (this.loopPool.size() > 0) {
            loop = this.loopPool.get();
        } else {
            loop = cc.instantiate(this.loopPrefab);
        }
        this.node.addChild(loop);
        loop.zIndex = 1;
        loop.y = index * 800;
        loop._tag = index;
        loop.name = "loop" + index;
    }

    // update (dt) {},
});
