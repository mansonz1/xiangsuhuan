(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/script/player.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '96f8cPOc1FIzLjxPfg/8afq', 'player', __filename);
// script/player.js

"use strict";

cc.Class({
  extends: cc.Component,

  properties: {
    jumpHeight: 130,
    jumpDuration: 0.2,
    fallingDistance: 20

  },
  setJump: function setJump() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionIn());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, 0)).easing(cc.easeCubicActionIn());

    return cc.sequence(jumpUp, jumpDown);
  },
  setDown: function setDown() {
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, 0)).easing(cc.easeCubicActionIn());
    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.fallingDistance)).easing(cc.easeCubicActionIn());

    return cc.sequence(jumpUp, jumpDown);
  },


  // LIFE-CYCLE CALLBACKS:

  onLoad: function onLoad() {

    this.score = 0;
    cc.director.getCollisionManager().enabled = true;

    this.scoreString = cc.find("Canvas/Main Camera/jieshu/scoreString").getComponent("cc.Label");
    this.over = cc.find("Canvas/Main Camera/jieshu");
    this.overButton = cc.find("Canvas/Main Camera/gameoverButton");
    this.total = cc.find("Canvas/Main Camera/score").getComponent("cc.Label");

    console.log(this.total);

    this.over.active = false;
    this.overButton.active = false;

    var random = Math.floor(Math.random() * 3);
    this.child = this.node.children;

    for (var i = 0; i < this.child.length; i++) {
      if (i != random) {
        this.child[i].active = false;
      } else {
        this.child[i].active = true;
        this.trueBird = this.child[i];
        this.color = i;
      }
    };
  },
  gameStart: function gameStart() {

    this.jump = this.setJump();
    this.node.runAction(this.jump);

    this.animationComponent = this.trueBird.getComponent(cc.Animation);

    this.animationComponent.play("normal");
  },

  onCollisionEnter: function onCollisionEnter(other, self) {
    //碰环检测
    if (other.tag == 0 || other.tag == 1 || other.tag == 2 || other.tag == 3) {
      if (other.tag == this.color) {
        //ok
        /* cc.log("good !!") */
      } else {
        //ng
        this.onDie();
      }
    }
    //吃分检测
    if (other.tag == 4) {
      //ok
      this.score += 1;
      this.scoreString.string = this.score;
      console.log(this.total.string);
      this.total.string = "总得分:" + this.score;
      other.enabled = false;
      other.node.active = false;
      return this.score;
      /* console.log("当前得分:"+this.score); */
    }
    //触地检测
    if (other.tag == 5) {
      //ok
      console.log("触地");
      this.onDie();
    }
  },

  onDie: function onDie() {
    console.log(this.score);
    this.over.active = true;
    this.overButton.active = true;
    cc.director.pause();
  },
  start: function start() {},
  update: function update(dt) {
    /* this.scoreString = this.score; */
    this.down = this.setDown();
    this.node.runAction(this.down);
  }
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
        //# sourceMappingURL=player.js.map
        