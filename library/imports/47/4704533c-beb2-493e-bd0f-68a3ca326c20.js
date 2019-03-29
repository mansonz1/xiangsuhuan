"use strict";
cc._RF.push(module, '47045M8vrJJPr0PaKPKMmwg', 'LoopMgr');
// script/LoopMgr.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        loopPrefab: { default: null, type: cc.Prefab }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {
        /* Game.loopMgr = this; */
        this.loopPool = new cc.NodePool();
        var initCount = 5;
        for (var i = 0; i < initCount; ++i) {
            var loop = cc.instantiate(this.loopPrefab);
            this.loopPool.put(loop);
        }
        for (var _i = 0; _i < 5; ++_i) {
            this.addLoop(_i);
        }
    },

    addLoop: function addLoop(index) {
        var loop = null;
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

cc._RF.pop();