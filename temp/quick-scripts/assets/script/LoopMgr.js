(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/LoopMgr.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '47045M8vrJJPr0PaKPKMmwg', 'LoopMgr', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=LoopMgr.js.map
        