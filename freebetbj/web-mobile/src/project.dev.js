window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Alert: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f04d9rqZutEqY4fW1vv2hH1", "Alert");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../lib/CocosUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Alert = function(_super) {
      __extends(Alert, _super);
      function Alert() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isShowing = false;
        return _this;
      }
      Alert.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Alert.prototype.onLoad = function() {
        var _this = this;
        this.fadeAction = cc.sequence(cc.fadeIn(.75), cc.delayTime(.5), cc.fadeOut(.75), cc.callFunc(function() {
          _this.node.active = false;
          _this.isShowing = false;
        }));
      };
      Alert.prototype.show = function(message) {
        if (this.isShowing) {
          this.node.stopAction(this.fadeAction);
          this.isShowing = false;
        }
        this.root["$layout"]["#message"]["label"].string = message;
        this.root["$layout"]["#message"]["label"]._forceUpdateRenderData();
        this.root["#layout"]["layout"].updateLayout();
        this.root["bg"].width = this.root["layout"].width;
        this.root["bg"].height = this.root["layout"].height;
        this.node.opacity = 0;
        this.node.active = true;
        this.isShowing = true;
        this.node.runAction(this.fadeAction);
      };
      Alert = __decorate([ ccclass ], Alert);
      return Alert;
    }(cc.Component);
    exports.default = Alert;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  Alias: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "20cb0DCF7xLW5Iqhou3eAW3", "Alias");
    cc._RF.pop();
  }, {} ],
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "082fcfP85NJOZqX4211TwIn", "Audio");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJSetting_1 = require("./FreeBetBJSetting");
    var FreeBetBJContent_1 = require("./FreeBetBJContent");
    var Audio = function() {
      function Audio() {
        this.effectVolume = 1;
        this.musicVolume = .5;
        cc.audioEngine.setMusicVolume(this.musicVolume);
        cc.audioEngine.setEffectsVolume(this.effectVolume);
      }
      Audio.prototype.setMusicVolume = function(play) {
        FreeBetBJSetting_1.freeBetBJSetting.music = play;
        play ? this.playMusic(FreeBetBJContent_1.music.bg) : this.stopMusic();
      };
      Audio.prototype.setEffectVolume = function(play) {
        FreeBetBJSetting_1.freeBetBJSetting.sound = play;
        play || this.stopEffect();
      };
      Audio.prototype.playMusic = function(clip) {
        FreeBetBJSetting_1.freeBetBJSetting.music && cc.audioEngine.playMusic(clip, true);
      };
      Audio.prototype.stopMusic = function() {
        cc.audioEngine.stopMusic();
      };
      Audio.prototype.playEffect = function(clip) {
        FreeBetBJSetting_1.freeBetBJSetting.sound && cc.audioEngine.playEffect(clip, false);
      };
      Audio.prototype.stopEffect = function() {
        cc.audioEngine.stopAllEffects();
      };
      return Audio;
    }();
    exports.default = Audio;
    exports.audio = new Audio();
    cc._RF.pop();
  }, {
    "./FreeBetBJContent": "FreeBetBJContent",
    "./FreeBetBJSetting": "FreeBetBJSetting"
  } ],
  Balance: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e4fdAdpitMxoEEHAxh/iV9", "Balance");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../lib/CocosUtils");
    var FreeBetBJSetting_1 = require("../lib/FreeBetBJSetting");
    var FreeBetBJText_1 = require("../lib/FreeBetBJText");
    var FreeBetBJTableInfo_1 = require("../lib/FreeBetBJTableInfo");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Balance = function(_super) {
      __extends(Balance, _super);
      function Balance() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.balance = null;
        _this.balanceCN = null;
        return _this;
      }
      Balance.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Balance.prototype.onLoad = function() {
        this.init();
      };
      Balance.prototype.start = function() {
        this.language();
      };
      Balance.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        if ("EN" === lang) {
          this.root["#balance"]["sprite"].spriteFrame = this.balance;
          this.root["#point"]["label"].string = FreeBetBJText_1.freeBetBJText.EN.Balance.Point;
        } else if ("CN" === lang) {
          this.root["#balance"]["sprite"].spriteFrame = this.balanceCN;
          this.root["#point"]["label"].string = FreeBetBJText_1.freeBetBJText.CN.Balance.Point;
        }
      };
      Balance.prototype.setMoney = function(money) {
        this.root["#money"]["label"].string = money + "";
      };
      Balance.prototype.updateMoney = function() {
        this.setMoney(FreeBetBJTableInfo_1.gamerInfo.balance / 100);
      };
      __decorate([ property(cc.SpriteFrame) ], Balance.prototype, "balance", void 0);
      __decorate([ property(cc.SpriteFrame) ], Balance.prototype, "balanceCN", void 0);
      Balance = __decorate([ ccclass ], Balance);
      return Balance;
    }(cc.Component);
    exports.default = Balance;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../lib/FreeBetBJTableInfo": "FreeBetBJTableInfo",
    "../lib/FreeBetBJText": "FreeBetBJText"
  } ],
  BetValue: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9470W9GiBNmJ+IIy2poSc8", "BetValue");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BetValue = function(_super) {
      __extends(BetValue, _super);
      function BetValue() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BetValue.prototype.setBetValue = function(value) {
        this.node.getChildByName("bet").getComponent(cc.Label).string = FreeBetBJContent_1.getFormatNumberString(value);
      };
      BetValue = __decorate([ ccclass ], BetValue);
      return BetValue;
    }(cc.Component);
    exports.default = BetValue;
    cc._RF.pop();
  }, {
    "../../lib/FreeBetBJContent": "FreeBetBJContent"
  } ],
  BlackJack: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "adc1bHe8P1GH53yV6wN8tHz", "BlackJack");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJContent_1 = require("../lib/FreeBetBJContent");
    var Audio_1 = require("../lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var BlackJack = function(_super) {
      __extends(BlackJack, _super);
      function BlackJack() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      BlackJack.prototype.start = function() {};
      BlackJack.prototype.reset = function() {
        this.node.children.forEach(function(node) {
          "0" !== node.name && (node.y = 3);
        });
      };
      BlackJack.prototype.play = function() {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.bj);
        var tween = cc.tween(this.node);
        this.node.children.forEach(function(node) {
          "0" !== node.name && tween.call(function() {
            cc.tween(node).by(.125, {
              y: 20
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.125, {
              y: -20
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
          }).delay(.25);
        });
        tween.repeatForever(tween).start();
      };
      BlackJack = __decorate([ ccclass ], BlackJack);
      return BlackJack;
    }(cc.Component);
    exports.default = BlackJack;
    cc._RF.pop();
  }, {
    "../lib/Audio": "Audio",
    "../lib/FreeBetBJContent": "FreeBetBJContent"
  } ],
  Buttons: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "50175Wca2BLOpJISAKmszDd", "Buttons");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../lib/CocosUtils");
    var FreeBetBJTableInfo_1 = require("../lib/FreeBetBJTableInfo");
    var FreeBetBJContent_1 = require("../lib/FreeBetBJContent");
    var FreeBetBJ_1 = require("../lib/FreeBetBJ");
    var Audio_1 = require("../lib/Audio");
    var FreeBetBJSetting_1 = require("../lib/FreeBetBJSetting");
    var tween = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Buttons = function(_super) {
      __extends(Buttons, _super);
      function Buttons() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.deal = null;
        _this.dealDisable = null;
        _this.maxBet = null;
        _this.maxBetDisable = null;
        _this.dealCN = null;
        _this.dealDisableCN = null;
        _this.maxBetCN = null;
        _this.maxBetDisableCN = null;
        _this.hit = null;
        _this.hitDisable = null;
        _this.stand = null;
        _this.standDisable = null;
        _this.double = null;
        _this.doubleDisable = null;
        _this.split = null;
        _this.splitDisable = null;
        _this.freeDouble = null;
        _this.freeDoubleDisable = null;
        _this.freeSplit = null;
        _this.freeSplitDisable = null;
        _this.hitCN = null;
        _this.hitDisableCN = null;
        _this.standCN = null;
        _this.standDisableCN = null;
        _this.doubleCN = null;
        _this.doubleDisableCN = null;
        _this.splitCN = null;
        _this.splitDisableCN = null;
        _this.freeDoubleCN = null;
        _this.freeDoubleDisableCN = null;
        _this.freeSplitCN = null;
        _this.freeSplitDisableCN = null;
        _this.newRound = null;
        _this.newRoundDisable = null;
        _this.reBet = null;
        _this.reBetDisable = null;
        _this.newRoundCN = null;
        _this.newRoundDisableCN = null;
        _this.reBetCN = null;
        _this.reBetDisableCN = null;
        _this.Recharge = null;
        _this.table = null;
        _this.actionIndex = 0;
        return _this;
      }
      Buttons.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Buttons.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        if ("EN" === lang) {
          this.root["$bet"]["#deal"]["button"].normalSprite = this.deal;
          this.root["$bet"]["#deal"]["button"].disabledSprite = this.dealDisable;
          this.root["$bet"]["$deal"]["#bg"]["sprite"].spriteFrame = this.deal;
          this.root["$bet"]["#maxBet"]["button"].normalSprite = this.maxBet;
          this.root["$bet"]["#maxBet"]["button"].disabledSprite = this.maxBetDisable;
          this.root["$bet"]["$maxBet"]["#bg"]["sprite"].spriteFrame = this.maxBet;
          this.root["$card"]["#double"]["button"].normalSprite = this.double;
          this.root["$card"]["#double"]["button"].disabledSprite = this.doubleDisable;
          this.root["$card"]["$double"]["#bg"]["sprite"].spriteFrame = this.double;
          this.root["$card"]["#stand"]["button"].normalSprite = this.stand;
          this.root["$card"]["#stand"]["button"].disabledSprite = this.standDisable;
          this.root["$card"]["$stand"]["#bg"]["sprite"].spriteFrame = this.stand;
          this.root["$card"]["#hit"]["button"].normalSprite = this.hit;
          this.root["$card"]["#hit"]["button"].disabledSprite = this.hitDisable;
          this.root["$card"]["$hit"]["#bg"]["sprite"].spriteFrame = this.hit;
          this.root["$card"]["#freeDouble"]["button"].normalSprite = this.freeDouble;
          this.root["$card"]["#freeDouble"]["button"].disabledSprite = this.freeDoubleDisable;
          this.root["$card"]["$freeDouble"]["#bg"]["sprite"].spriteFrame = this.freeDouble;
          this.root["$card"]["#split"]["button"].normalSprite = this.split;
          this.root["$card"]["#split"]["button"].disabledSprite = this.splitDisable;
          this.root["$card"]["$split"]["#bg"]["sprite"].spriteFrame = this.split;
          this.root["$card"]["#freeSplit"]["button"].normalSprite = this.freeSplit;
          this.root["$card"]["#freeSplit"]["button"].disabledSprite = this.freeSplitDisable;
          this.root["$card"]["$freeSplit"]["#bg"]["sprite"].spriteFrame = this.freeSplit;
          this.root["$end"]["#newGame"]["button"].normalSprite = this.newRound;
          this.root["$end"]["#newGame"]["button"].disabledSprite = this.newRoundDisable;
          this.root["$end"]["$newGame"]["#bg"]["sprite"].spriteFrame = this.newRound;
          this.root["$end"]["#reBet"]["button"].normalSprite = this.reBet;
          this.root["$end"]["#reBet"]["button"].disabledSprite = this.reBetDisable;
          this.root["$end"]["$reBet"]["#bg"]["sprite"].spriteFrame = this.reBet;
        } else if ("CN" === lang) {
          this.root["$bet"]["#deal"]["button"].normalSprite = this.dealCN;
          this.root["$bet"]["#deal"]["button"].disabledSprite = this.dealDisableCN;
          this.root["$bet"]["$deal"]["#bg"]["sprite"].spriteFrame = this.dealCN;
          this.root["$bet"]["#maxBet"]["button"].normalSprite = this.maxBetCN;
          this.root["$bet"]["#maxBet"]["button"].disabledSprite = this.maxBetDisableCN;
          this.root["$bet"]["$maxBet"]["#bg"]["sprite"].spriteFrame = this.maxBetCN;
          this.root["$card"]["#double"]["button"].normalSprite = this.doubleCN;
          this.root["$card"]["#double"]["button"].disabledSprite = this.doubleDisableCN;
          this.root["$card"]["$double"]["#bg"]["sprite"].spriteFrame = this.doubleCN;
          this.root["$card"]["#stand"]["button"].normalSprite = this.standCN;
          this.root["$card"]["#stand"]["button"].disabledSprite = this.standDisableCN;
          this.root["$card"]["$stand"]["#bg"]["sprite"].spriteFrame = this.standCN;
          this.root["$card"]["#hit"]["button"].normalSprite = this.hitCN;
          this.root["$card"]["#hit"]["button"].disabledSprite = this.hitDisableCN;
          this.root["$card"]["$hit"]["#bg"]["sprite"].spriteFrame = this.hitCN;
          this.root["$card"]["#freeDouble"]["button"].normalSprite = this.freeDoubleCN;
          this.root["$card"]["#freeDouble"]["button"].disabledSprite = this.freeDoubleDisableCN;
          this.root["$card"]["$freeDouble"]["#bg"]["sprite"].spriteFrame = this.freeDoubleCN;
          this.root["$card"]["#split"]["button"].normalSprite = this.splitCN;
          this.root["$card"]["#split"]["button"].disabledSprite = this.splitDisableCN;
          this.root["$card"]["$split"]["#bg"]["sprite"].spriteFrame = this.splitCN;
          this.root["$card"]["#freeSplit"]["button"].normalSprite = this.freeSplitCN;
          this.root["$card"]["#freeSplit"]["button"].disabledSprite = this.freeSplitDisableCN;
          this.root["$card"]["$freeSplit"]["#bg"]["sprite"].spriteFrame = this.freeSplitCN;
          this.root["$end"]["#newGame"]["button"].normalSprite = this.newRoundCN;
          this.root["$end"]["#newGame"]["button"].disabledSprite = this.newRoundDisableCN;
          this.root["$end"]["$newGame"]["#bg"]["sprite"].spriteFrame = this.newRoundCN;
          this.root["$end"]["#reBet"]["button"].normalSprite = this.reBetCN;
          this.root["$end"]["#reBet"]["button"].disabledSprite = this.reBetDisableCN;
          this.root["$end"]["$reBet"]["#bg"]["sprite"].spriteFrame = this.reBetCN;
        }
      };
      Buttons.prototype.onLoad = function() {
        this.init();
        this.table = this.node.parent.getComponent("FreeBetBJTable");
      };
      Buttons.prototype.start = function() {};
      Buttons.prototype.changeButtons = function(action) {
        var _this = this;
        var card = this.root["card"];
        var bet = this.root["bet"];
        if (card.getNumberOfRunningActions() > 0) return;
        if (bet.getNumberOfRunningActions() > 0) return;
        this.showEndButtons(false);
        if (action === FreeBetBJTableInfo_1.GameAction.BET) {
          this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.MAXBET, true);
          if (card.active) cc.tween(card).by(.25, {
            x: card.width
          }).call(function() {
            card.active = false;
            bet.active = true;
            cc.tween(bet).by(.25, {
              x: -bet.width
            }).start();
            _this.table.updateBetButtonStatus();
          }).start(); else {
            bet.active = true;
            cc.tween(bet).by(.5, {
              x: -bet.width
            }).start();
          }
        } else if (action === FreeBetBJTableInfo_1.GameAction.CARD) if (bet.active) cc.tween(bet).by(.25, {
          x: bet.width
        }).call(function() {
          bet.active = false;
          card.active = true;
          cc.tween(card).by(.25, {
            x: -card.width
          }).start();
        }).start(); else {
          card.active = true;
          cc.tween(card).by(.5, {
            x: -card.width
          }).start();
        }
      };
      Buttons.prototype.onHitClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.hit(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onSplitClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.split(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          var seat = _this.table.getCardsScript().focusing.seat;
          var serverIndex = _this.table.getEventScript().getServerSeatsIndexBySeat(seat, res.seats);
          _this.table.effectOfBetValue(seat, res.seats[serverIndex].betUnit);
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onFreeSplitClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.freeSplit(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          var seat = _this.table.getCardsScript().focusing.seat;
          _this.table.effectOfDealerSendFreeChip(seat);
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onDoubleClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.double(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          var seat = _this.table.getCardsScript().focusing.seat;
          var serverIndex = _this.table.getEventScript().getServerSeatsIndexBySeat(seat, res.seats);
          _this.table.effectOfBetValue(seat, res.seats[serverIndex].betUnit);
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onFreeDoubleClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.freeDouble(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          _this.table.effectOfDealerSendFreeChip(_this.table.getCardsScript().focusing.seat);
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onStandClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        this.disableAllCardButtons(false);
        FreeBetBJ_1.freeBetBJ.stand(this.actionIndex++).catch(function(err) {
          _this.actionIndex--;
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          var handler = _this.node.parent.getComponent("FreeBetEventHandler");
          handler.effectServerEvent(res);
        });
      };
      Buttons.prototype.onMexBetClick = function(evt) {
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        var maxBet = FreeBetBJTableInfo_1.tableSetting.maxBet;
        this.table.bet.unitA = maxBet;
        this.table.bet.unitB = maxBet;
        this.table.bet.unitC = maxBet;
        this.table.bet.realTimeUnitA = maxBet;
        this.table.bet.realTimeUnitB = maxBet;
        this.table.bet.realTimeUnitC = maxBet;
        this.table.updateBetValueLabel();
      };
      Buttons.prototype.onDealClick = function(evt) {
        var _this = this;
        if (this.isMoving()) return;
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        target.getComponent(cc.Button).interactable = false;
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.MAXBET, false);
        cc.tween(target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        var bets = [];
        bets.push(this.table.bet.realTimeUnitA * FreeBetBJTableInfo_1.tableSetting.betUnit);
        bets.push(this.table.bet.realTimeUnitB * FreeBetBJTableInfo_1.tableSetting.betUnit);
        bets.push(this.table.bet.realTimeUnitC * FreeBetBJTableInfo_1.tableSetting.betUnit);
        this.table.effectOfChangeAction(FreeBetBJTableInfo_1.GameAction.CARD);
        tween(this.node).delay(.3).call(function() {
          FreeBetBJ_1.freeBetBJ.startNewGame(bets).catch(function(err) {
            CocosUtils_1.default.error(err);
          }).then(function(res) {
            if (!res) return;
            var handler = _this.node.parent.getComponent("FreeBetEventHandler");
            handler.effectServerEvent(res);
          });
        }).start();
      };
      Buttons.prototype.onNewRoundClick = function(evt) {
        if (evt.target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.showEndButtons(false);
        this.table.effectOfReceiveAllCards(false);
      };
      Buttons.prototype.onReBetClick = function(evt) {
        if (evt.target.getNumberOfRunningActions() > 0) return;
        cc.tween(evt.target).by(.05, {
          scaleX: -.1,
          scaleY: -.1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).by(.05, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).start();
        evt.target.getComponent(cc.Button).interactable = false;
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.NEWGAME, false);
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.showEndButtons(false);
        this.table.effectOfReceiveAllCards(true);
      };
      Buttons.prototype.enableButtonClick = function(button, enable) {
        switch (button) {
         case FreeBetBJTableInfo_1.GameButton.DEAL:
         case FreeBetBJTableInfo_1.GameButton.MAXBET:
          this.root["$bet"]["#" + button]["button"].interactable = enable;
          break;

         case FreeBetBJTableInfo_1.GameButton.DOUBLE:
         case FreeBetBJTableInfo_1.GameButton.FREEDOUBLE:
         case FreeBetBJTableInfo_1.GameButton.FREESPLIT:
         case FreeBetBJTableInfo_1.GameButton.HIT:
         case FreeBetBJTableInfo_1.GameButton.SPLIT:
         case FreeBetBJTableInfo_1.GameButton.STAND:
          this.root["$card"]["#" + button]["button"].interactable = enable;
          break;

         case FreeBetBJTableInfo_1.GameButton.NEWGAME:
         case FreeBetBJTableInfo_1.GameButton.REBET:
          this.root["$end"]["#" + button]["button"].interactable = enable;
        }
      };
      Buttons.prototype.showButton = function(button, show) {
        this.effectOfShowButton(button, show);
      };
      Buttons.prototype.showEndButtons = function(show) {
        this.showButton(FreeBetBJTableInfo_1.GameButton.NEWGAME, show);
        this.showButton(FreeBetBJTableInfo_1.GameButton.REBET, show);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.NEWGAME, show);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.REBET, show);
      };
      Buttons.prototype.disableAllCardButtons = function(hide) {
        void 0 === hide && (hide = true);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.DOUBLE, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.DOUBLE, false);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.FREEDOUBLE, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.FREEDOUBLE, false);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.FREESPLIT, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.FREESPLIT, false);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.SPLIT, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.SPLIT, false);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.HIT, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.HIT, false);
        hide && this.showButton(FreeBetBJTableInfo_1.GameButton.STAND, false);
        this.enableButtonClick(FreeBetBJTableInfo_1.GameButton.STAND, false);
      };
      Buttons.prototype.isMoving = function() {
        var card = this.root["card"];
        var bet = this.root["bet"];
        return card.getNumberOfRunningActions() > 0 || bet.getNumberOfRunningActions() > 0;
      };
      Buttons.prototype.getButtonNodeByGameButton = function(button) {
        switch (button) {
         case FreeBetBJTableInfo_1.GameButton.DEAL:
         case FreeBetBJTableInfo_1.GameButton.MAXBET:
          return this.root["$bet"][button];

         case FreeBetBJTableInfo_1.GameButton.DOUBLE:
         case FreeBetBJTableInfo_1.GameButton.FREEDOUBLE:
         case FreeBetBJTableInfo_1.GameButton.FREESPLIT:
         case FreeBetBJTableInfo_1.GameButton.HIT:
         case FreeBetBJTableInfo_1.GameButton.SPLIT:
         case FreeBetBJTableInfo_1.GameButton.STAND:
          return this.root["$card"][button];

         case FreeBetBJTableInfo_1.GameButton.NEWGAME:
         case FreeBetBJTableInfo_1.GameButton.REBET:
          return this.root["$end"][button];
        }
      };
      Buttons.prototype.effectOfShowButton = function(button, show) {
        var buttonNode = this.getButtonNodeByGameButton(button);
        if (true === buttonNode.active && false === show) tween(buttonNode).to(.2, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          buttonNode.active = false;
        }).start(); else if (false === buttonNode.active && true === show) {
          buttonNode.scaleX = buttonNode.scaleY = .1;
          buttonNode.active = true;
          tween(buttonNode).to(.2, {
            scaleX: 1,
            scaleY: 1
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).start();
        }
      };
      Buttons.prototype.popRecharge = function() {
        var recharge = cc.instantiate(this.Recharge);
        recharge.zIndex = FreeBetBJContent_1.zOrder.zIndex_MAX;
        this.table.node.addChild(recharge);
      };
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "deal", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "dealDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "maxBet", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "maxBetDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "dealCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "dealDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "maxBetCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "maxBetDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "hit", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "hitDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "stand", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "standDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "double", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "doubleDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "split", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "splitDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeDouble", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeDoubleDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeSplit", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeSplitDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "hitCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "hitDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "standCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "standDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "doubleCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "doubleDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "splitCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "splitDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeDoubleCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeDoubleDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeSplitCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "freeSplitDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "newRound", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "newRoundDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "reBet", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "reBetDisable", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "newRoundCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "newRoundDisableCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "reBetCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Buttons.prototype, "reBetDisableCN", void 0);
      __decorate([ property(cc.Prefab) ], Buttons.prototype, "Recharge", void 0);
      Buttons = __decorate([ ccclass ], Buttons);
      return Buttons;
    }(cc.Component);
    exports.default = Buttons;
    cc._RF.pop();
  }, {
    "../lib/Audio": "Audio",
    "../lib/CocosUtils": "CocosUtils",
    "../lib/FreeBetBJ": "FreeBetBJ",
    "../lib/FreeBetBJContent": "FreeBetBJContent",
    "../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  Cap: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d7f79xyot5KY7HFMVM84lME", "Cap");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Cap = function(_super) {
      __extends(Cap, _super);
      function Cap() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.active = true;
        _this.onClick = null;
        return _this;
      }
      Cap.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Cap.prototype.setActive = function(active) {
        this.active = active;
        if (active) {
          this.root["activePng"].active = true;
          this.root["nonActivePng"].active = false;
        } else {
          this.root["activePng"].active = false;
          this.root["nonActivePng"].active = true;
        }
      };
      Cap.prototype.onCapClick = function() {
        if ("function" === typeof this.onClick) {
          this.setActive(!this.active);
          this.onClick(this.active);
        }
      };
      Cap = __decorate([ ccclass ], Cap);
      return Cap;
    }(cc.Component);
    exports.default = Cap;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils"
  } ],
  Cards: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6e1e4M08YJNd5TxQHe8Swwh", "Cards");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../lib/CocosUtils");
    var FreeBetBJTableInfo_1 = require("../lib/FreeBetBJTableInfo");
    var FreeBetBJContent_1 = require("../lib/FreeBetBJContent");
    var tween = cc.tween;
    var Audio_1 = require("../lib/Audio");
    var FreeBetBJSetting_1 = require("../lib/FreeBetBJSetting");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Cards = function(_super) {
      __extends(Cards, _super);
      function Cards() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.valueTypes = [];
        _this.valueStatus = [];
        _this.valueStatusCN = [];
        _this.ChipValue = null;
        _this.BlackJack = null;
        _this.table = null;
        _this.focusing = {
          seat: "",
          row: ""
        };
        _this.changeFocusEffectData = [];
        return _this;
      }
      Cards.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Cards.prototype.initSeatRow = function() {
        var _this = this;
        this.node.children.forEach(function(seat) {
          seat.children.forEach(function(row, i, arr) {
            var index = parseInt(row.name.charAt(row.name.length - 1));
            row.zIndex = arr.length - index;
            row.x = FreeBetBJTableInfo_1.cardSetting[seat.name]["initial"][index].x;
            row.y = FreeBetBJTableInfo_1.cardSetting[seat.name]["initial"][index].y;
            _this.showValue(seat.name, row.name, false);
            _this.setValueStatus(seat.name, row.name, FreeBetBJTableInfo_1.ValueType.NONE);
          });
        });
      };
      Cards.prototype.onLoad = function() {
        this.init();
        this.initSeatRow();
        this.table = this.node.parent.getComponent("FreeBetBJTable");
      };
      Cards.prototype.start = function() {};
      Cards.prototype.update = function(dt) {
        if (this.changeFocusEffectData.length > 0) {
          var frame = this.changeFocusEffectData.shift();
          frame.forEach(function(obj) {
            var node = obj.target;
            node.x = obj.x;
            node.y = obj.y;
            null !== obj.callback && obj.callback();
          });
        }
      };
      Cards.prototype.updateRowPosition = function(seat, row) {
        var target = this.root["$" + seat]["$" + row]["card"];
        var count = target.children.length;
        var x = FreeBetBJTableInfo_1.cardSetting[seat].outer.show[count].x;
        var y = FreeBetBJTableInfo_1.cardSetting[seat].outer.show[count].y;
        cc.tween(target).to(.25, {
          x: x,
          y: y
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
      };
      Cards.prototype.addCardToSeatRow = function(card, seat, row, focus) {
        void 0 === focus && (focus = false);
        var target = this.root["$" + seat]["$" + row]["card"];
        var count = target.children.length;
        var cardNode = FreeBetBJContent_1.getCardSpriteNode(card);
        var cardData = this.isFocusing(seat) || focus ? FreeBetBJTableInfo_1.cardSetting.focus.show[count] : FreeBetBJTableInfo_1.cardSetting[seat].inner.show[count];
        cardNode.x = cardData.x;
        cardNode.y = cardData.y;
        cardNode.skewX = cardData.skewX;
        cardNode.skewY = cardData.skewY;
        cardNode.scaleX = cardData.scaleX;
        cardNode.scaleY = cardData.scaleY;
        cardNode.angle = cardData.angle;
        target.addChild(cardNode);
        return cardNode;
      };
      Cards.prototype.showLastCardOfSeatRow = function(seat, row, show) {
        var target = this.root["$" + seat]["$" + row]["card"];
        target.children[target.children.length - 1].active = show;
      };
      Cards.prototype.isFocusing = function(seat, row) {
        void 0 === row && (row = null);
        return null === row ? seat === this.focusing.seat : seat === this.focusing.seat && row === this.focusing.row;
      };
      Cards.prototype.focus = function(seat, row) {
        this.setFocusing(seat, row);
        var targets = this.root[seat].children;
        targets.forEach(function(row) {
          row.getChildByName("card").children.forEach(function(cardNode, i) {
            cc.tween(cardNode).to(.25, FreeBetBJTableInfo_1.cardSetting.focus.show[i], FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
          });
        });
        this.updateValuePosition(seat);
      };
      Cards.prototype.blur = function(seat) {
        this.setFocusing("", "");
        var targets = this.root[seat].children;
        targets.forEach(function(row) {
          row.getChildByName("card").children.forEach(function(cardNode, i) {
            cc.tween(cardNode).to(.25, FreeBetBJTableInfo_1.cardSetting[seat].inner.show[i], FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
          });
        });
        this.updateValuePosition(seat);
      };
      Cards.prototype.setFocusing = function(seat, row) {
        this.focusing.seat = seat;
        this.focusing.row = row;
      };
      Cards.prototype.getFocusSeatAndRow = function() {
        return {
          seat: this.root[this.focusing.seat],
          row: this.root["$" + this.focusing.seat][this.focusing.row]
        };
      };
      Cards.prototype.changeFocusOnSameSeat = function(seat, curRow, newRow, callback) {
        void 0 === callback && (callback = null);
        var curRowNode = this.root["$" + seat][curRow];
        var newRowNode = this.root["$" + seat][newRow];
        this.createChangeFocusEffectData(curRowNode, newRowNode);
        this.changeFocusEffectData[this.changeFocusEffectData.length - 1][0].callback = callback;
        this.focusing.row = newRow;
      };
      Cards.prototype.createChangeFocusEffectData = function(curFocus, newFocus) {
        var path = this.createCirclePath(curFocus.x, curFocus.y, newFocus.x, newFocus.y);
        var mid = Math.ceil(path[0].length / 2);
        var midCallback = function() {
          var z = curFocus.zIndex;
          curFocus.zIndex = newFocus.zIndex;
          newFocus.zIndex = z;
        };
        for (var i = 0; i < path[0].length; i++) {
          var frame = [];
          var left = {
            target: curFocus,
            x: path[0][i]["x"],
            y: path[0][i]["y"],
            callback: null
          };
          var right = {
            target: newFocus,
            x: path[1][i]["x"],
            y: path[1][i]["y"],
            callback: null
          };
          i === mid && (left.callback = midCallback);
          frame.push(left, right);
          this.changeFocusEffectData.push(frame);
        }
        var lastFrame = [];
        var lastLeft = {
          target: curFocus,
          x: newFocus.x,
          y: newFocus.y,
          callback: null
        };
        var lastRight = {
          target: newFocus,
          x: curFocus.x,
          y: curFocus.y,
          callback: null
        };
        lastFrame.push(lastLeft, lastRight);
        this.changeFocusEffectData.push(lastFrame);
      };
      Cards.prototype.createCirclePath = function(dx, dy, ux, uy) {
        var path = [];
        var ox = (dx + ux) / 2;
        var oy = (dy + uy) / 2;
        var r = Math.sqrt((ux - dx) * (ux - dx) + (uy - dy) * (uy - dy)) / 2;
        var leftPath = [];
        for (var i = 260; i >= 100; i -= 10) leftPath.push(this.getCirclePoint(i, r, ox, oy));
        path.push(leftPath);
        var rightPath = [];
        for (var i = 80; i >= -80; i -= 10) rightPath.push(this.getCirclePoint(i, r, ox, oy));
        path.push(rightPath);
        return path;
      };
      Cards.prototype.getCirclePoint = function(degree, radius, ox, oy) {
        var arc = degree / 180 * Math.PI % (2 * Math.PI);
        var x = Math.cos(arc) * radius + ox;
        var y = Math.sin(arc) * radius + oy;
        return {
          x: x,
          y: y
        };
      };
      Cards.prototype.showValue = function(seat, row, show, isBlackJack) {
        var _this = this;
        void 0 === isBlackJack && (isBlackJack = false);
        var target = this.root["$" + seat]["$" + row]["value"];
        var targetSprite = this.root["$" + seat]["$" + row]["$value"]["#odd"]["sprite"];
        var cards = this.root["$" + seat]["$" + row]["card"].children;
        var count = 0;
        cards.forEach(function(card) {
          card.active && count++;
        });
        if (count < 2 && show) return;
        var isFocus = this.focusing.seat === seat;
        var x = isFocus ? FreeBetBJTableInfo_1.cardSetting.focus.value[count].x : FreeBetBJTableInfo_1.cardSetting[seat].inner.value[count].x;
        var y = isFocus ? FreeBetBJTableInfo_1.cardSetting.focus.value[count].y : FreeBetBJTableInfo_1.cardSetting[seat].inner.value[count].y;
        targetSprite.spriteFrame = isBlackJack ? this.valueTypes[3] : this.valueTypes[0];
        if (show) {
          if (false === target.active) {
            target.x = x;
            target.y = y;
            target.scaleX = target.scaleY = .1;
            target.active = true;
            isBlackJack && this.setValueStatus(seat, row, FreeBetBJTableInfo_1.ValueType.BLACKJACK, false);
            var tween_1 = cc.tween(target).to(.25, {
              scaleX: 1,
              scaleY: 1
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut));
            isBlackJack && tween_1.call(function() {
              _this.setValueStatus(seat, row, FreeBetBJTableInfo_1.ValueType.BLACKJACK);
            });
            tween_1.start();
          }
        } else {
          target.x = target.y = 0;
          target.scaleX = target.scaleY = .1;
          target.active = false;
        }
      };
      Cards.prototype.setValue = function(seat, row, value) {
        var odd = this.root["$" + seat]["$" + row]["$value"]["odd"];
        var even = this.root["$" + seat]["$" + row]["$value"]["even"];
        if (0 !== value.soft && value.soft < 22) {
          odd.active = false;
          even.active = true;
          this.root["$" + seat]["$" + row]["$value"]["$even"]["#soft"]["label"].string = value.soft + "";
          this.root["$" + seat]["$" + row]["$value"]["$even"]["#hard"]["label"].string = value.hard + "";
          this.root["$" + seat]["$" + row]["$value"]["$odd"]["#hard"]["label"].string = value.soft + "";
          if (21 === value.soft) {
            odd.active = true;
            even.active = false;
          } else {
            odd.active = false;
            even.active = true;
          }
        } else {
          odd.active = true;
          even.active = false;
          this.root["$" + seat]["$" + row]["$value"]["$odd"]["#hard"]["label"].string = value.hard + "";
        }
      };
      Cards.prototype.setValueStatus = function(seat, row, status, showEffect) {
        void 0 === showEffect && (showEffect = true);
        var oddSprite = this.root["$" + seat]["$" + row]["$value"]["#odd"]["sprite"];
        var odd = this.root["$" + seat]["$" + row]["$value"]["odd"];
        var even = this.root["$" + seat]["$" + row]["$value"]["even"];
        odd.active = true;
        even.active = false;
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.WIN:
          oddSprite.spriteFrame = this.valueTypes[1];
          break;

         case FreeBetBJTableInfo_1.ValueType.LOSE:
          oddSprite.spriteFrame = this.valueTypes[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.PUSH:
          oddSprite.spriteFrame = this.valueTypes[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.BUSTED:
          oddSprite.spriteFrame = this.valueTypes[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          oddSprite.spriteFrame = this.valueTypes[3];
          break;

         case FreeBetBJTableInfo_1.ValueType.FREEBETPUSH:
          oddSprite.spriteFrame = this.valueTypes[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.NONE:
          oddSprite.spriteFrame = null;
        }
        showEffect && this.effectOfValueStatus(seat, row, status);
      };
      Cards.prototype.effectOfValueStatus = function(seat, row, status) {
        var target = this.root["$" + seat]["$" + row]["$value"]["#status"]["sprite"];
        target.node.destroyAllChildren();
        var statusFrames = null;
        "EN" === FreeBetBJSetting_1.freeBetBJSetting.language ? statusFrames = this.valueStatus : "CN" === FreeBetBJSetting_1.freeBetBJSetting.language && (statusFrames = this.valueStatusCN);
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.WIN:
          target.spriteFrame = statusFrames[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.LOSE:
          target.spriteFrame = statusFrames[1];
          break;

         case FreeBetBJTableInfo_1.ValueType.PUSH:
          target.spriteFrame = statusFrames[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.BUSTED:
          target.spriteFrame = statusFrames[3];
          break;

         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          target.spriteFrame = null;
          break;

         case FreeBetBJTableInfo_1.ValueType.FREEBETPUSH:
          target.spriteFrame = statusFrames[5];
          break;

         case FreeBetBJTableInfo_1.ValueType.NONE:
          target.spriteFrame = null;
          return;
        }
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          var blackJack_1 = cc.instantiate(this.BlackJack);
          target.node.addChild(blackJack_1);
          cc.tween(blackJack_1).call(function() {
            blackJack_1.scaleX = 0;
          }).to(.25, {
            scaleX: 1
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).call(function() {
            var blackJackJs = blackJack_1.getComponent("BlackJack");
            blackJackJs.play();
          }).start();
          break;

         default:
          cc.tween(target.node).call(function() {
            target.node.width = 0;
          }).to(.25, {
            width: target.spriteFrame.getRect().width
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).delay(2).to(.25, {
            width: 0
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
        }
      };
      Cards.prototype.effectOfChipValue = function(seat, chipValues) {
        var _this = this;
        var target = this.root[seat];
        var startP = FreeBetBJContent_1.getXYUntilNode(target, this.node.parent);
        chipValues.forEach(function(chip, i) {
          var ChipValue = cc.instantiate(_this.ChipValue);
          ChipValue.getComponent(cc.Label).string = FreeBetBJContent_1.getFormatNumberString(chip, true);
          ChipValue.x = startP.x;
          ChipValue.y = startP.y - 120;
          ChipValue.scaleX = ChipValue.scaleY = .5;
          _this.table.effectOfDealerSendChip(seat, .1 * i, function() {
            _this.node.parent.addChild(ChipValue);
            cc.tween(ChipValue).parallel(cc.tween(ChipValue).to(.25, {
              scaleX: 1,
              scaleY: 1
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)), cc.tween(ChipValue).by(.25, {
              y: 20 + 40 * i
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut))).delay(2 - .1 * i).parallel(cc.tween(ChipValue).by(.5, {
              y: 80
            }), cc.tween(ChipValue).to(.5, {
              opacity: 50
            })).call(function() {
              ChipValue.destroy();
            }).start();
          });
        });
      };
      Cards.prototype.effectOfSplitCard = function(seat, oRow, nRow) {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.split);
        var oCards = this.root["$" + seat]["$" + oRow]["card"];
        var oCard = oCards.children[oCards.children.length - 1];
        var nCard = this.addCardToSeatRow(parseInt(oCard.name), seat, nRow, true);
        var moveCard = FreeBetBJContent_1.getCardSpriteNode(parseInt(nCard.name));
        var startP = FreeBetBJContent_1.getXYUntilNode(oCard, this.node.parent);
        var endP = FreeBetBJContent_1.getXYUntilNode(nCard, this.node.parent);
        nCard.active = false;
        this.node.parent.addChild(moveCard);
        moveCard.x = startP.x;
        moveCard.y = startP.y;
        moveCard.scaleX = oCard.scaleX;
        moveCard.scaleY = oCard.scaleY;
        oCard.destroy();
        this.showValue(seat, oRow, false);
        cc.tween(moveCard).to(.125, {
          x: endP.x,
          y: endP.y + 50
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          moveCard.active = false;
          nCard.active = true;
          var oy = nCard.y;
          nCard.y += 50;
          tween(nCard).to(.125, {
            y: oy
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineIn)).call(function() {
            moveCard.destroy();
          }).start();
        }).start();
      };
      Cards.prototype.updateValuePosition = function(seat, focus, isEffect) {
        var _this = this;
        void 0 === focus && (focus = false);
        void 0 === isEffect && (isEffect = true);
        var targets = this.root[seat].children;
        targets.forEach(function(row) {
          var value = row.getChildByName("value");
          var count = row.getChildByName("card").children.length;
          if (count < 2) return;
          var isFocus = _this.focusing.seat === seat || focus;
          var x = isFocus ? FreeBetBJTableInfo_1.cardSetting.focus.value[count].x : FreeBetBJTableInfo_1.cardSetting[seat].inner.value[count].x;
          var y = isFocus ? FreeBetBJTableInfo_1.cardSetting.focus.value[count].y : FreeBetBJTableInfo_1.cardSetting[seat].inner.value[count].y;
          if (isEffect) cc.tween(value).to(.25, {
            x: x,
            y: y
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start(); else {
            value.x = x;
            value.y = y;
          }
        });
      };
      Cards.prototype.getCardCount = function(seat, row) {
        return this.root["$" + seat]["$" + row]["card"].children.length;
      };
      Cards.prototype.getSeatRowCount = function(seat) {
        var count = 0;
        var target = this.root[seat];
        target.children.forEach(function(row) {
          row.getChildByName("card").children.length > 0 && count++;
        });
        return count;
      };
      Cards.prototype.getRowCount = function(seat) {
        var count = 0;
        var target = this.root[seat];
        target.children.forEach(function(row) {
          row.getChildByName("card").children.length > 0 && count++;
        });
        return count;
      };
      __decorate([ property(cc.SpriteFrame) ], Cards.prototype, "valueTypes", void 0);
      __decorate([ property(cc.SpriteFrame) ], Cards.prototype, "valueStatus", void 0);
      __decorate([ property(cc.SpriteFrame) ], Cards.prototype, "valueStatusCN", void 0);
      __decorate([ property(cc.Prefab) ], Cards.prototype, "ChipValue", void 0);
      __decorate([ property(cc.Prefab) ], Cards.prototype, "BlackJack", void 0);
      Cards = __decorate([ ccclass ], Cards);
      return Cards;
    }(cc.Component);
    exports.default = Cards;
    cc._RF.pop();
  }, {
    "../lib/Audio": "Audio",
    "../lib/CocosUtils": "CocosUtils",
    "../lib/FreeBetBJContent": "FreeBetBJContent",
    "../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  Chips: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "25d34Jz0oRBUa+9HAstuMcY", "Chips");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Chips = function(_super) {
      __extends(Chips, _super);
      function Chips() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Chip = null;
        _this.table = null;
        _this.chipMultiple = [ 1, 2, 5, 10 ];
        _this.focusColor = new cc.Color(54, 198, 255);
        _this.blurColor = cc.Color.WHITE;
        _this.focusChip = null;
        return _this;
      }
      Chips.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Chips.prototype.start = function() {
        this.table.effectOfSlideUpShow(this.node);
      };
      Chips.prototype.setChips = function(betUnit) {
        var _this = this;
        this.chipMultiple.forEach(function(ele, i) {
          var bet = Math.round(ele * betUnit);
          var chip = FreeBetBJContent_1.getChipPrefabNode(ele);
          var chipJs = chip.getComponent("Chip");
          chipJs.setValue(bet);
          chipJs.setUnit(ele);
          chip.on(cc.Node.EventType.TOUCH_START, _this.onChipClick, _this);
          _this.node.addChild(chip);
          0 === i && _this.focus(chip);
        });
      };
      Chips.prototype.onChipClick = function(evt) {
        var _this = this;
        var chips = this.node.children;
        chips.forEach(function(chip) {
          evt.target === chip ? _this.focus(chip) : _this.blur(chip);
        });
      };
      Chips.prototype.focus = function(chip) {
        this.focusChip = chip;
        chip.getChildByName("bg").color = this.focusColor;
      };
      Chips.prototype.blur = function(chip) {
        chip.getChildByName("bg").color = this.blurColor;
      };
      Chips.prototype.getFocusChipUnit = function() {
        if (null === this.focusChip) {
          CocosUtils_1.default.warn("no focus chip.");
          return;
        }
        var chipJs = this.focusChip.getComponent("Chip");
        return chipJs.unit;
      };
      Chips.prototype.getChipNodes = function(unit) {
        var multiples = this.chipMultiple.slice().sort(function(a, b) {
          return b - a;
        });
        var nodes = [];
        while (unit > 0) for (var i = 0; i < multiples.length; i++) while (unit >= multiples[i]) {
          nodes.push(FreeBetBJContent_1.getChipPrefabNode(multiples[i]));
          unit -= multiples[i];
        }
        return nodes;
      };
      __decorate([ property(cc.Prefab) ], Chips.prototype, "Chip", void 0);
      Chips = __decorate([ ccclass ], Chips);
      return Chips;
    }(cc.Component);
    exports.default = Chips;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJContent": "FreeBetBJContent"
  } ],
  Chip: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "841f2PXkCxCfZyWLZ62Zu5A", "Chip");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Chip = function(_super) {
      __extends(Chip, _super);
      function Chip() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.value = 0;
        _this.unit = 0;
        return _this;
      }
      Chip.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Chip.prototype.start = function() {};
      Chip.prototype.setValue = function(value) {
        this.value = value;
        this.root["$bg"]["#label"]["label"].string = FreeBetBJContent_1.getFormatNumberString(value, false);
      };
      Chip.prototype.setUnit = function(unit) {
        this.unit = unit;
      };
      Chip.prototype.setChipSprite = function(sprite) {
        this.root["#bg"]["sprite"].spriteFrame = sprite;
      };
      Chip = __decorate([ ccclass ], Chip);
      return Chip;
    }(cc.Component);
    exports.default = Chip;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJContent": "FreeBetBJContent"
  } ],
  CocosUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "764b4e4KSJC9a1OoJWF5ldz", "CocosUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CocosUtils = function() {
      function CocosUtils() {}
      CocosUtils.tree = function(root, obj) {
        var _this = this;
        root.children.forEach(function(node) {
          obj[node.name] = node;
          var label = node.getComponent(cc.Label);
          if (label) {
            obj["#" + node.name] = {};
            obj["#" + node.name]["label"] = label;
          }
          var sprite = node.getComponent(cc.Sprite);
          if (sprite) {
            obj["#" + node.name] || (obj["#" + node.name] = {});
            obj["#" + node.name]["sprite"] = sprite;
          }
          var layout = node.getComponent(cc.Layout);
          if (layout) {
            obj["#" + node.name] || (obj["#" + node.name] = {});
            obj["#" + node.name]["layout"] = layout;
          }
          var button = node.getComponent(cc.Button);
          if (button) {
            obj["#" + node.name] || (obj["#" + node.name] = {});
            obj["#" + node.name]["button"] = button;
          }
          var progressBar = node.getComponent(cc.ProgressBar);
          if (progressBar) {
            obj["#" + node.name] || (obj["#" + node.name] = {});
            obj["#" + node.name]["progressBar"] = progressBar;
          }
          var editBox = node.getComponent(cc.EditBox);
          if (editBox) {
            obj["#" + node.name] || (obj["#" + node.name] = {});
            obj["#" + node.name]["editBox"] = editBox;
          }
          if (node.childrenCount > 0) {
            obj["$" + node.name] = {};
            _this.tree(node, obj["$" + node.name]);
          }
        });
        return obj;
      };
      CocosUtils.tree2 = function(root, obj) {
        var _this = this;
        obj[root.name] = root;
        var label = root.getComponent(cc.Label);
        if (label) {
          obj["#" + root.name] = {};
          obj["#" + root.name]["label"] = label;
        }
        var sprite = root.getComponent(cc.Sprite);
        if (sprite) {
          obj["#" + root.name] || (obj["#" + root.name] = {});
          obj["#" + root.name]["sprite"] = sprite;
        }
        var layout = root.getComponent(cc.Layout);
        if (layout) {
          obj["#" + root.name] || (obj["#" + root.name] = {});
          obj["#" + root.name]["layout"] = layout;
        }
        if (root.childrenCount > 0) {
          obj["$" + root.name] = {};
          root.children.forEach(function(node) {
            _this.tree2(node, obj["$" + root.name]);
          });
        }
        return obj;
      };
      CocosUtils.log = function(obj) {
        this.debugMode && console.log(obj);
      };
      CocosUtils.warn = function(obj) {
        this.debugMode && console.warn(obj);
      };
      CocosUtils.error = function(obj) {
        this.debugMode && console.error(obj);
      };
      CocosUtils.debugMode = true;
      return CocosUtils;
    }();
    exports.default = CocosUtils;
    cc._RF.pop();
  }, {} ],
  Dealer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bb6eaRFFVhF+qIZNJNTXqi4", "Dealer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJContent_1 = require("../lib/FreeBetBJContent");
    var FreeBetBJTableInfo_1 = require("../lib/FreeBetBJTableInfo");
    var CocosUtils_1 = require("../lib/CocosUtils");
    var FreeBetBJSetting_1 = require("../lib/FreeBetBJSetting");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dealer = function(_super) {
      __extends(Dealer, _super);
      function Dealer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.valueTypes = [];
        _this.valueStatus = [];
        _this.valueStatusCN = [];
        _this.focusing = false;
        return _this;
      }
      Dealer.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Dealer.prototype.initSeatRow = function() {
        this.node.children.forEach(function(row, i, arr) {
          row.zIndex = arr.length - i;
          row.x = FreeBetBJTableInfo_1.cardSetting["Dealer"]["initial"][i].x;
          row.y = FreeBetBJTableInfo_1.cardSetting["Dealer"]["initial"][i].y;
        });
        this.showValue(false);
        this.setValueStatus(FreeBetBJTableInfo_1.ValueType.NONE);
      };
      Dealer.prototype.onLoad = function() {
        this.init();
        this.initSeatRow();
      };
      Dealer.prototype.start = function() {};
      Dealer.prototype.focus = function() {
        this.focusing = true;
        var target = this.root["$row0"]["card"];
        target.children.forEach(function(cardNode, i) {
          cc.tween(cardNode).to(.25, FreeBetBJTableInfo_1.cardSetting.dealerFocus.show[i], FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
        });
        this.updateValuePosition();
      };
      Dealer.prototype.blur = function() {
        this.focusing = false;
        var target = this.root["$row0"]["card"];
        target.children.forEach(function(cardNode, i) {
          cc.tween(cardNode).to(.25, FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.show[i], FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
        });
        this.updateValuePosition();
      };
      Dealer.prototype.addCardToSeatRow = function(card) {
        var target = this.root["$row0"]["card"];
        var count = target.children.length;
        var cardNode = FreeBetBJContent_1.getCardSpriteNode(card);
        var cardData = this.focusing ? FreeBetBJTableInfo_1.cardSetting.dealerFocus.show[count] : FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.show[count];
        cardNode.x = cardData.x;
        cardNode.y = cardData.y;
        cardNode.skewX = cardData.skewX;
        cardNode.skewY = cardData.skewY;
        cardNode.scaleX = cardData.scaleX;
        cardNode.scaleY = cardData.scaleY;
        cardNode.angle = cardData.angle;
        target.addChild(cardNode);
        return cardNode;
      };
      Dealer.prototype.updateRowPosition = function() {
        var target = this.root["$row0"]["card"];
        var count = target.children.length;
        var x = FreeBetBJTableInfo_1.cardSetting["Dealer"].outer.show[count].x;
        var y = FreeBetBJTableInfo_1.cardSetting["Dealer"].outer.show[count].y;
        cc.tween(target).to(.25, {
          x: x,
          y: y
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
      };
      Dealer.prototype.setValueStatus = function(status, showEffect) {
        void 0 === showEffect && (showEffect = true);
        var oddSprite = this.root["$row0"]["$value"]["#odd"]["sprite"];
        var odd = this.root["$row0"]["$value"]["odd"];
        var even = this.root["$row0"]["$value"]["even"];
        odd.active = true;
        even.active = false;
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.WIN:
          oddSprite.spriteFrame = this.valueTypes[1];
          break;

         case FreeBetBJTableInfo_1.ValueType.LOSE:
          oddSprite.spriteFrame = this.valueTypes[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.PUSH:
          oddSprite.spriteFrame = this.valueTypes[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.BUSTED:
          oddSprite.spriteFrame = this.valueTypes[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          oddSprite.spriteFrame = this.valueTypes[3];
          break;

         case FreeBetBJTableInfo_1.ValueType.FREEBETPUSH:
          oddSprite.spriteFrame = this.valueTypes[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.NONE:
          oddSprite.spriteFrame = null;
        }
        showEffect && this.effectOfValueStatus(status);
      };
      Dealer.prototype.effectOfValueStatus = function(status) {
        var target = this.root["$row0"]["$value"]["#status"]["sprite"];
        var statusFrames = null;
        "EN" === FreeBetBJSetting_1.freeBetBJSetting.language ? statusFrames = this.valueStatus : "CN" === FreeBetBJSetting_1.freeBetBJSetting.language && (statusFrames = this.valueStatusCN);
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.WIN:
          target.spriteFrame = statusFrames[0];
          break;

         case FreeBetBJTableInfo_1.ValueType.LOSE:
          target.spriteFrame = statusFrames[1];
          break;

         case FreeBetBJTableInfo_1.ValueType.PUSH:
          target.spriteFrame = statusFrames[2];
          break;

         case FreeBetBJTableInfo_1.ValueType.BUSTED:
          target.spriteFrame = statusFrames[3];
          break;

         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          target.spriteFrame = statusFrames[4];
          break;

         case FreeBetBJTableInfo_1.ValueType.FREEBETPUSH:
          target.spriteFrame = statusFrames[5];
          break;

         case FreeBetBJTableInfo_1.ValueType.NONE:
          target.spriteFrame = null;
          return;
        }
        switch (status) {
         case FreeBetBJTableInfo_1.ValueType.BLACKJACK:
          cc.tween(target.node).call(function() {
            target.node.width = 0;
          }).to(.25, {
            width: target.spriteFrame.getRect().width
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).call(function() {}).start();
          break;

         default:
          cc.tween(target.node).call(function() {
            target.node.width = 0;
          }).to(.25, {
            width: target.spriteFrame.getRect().width
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).delay(2).to(.25, {
            width: 0
          }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
        }
      };
      Dealer.prototype.showValue = function(show, isBlackJack) {
        var _this = this;
        void 0 === isBlackJack && (isBlackJack = false);
        var target = this.root["$row0"]["value"];
        var targetSprite = this.root["$row0"]["$value"]["#odd"]["sprite"];
        var cards = this.root["$row0"]["card"].children;
        var count = 0;
        cards.forEach(function(card) {
          card.active && "52" !== card.name && count++;
        });
        if (count < 2 && show) return;
        var x = this.focusing ? FreeBetBJTableInfo_1.cardSetting.dealerFocus.value[count].x : FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.value[count].x;
        var y = this.focusing ? FreeBetBJTableInfo_1.cardSetting.dealerFocus.value[count].y : FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.value[count].y;
        targetSprite.spriteFrame = isBlackJack ? this.valueTypes[3] : this.valueTypes[0];
        if (show) {
          if (false === target.active) {
            target.x = x;
            target.y = y;
            target.scaleX = target.scaleY = .1;
            target.active = true;
            var tween = cc.tween(target);
            isBlackJack && tween.call(function() {
              _this.setValueStatus(FreeBetBJTableInfo_1.ValueType.BLACKJACK);
            });
            tween.to(.25, {
              scaleX: 1,
              scaleY: 1
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut));
            tween.start();
          }
        } else {
          target.active = false;
          target.x = target.y = 0;
          target.scaleX = target.scaleY = .1;
        }
      };
      Dealer.prototype.setValue = function(value) {
        var odd = this.root["$row0"]["$value"]["odd"];
        var even = this.root["$row0"]["$value"]["even"];
        if (0 !== value.soft && value.soft < 22) {
          this.root["$row0"]["$value"]["$even"]["#soft"]["label"].string = value.soft + "";
          this.root["$row0"]["$value"]["$even"]["#hard"]["label"].string = value.hard + "";
          this.root["$row0"]["$value"]["$odd"]["#hard"]["label"].string = value.soft + "";
          if (21 === value.soft) {
            odd.active = true;
            even.active = false;
          } else {
            odd.active = false;
            even.active = true;
          }
        } else {
          odd.active = true;
          even.active = false;
          this.root["$row0"]["$value"]["$odd"]["#hard"]["label"].string = value.hard + "";
        }
      };
      Dealer.prototype.updateValuePosition = function() {
        var row = this.root["row0"];
        var value = row.getChildByName("value");
        var count = row.getChildByName("card").children.length;
        if (count < 2) return;
        var x = this.focusing ? FreeBetBJTableInfo_1.cardSetting.dealerFocus.value[count].x : FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.value[count].x;
        var y = this.focusing ? FreeBetBJTableInfo_1.cardSetting.dealerFocus.value[count].y : FreeBetBJTableInfo_1.cardSetting["Dealer"].inner.value[count].y;
        cc.tween(value).to(.25, {
          x: x,
          y: y
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
      };
      Dealer.prototype.effectOfTurnLastCard = function(newCard, isBlackJack) {
        var _this = this;
        void 0 === isBlackJack && (isBlackJack = false);
        var cards = this.root["$row0"]["card"].children;
        var lastCard = cards[cards.length - 1];
        var sx = lastCard.scaleX;
        var spriteFrame = FreeBetBJContent_1.getCardSprite(newCard);
        cc.tween(lastCard).to(.075, {
          scaleX: 0,
          skewY: 15
        }).call(function() {
          lastCard.getComponent(cc.Sprite).spriteFrame = spriteFrame;
          lastCard.skewY = -15;
          lastCard.name = newCard + "";
        }).to(.075, {
          scaleX: sx,
          skewY: 0
        }).call(function() {
          _this.showValue(true, isBlackJack);
        }).start();
      };
      Dealer.prototype.getCardCount = function() {
        var count = 0;
        var cards = this.root["$row0"]["card"].children;
        cards.forEach(function(card) {
          "52" !== card.name && count++;
        });
        return count;
      };
      Dealer.prototype.testEffectOfMoveCard = function(seat, row, card) {
        var tableJs = this.node.parent.getComponent("FreeBetBJTable");
        tableJs.effectOfMoveCard(seat, row, card);
      };
      Dealer.prototype.testAddCardToSeatRow = function() {
        this.testEffectOfMoveCard("Dealer", "row0", Math.floor(52 * Math.random()));
      };
      Dealer.prototype.testTurnCardToSeatRow = function() {
        this.effectOfTurnLastCard(10);
      };
      Dealer.prototype.testDealerFocus = function() {
        this.focus();
      };
      Dealer.prototype.testDealerBlur = function() {
        this.blur();
      };
      __decorate([ property(cc.SpriteFrame) ], Dealer.prototype, "valueTypes", void 0);
      __decorate([ property(cc.SpriteFrame) ], Dealer.prototype, "valueStatus", void 0);
      __decorate([ property(cc.SpriteFrame) ], Dealer.prototype, "valueStatusCN", void 0);
      Dealer = __decorate([ ccclass ], Dealer);
      return Dealer;
    }(cc.Component);
    exports.default = Dealer;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/FreeBetBJContent": "FreeBetBJContent",
    "../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  Delete: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "76ed12XmjxAiYspJmNgNh1i", "Delete");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Delete = function(_super) {
      __extends(Delete, _super);
      function Delete() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.active = true;
        _this.onClick = null;
        return _this;
      }
      Delete.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Delete.prototype.onDeleteClick = function() {
        "function" === typeof this.onClick && this.onClick();
      };
      Delete = __decorate([ ccclass ], Delete);
      return Delete;
    }(cc.Component);
    exports.default = Delete;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils"
  } ],
  FreeBetBJContent: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3df6c/rYHxK94fPCFha8/Cs", "FreeBetBJContent");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("./CocosUtils");
    var SizeMode = cc.Sprite.SizeMode;
    var FreeBetBJTableInfo_1 = require("./FreeBetBJTableInfo");
    exports.globalConstant = {
      tableId: "test_table",
      buyUrl: "https://clover.kimicat.com/LuckPayTest/uwallet.html",
      gameRuleUrl: "https://lucknetwork.zendesk.com/hc/en-us/articles/360047583793-Freebet-21-Game-Intro",
      gameRuleUrlCN: "https://lucknetwork.zendesk.com/hc/en-us/articles/360047583673-%E5%85%8D%E8%B4%B9%E5%8A%A0%E5%80%8D21%E7%82%B9-"
    };
    exports.prefabs = {
      Alert: null,
      Popup: null,
      FreeBetBJTAble: null,
      Chip: null
    };
    exports.music = {
      bg: null,
      bj: null,
      card: null,
      chip: null,
      press: null,
      split: null
    };
    exports.atlas = {
      cards: null,
      chips: null
    };
    var zOrder;
    (function(zOrder) {
      zOrder[zOrder["zIndex_MIN"] = 0] = "zIndex_MIN";
      zOrder[zOrder["zIndex_1"] = 1] = "zIndex_1";
      zOrder[zOrder["zIndex_2"] = 2] = "zIndex_2";
      zOrder[zOrder["zIndex_3"] = 3] = "zIndex_3";
      zOrder[zOrder["zIndex_4"] = 4] = "zIndex_4";
      zOrder[zOrder["zIndex_5"] = 5] = "zIndex_5";
      zOrder[zOrder["zIndex_6"] = 6] = "zIndex_6";
      zOrder[zOrder["zIndex_7"] = 7] = "zIndex_7";
      zOrder[zOrder["zIndex_8"] = 8] = "zIndex_8";
      zOrder[zOrder["zIndex_MAX"] = 9] = "zIndex_MAX";
    })(zOrder = exports.zOrder || (exports.zOrder = {}));
    exports.getCurrentSceneNode = function() {
      return cc.director.getScene().getChildByName("Canvas");
    };
    exports.fixVisible = function(node) {
      var canvas = node.getComponent(cc.Canvas);
      var ratio = cc.view.getViewportRect().height / cc.view.getViewportRect().width;
      if (ratio > 1.4) {
        canvas.fitHeight = false;
        canvas.fitWidth = true;
      } else if (ratio < 1) {
        canvas.fitHeight = true;
        canvas.fitWidth = true;
      } else {
        canvas.fitHeight = true;
        canvas.fitWidth = false;
      }
      CocosUtils_1.default.log("width: " + cc.view.getViewportRect().width + ",height: " + cc.view.getViewportRect().height);
      CocosUtils_1.default.log("ratio:" + ratio);
    };
    exports.getAlert = function(initCallback) {
      void 0 === initCallback && (initCallback = null);
      var alert = cc.find("Alert");
      var alertJs = null;
      if (alert) alertJs = alert.getComponent("Alert"); else {
        alert = cc.instantiate(exports.prefabs.Alert);
        alert.zIndex = zOrder.zIndex_MAX;
        alertJs = alert.getComponent("Alert");
        cc.game.addPersistRootNode(alert);
        alertJs.init();
        null !== initCallback && initCallback();
        CocosUtils_1.default.log("Alert initial finished.");
      }
      return alertJs;
    };
    exports.getPopup = function(initCallback) {
      void 0 === initCallback && (initCallback = null);
      var Popup = cc.find("Popup");
      var PopupJs = null;
      if (Popup) PopupJs = Popup.getComponent("Popup"); else {
        Popup = cc.instantiate(exports.prefabs.Popup);
        Popup.zIndex = zOrder.zIndex_MAX;
        PopupJs = Popup.getComponent("Popup");
        cc.game.addPersistRootNode(Popup);
        PopupJs.init();
        PopupJs.initKeyBoard();
        null !== initCallback && initCallback();
        CocosUtils_1.default.log("Popup initial finished.");
      }
      return PopupJs;
    };
    exports.getXYUntilNode = function(o, target, obj) {
      void 0 === obj && (obj = {
        x: 0,
        y: 0
      });
      if (o === target) return obj;
      obj.x += o.x;
      obj.y += o.y;
      return exports.getXYUntilNode(o.parent, target, obj);
    };
    exports.getFormatNumberString = function(num, isChip) {
      void 0 === isChip && (isChip = false);
      if (num <= 0) return "";
      var s2 = num / 100 + "";
      return isChip ? "+" + s2 : s2;
    };
    exports.getCardsString = function(cards) {
      var str = "";
      cards.forEach(function(item) {
        str += exports.getCardString(item);
        str += " ";
      });
      return str;
    };
    exports.getCardString = function(card) {
      var str = "";
      if (52 === card) str += "\u3020"; else {
        var v = Math.floor(card % 13) + 1;
        if (v <= 10 && v >= 2) str += v; else switch (v) {
         case 1:
          str += "A";
          break;

         case 11:
          str += "J";
          break;

         case 12:
          str += "Q";
          break;

         case 13:
          str += "K";
        }
        var f = Math.floor(card / 13);
        switch (f) {
         case 0:
          str += "\u2660";
          break;

         case 1:
          str += "\u2665";
          break;

         case 2:
          str += "\u2666";
          break;

         case 3:
          str += "\u2663";
        }
      }
      return str;
    };
    exports.getCardSpriteNode = function(card, width, height) {
      void 0 === width && (width = 96.5);
      void 0 === height && (height = 140);
      var node = new cc.Node();
      var sprite = node.addComponent(cc.Sprite);
      node.name = card + "";
      sprite.sizeMode = SizeMode.CUSTOM;
      var sf = null;
      var sfs = exports.atlas.cards.getSpriteFrames();
      sfs.forEach(function(item) {
        sf = parseInt(item.name) === card ? item : sf;
      });
      sprite.spriteFrame = sf;
      node.width = width;
      node.height = height;
      return node;
    };
    exports.getCardSpriteNodes = function(cards, width, height) {
      void 0 === width && (width = 96.5);
      void 0 === height && (height = 140);
      var cardNodes = [];
      cards.forEach(function(item) {
        cardNodes.push(exports.getCardSpriteNode(item, width, height));
      });
      return cardNodes;
    };
    exports.getCardSprite = function(card) {
      var sf = null;
      var sfs = exports.atlas.cards.getSpriteFrames();
      sfs.forEach(function(item) {
        sf = parseInt(item.name) === card ? item : sf;
      });
      return sf;
    };
    exports.getChipSprite = function(multiple) {
      var sf = null;
      var sfs = exports.atlas.chips.getSpriteFrames();
      sfs.forEach(function(item) {
        sf = parseInt(item.name) === multiple ? item : sf;
      });
      return sf;
    };
    exports.getChipPrefabNode = function(multiple) {
      var chip = cc.instantiate(exports.prefabs.Chip);
      var chipJs = chip.getComponent("Chip");
      chipJs.init();
      chipJs.setChipSprite(exports.getChipSprite(multiple));
      chipJs.setValue(Math.round(multiple * FreeBetBJTableInfo_1.tableSetting.betUnit));
      return chip;
    };
    exports.getEaseObject = function(easing) {
      return {
        easing: easing
      };
    };
    var Easing;
    (function(Easing) {
      Easing["linear"] = "linear";
      Easing["fade"] = "fade";
      Easing["quadIn"] = "quadIn";
      Easing["quadOut"] = "quadOut";
      Easing["quadInOut"] = "quadInOut";
      Easing["quadOutIn"] = "quadOutIn";
      Easing["cubicIn"] = "cubicIn";
      Easing["cubicOut"] = "cubicOut";
      Easing["cubicInOut"] = "cubicInOut";
      Easing["cubicOutIn"] = "cubicOutIn";
      Easing["quartIn"] = "quartIn";
      Easing["quartOut"] = "quartOut";
      Easing["quartInOut"] = "quartInOut";
      Easing["quartOutIn"] = "quartOutIn";
      Easing["quintIn"] = "quintIn";
      Easing["quintOut"] = "quintOut";
      Easing["quintInOut"] = "quintInOut";
      Easing["quintOutIn"] = "quintOutIn";
      Easing["sineIn"] = "sineIn";
      Easing["sineOut"] = "sineOut";
      Easing["sineInOut"] = "sineInOut";
      Easing["sineOutIn"] = "sineOutIn";
      Easing["expoIn"] = "expoIn";
      Easing["expoOut"] = "expoOut";
      Easing["expoInOut"] = "expoInOut";
      Easing["expoOutIn"] = "expoOutIn";
      Easing["circIn"] = "circIn";
      Easing["circOut"] = "circOut";
      Easing["circInOut"] = "circInOut";
      Easing["circOutIn"] = "circOutIn";
      Easing["elasticIn"] = "elasticIn";
      Easing["elasticOut"] = "elasticOut";
      Easing["elasticInOut"] = "elasticInOut";
      Easing["elasticOutIn"] = "elasticOutIn";
      Easing["backIn"] = "backIn";
      Easing["backOut"] = "backOut";
      Easing["backInOut"] = "backInOut";
      Easing["backOutIn"] = "backOutIn";
      Easing["bounceIn"] = "bounceIn";
      Easing["bounceOut"] = "bounceOut";
      Easing["bounceInOut"] = "bounceInOut";
      Easing["bounceOutIn"] = "bounceOutIn";
    })(Easing = exports.Easing || (exports.Easing = {}));
    cc._RF.pop();
  }, {
    "./CocosUtils": "CocosUtils",
    "./FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  FreeBetBJSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b58fen42FH3ruq2kdho0z1", "FreeBetBJSetting");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("./CocosUtils");
    var FreeBetBJContent_1 = require("./FreeBetBJContent");
    var FreeBetBJSetting = function() {
      function FreeBetBJSetting() {
        this._language = "EN";
        this._music = true;
        this._sound = true;
        this.languages = [ "EN", "CN" ];
      }
      Object.defineProperty(FreeBetBJSetting.prototype, "language", {
        get: function() {
          return this._language;
        },
        set: function(value) {
          this._language = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FreeBetBJSetting.prototype, "music", {
        get: function() {
          return this._music;
        },
        set: function(value) {
          this._music = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(FreeBetBJSetting.prototype, "sound", {
        get: function() {
          return this._sound;
        },
        set: function(value) {
          this._sound = value;
        },
        enumerable: true,
        configurable: true
      });
      FreeBetBJSetting.prototype.autoChangeLanguage = function() {
        var _this = this;
        var index = -1;
        this.languages.forEach(function(item, i, arr) {
          item === _this.language && (index = i + 1 >= arr.length ? 0 : i + 1);
        });
        -1 != index ? this.language = this.languages[index] : CocosUtils_1.default.warn("change language error.");
      };
      FreeBetBJSetting.prototype.changeLanguage = function(lang) {
        this.language = lang;
        this.triggerLanguage(FreeBetBJContent_1.getCurrentSceneNode());
      };
      FreeBetBJSetting.prototype.triggerLanguage = function(node) {
        var _this = this;
        node.children.forEach(function(child) {
          var js = cc.js.getClassByName(child.name);
          if (js) {
            var childJs = child.getComponent(child.name);
            childJs && "function" === typeof childJs.language && childJs.language();
          }
          _this.triggerLanguage(child);
        });
      };
      return FreeBetBJSetting;
    }();
    exports.default = FreeBetBJSetting;
    exports.freeBetBJSetting = new FreeBetBJSetting();
    cc._RF.pop();
  }, {
    "./CocosUtils": "CocosUtils",
    "./FreeBetBJContent": "FreeBetBJContent"
  } ],
  FreeBetBJTableInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "244b1GZaCpFyqrm9sMYk2FX", "FreeBetBJTableInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.gamerInfo = {
      gamerId: "",
      balance: 0
    };
    exports.serverInfo = {
      data: null
    };
    exports.tableSetting = {
      tableID: "",
      betUnit: 0,
      minBet: 0,
      maxBet: 0
    };
    exports.cardSetting = {
      focus: {
        show: [ {
          x: 0,
          y: 0,
          angle: 2,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 26,
          y: 3,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 53,
          y: 5,
          angle: -1,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 79,
          y: 6,
          angle: -2,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 104,
          y: 5,
          angle: -4,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 129,
          y: 2,
          angle: -6,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 155,
          y: -2,
          angle: -7,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 182,
          y: -6,
          angle: -8,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 207,
          y: -12,
          angle: -10,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 232,
          y: -19,
          angle: -12,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        } ],
        value: [ {
          x: 0,
          y: 0
        }, {
          x: 64,
          y: 79
        }, {
          x: 64,
          y: 79
        }, {
          x: 95,
          y: 85
        }, {
          x: 118,
          y: 85
        }, {
          x: 137,
          y: 84
        }, {
          x: 165,
          y: 77
        }, {
          x: 190,
          y: 70
        }, {
          x: 214,
          y: 65
        }, {
          x: 240,
          y: 59
        }, {
          x: 260,
          y: 48
        } ]
      },
      A: {
        initial: [ {
          x: 0,
          y: 0
        }, {
          x: 15,
          y: 60
        }, {
          x: 30,
          y: 120
        }, {
          x: 45,
          y: 180
        } ],
        inner: {
          show: [ {
            x: 0,
            y: 0,
            angle: 14,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 16,
            y: 6,
            angle: 11,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 34,
            y: 10,
            angle: 10,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 52,
            y: 12,
            angle: 8,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 70,
            y: 13,
            angle: 6,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 88,
            y: 13,
            angle: 4,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 106,
            y: 12,
            angle: 2,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 125,
            y: 10,
            angle: 0,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 142,
            y: 8,
            angle: -2,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 158,
            y: 5,
            angle: -5,
            skewX: -10,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          } ],
          value: [ {
            x: 0,
            y: 0
          }, {
            x: 34,
            y: 57
          }, {
            x: 34,
            y: 57
          }, {
            x: 49,
            y: 63
          }, {
            x: 56,
            y: 65
          }, {
            x: 78,
            y: 69
          }, {
            x: 90,
            y: 69
          }, {
            x: 111,
            y: 71
          }, {
            x: 122,
            y: 68
          }, {
            x: 138,
            y: 68
          }, {
            x: 153,
            y: 60
          } ]
        },
        outer: {
          show: [ {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: -4,
            y: 0
          }, {
            x: -8,
            y: 0
          }, {
            x: -12,
            y: 0
          }, {
            x: -16,
            y: 0
          }, {
            x: -20,
            y: 0
          }, {
            x: -24,
            y: 0
          }, {
            x: -28,
            y: 0
          }, {
            x: -32,
            y: 0
          } ]
        }
      },
      B: {
        initial: [ {
          x: 0,
          y: -60
        }, {
          x: 0,
          y: 0
        }, {
          x: 0,
          y: 60
        }, {
          x: 0,
          y: 120
        } ],
        inner: {
          show: [ {
            x: 0,
            y: 0,
            angle: 2,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 19,
            y: 1,
            angle: 0,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 39,
            y: 2,
            angle: -1,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 59,
            y: 2,
            angle: -2,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 79,
            y: 2,
            angle: -3,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 98,
            y: -1,
            angle: -5,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 117,
            y: -4,
            angle: -7,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 137,
            y: -7,
            angle: -8,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 156,
            y: -11,
            angle: -10,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          }, {
            x: 175,
            y: -16,
            angle: -12,
            skewX: -2,
            skewY: -2,
            scaleX: 1,
            scaleY: .9
          } ],
          value: [ {
            x: 0,
            y: 0
          }, {
            x: 55,
            y: 45
          }, {
            x: 55,
            y: 45
          }, {
            x: 64,
            y: 49
          }, {
            x: 75,
            y: 50
          }, {
            x: 87,
            y: 50
          }, {
            x: 98,
            y: 45
          }, {
            x: 110,
            y: 40
          }, {
            x: 122,
            y: 39
          }, {
            x: 134,
            y: 35
          }, {
            x: 146,
            y: 30
          } ]
        },
        outer: {
          show: [ {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: -8,
            y: 0
          }, {
            x: -16,
            y: 0
          }, {
            x: -24,
            y: 0
          }, {
            x: -32,
            y: 0
          }, {
            x: -40,
            y: 0
          }, {
            x: -48,
            y: 0
          }, {
            x: -56,
            y: 0
          }, {
            x: -64,
            y: 0
          } ]
        }
      },
      C: {
        initial: [ {
          x: 0,
          y: 0
        }, {
          x: -15,
          y: 60
        }, {
          x: -30,
          y: 120
        }, {
          x: -45,
          y: 180
        } ],
        inner: {
          show: [ {
            x: 0,
            y: 0,
            angle: -8,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 21,
            y: -3,
            angle: -10,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 42,
            y: -7,
            angle: -12,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 63,
            y: -12,
            angle: -13,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 83,
            y: -18,
            angle: -14,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 102,
            y: -24,
            angle: -15,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 120,
            y: -32,
            angle: -16,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 138,
            y: -40,
            angle: -18,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 155,
            y: -50,
            angle: -20,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 172,
            y: -60,
            angle: -22,
            skewX: 12,
            skewY: -5,
            scaleX: 1,
            scaleY: 1
          } ],
          value: [ {
            x: 0,
            y: 0
          }, {
            x: 65,
            y: 41
          }, {
            x: 65,
            y: 41
          }, {
            x: 84,
            y: 45
          }, {
            x: 97,
            y: 47
          }, {
            x: 111,
            y: 45
          }, {
            x: 120,
            y: 41
          }, {
            x: 130,
            y: 36
          }, {
            x: 142,
            y: 32
          }, {
            x: 150,
            y: 28
          }, {
            x: 161,
            y: 18
          } ]
        },
        outer: {
          show: [ {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: -8,
            y: 6
          }, {
            x: -16,
            y: 12
          }, {
            x: -24,
            y: 18
          }, {
            x: -32,
            y: 24
          }, {
            x: -40,
            y: 30
          }, {
            x: -48,
            y: 36
          }, {
            x: -56,
            y: 42
          }, {
            x: -64,
            y: 48
          } ]
        }
      },
      dealerFocus: {
        show: [ {
          x: 0,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 28,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 56,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 84,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 112,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 140,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 168,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 196,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 224,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        }, {
          x: 252,
          y: 0,
          angle: 0,
          skewX: 0,
          skewY: 0,
          scaleX: 1.4,
          scaleY: 1.4
        } ],
        value: [ {
          x: 0,
          y: 0
        }, {
          x: 64,
          y: 79
        }, {
          x: 64,
          y: 79
        }, {
          x: 82,
          y: 79
        }, {
          x: 100,
          y: 79
        }, {
          x: 118,
          y: 79
        }, {
          x: 136,
          y: 79
        }, {
          x: 154,
          y: 79
        }, {
          x: 172,
          y: 79
        }, {
          x: 190,
          y: 79
        }, {
          x: 208,
          y: 79
        } ]
      },
      Dealer: {
        initial: [ {
          x: 0,
          y: 0
        } ],
        inner: {
          show: [ {
            x: 0,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 20,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 40,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 60,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 80,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 100,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 120,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 140,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 160,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          }, {
            x: 180,
            y: 0,
            angle: 0,
            skewX: 0,
            skewY: 0,
            scaleX: 1,
            scaleY: 1
          } ],
          value: [ {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 40,
            y: 55
          }, {
            x: 50,
            y: 55
          }, {
            x: 60,
            y: 55
          }, {
            x: 70,
            y: 55
          }, {
            x: 80,
            y: 55
          }, {
            x: 90,
            y: 55
          }, {
            x: 100,
            y: 55
          }, {
            x: 110,
            y: 55
          }, {
            x: 120,
            y: 55
          } ]
        },
        outer: {
          show: [ {
            x: 0,
            y: 0
          }, {
            x: -10,
            y: 0
          }, {
            x: -20,
            y: 0
          }, {
            x: -30,
            y: 0
          }, {
            x: -40,
            y: 0
          }, {
            x: -50,
            y: 0
          }, {
            x: -60,
            y: 0
          }, {
            x: -70,
            y: 0
          }, {
            x: -80,
            y: 0
          }, {
            x: -90,
            y: 0
          }, {
            x: -100,
            y: 0
          } ]
        }
      }
    };
    var ValueType;
    (function(ValueType) {
      ValueType[ValueType["WIN"] = 0] = "WIN";
      ValueType[ValueType["LOSE"] = 1] = "LOSE";
      ValueType[ValueType["PUSH"] = 2] = "PUSH";
      ValueType[ValueType["BUSTED"] = 3] = "BUSTED";
      ValueType[ValueType["BLACKJACK"] = 4] = "BLACKJACK";
      ValueType[ValueType["FREEBETPUSH"] = 5] = "FREEBETPUSH";
      ValueType[ValueType["NONE"] = 6] = "NONE";
    })(ValueType = exports.ValueType || (exports.ValueType = {}));
    var GameAction;
    (function(GameAction) {
      GameAction["BET"] = "bet";
      GameAction["CARD"] = "card";
    })(GameAction = exports.GameAction || (exports.GameAction = {}));
    var GameButton;
    (function(GameButton) {
      GameButton["MAXBET"] = "maxBet";
      GameButton["HIT"] = "hit";
      GameButton["DEAL"] = "deal";
      GameButton["STAND"] = "stand";
      GameButton["FREESPLIT"] = "freeSplit";
      GameButton["FREEDOUBLE"] = "freeDouble";
      GameButton["DOUBLE"] = "double";
      GameButton["SPLIT"] = "split";
      GameButton["NEWGAME"] = "newGame";
      GameButton["REBET"] = "reBet";
    })(GameButton = exports.GameButton || (exports.GameButton = {}));
    cc._RF.pop();
  }, {} ],
  FreeBetBJTable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8ee2ivNm9BqLmYuGWT4EdN", "FreeBetBJTable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../lib/CocosUtils");
    var FreeBetBJTableInfo_1 = require("../lib/FreeBetBJTableInfo");
    var FreeBetBJContent_1 = require("../lib/FreeBetBJContent");
    var tween = cc.tween;
    var FreeBetBJ_1 = require("../lib/FreeBetBJ");
    var Audio_1 = require("../lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FreeBetBJTable = function(_super) {
      __extends(FreeBetBJTable, _super);
      function FreeBetBJTable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Chips = null;
        _this.Menu = null;
        _this.BetValue = null;
        _this.FreeChip = null;
        _this.bet = {
          realTimeUnitA: 0,
          realTimeUnitB: 0,
          realTimeUnitC: 0,
          unitA: 0,
          unitB: 0,
          unitC: 0
        };
        _this.moveChips = [];
        return _this;
      }
      FreeBetBJTable.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      FreeBetBJTable.prototype.initClickEvent = function() {
        var _this = this;
        this.root["bet"].children.forEach(function(n) {
          n.on(cc.Node.EventType.TOUCH_START, _this.onBetClick, _this);
        });
      };
      FreeBetBJTable.prototype.onLoad = function() {
        this.init();
        this.initClickEvent();
      };
      FreeBetBJTable.prototype.getRandomToken = function() {
        var chars = "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var s = "";
        for (var i = 0; i < 20; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
        return s;
      };
      FreeBetBJTable.prototype.start = function() {
        var _this = this;
        var url = new URL(location.href);
        var localToken = cc.sys.localStorage.getItem("pid");
        var token = null === url.searchParams.get("pid") ? localToken : url.searchParams.get("pid");
        token || (token = this.getRandomToken());
        cc.sys.localStorage.setItem("pid", token);
        FreeBetBJTableInfo_1.gamerInfo.gamerId = token;
        this.hideUrl();
        var menu = cc.instantiate(this.Menu);
        var menuJs = menu.getComponent("Menu");
        menuJs.init();
        menuJs.table = this;
        menu.zIndex = FreeBetBJContent_1.zOrder.zIndex_8;
        this.node.addChild(menu);
        this.updateBetLimitLabel();
        FreeBetBJ_1.freeBetBJ.getGame().catch(function(err) {
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          "no_game" === res.status ? _this.effectOfChangeAction(FreeBetBJTableInfo_1.GameAction.BET) : "ongoing" === res.status && _this.getEventScript().noEffectServerEvent(res);
        });
      };
      FreeBetBJTable.prototype.onBetZoneClick = function(evt) {
        var chips = this.getChips();
        if (!chips) return;
        var chipsJs = chips.getComponent("Chips");
        var focusUnit = chipsJs.getFocusChipUnit();
        var currentUnit = this.getBetUnit(evt.target);
        if (currentUnit === FreeBetBJTableInfo_1.tableSetting.maxBet) return;
        currentUnit = currentUnit + focusUnit >= FreeBetBJTableInfo_1.tableSetting.maxBet ? FreeBetBJTableInfo_1.tableSetting.maxBet : currentUnit + focusUnit;
        this.setBetRealTimeUnit(evt.target, currentUnit);
        this.effectOfMoveChip(evt.target, chipsJs.focusChip);
      };
      FreeBetBJTable.prototype.onBetClick = function() {};
      FreeBetBJTable.prototype.onCleanClick = function() {
        this.bet.realTimeUnitA = this.bet.realTimeUnitB = this.bet.realTimeUnitC = 0;
        this.bet.unitA = this.bet.unitB = this.bet.unitC = 0;
        this.removeAllMoveChips();
        this.updateBetValueLabel();
      };
      FreeBetBJTable.prototype.onBetValueClearClick = function(evt) {
        var seat = evt.target.parent.parent.name;
        var betValue = evt.target.parent;
        if (betValue.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.bet["unit" + seat] = 0;
        this.bet["realTimeUnit" + seat] = 0;
        this.updateBetValueLabel();
      };
      FreeBetBJTable.prototype.getChips = function() {
        return this.node.getChildByName("Chips");
      };
      FreeBetBJTable.prototype.getBetUnit = function(node) {
        switch (node.name) {
         case "A":
          return this.bet.realTimeUnitA;

         case "B":
          return this.bet.realTimeUnitB;

         case "C":
          return this.bet.realTimeUnitC;
        }
      };
      FreeBetBJTable.prototype.setBetRealTimeUnit = function(node, unit) {
        switch (node.name) {
         case "A":
          this.bet.realTimeUnitA = unit;
          break;

         case "B":
          this.bet.realTimeUnitB = unit;
          break;

         case "C":
          this.bet.realTimeUnitC = unit;
        }
      };
      FreeBetBJTable.prototype.addBetUnit = function(node, chip) {
        var unit = chip.getComponent("Chip").unit;
        switch (node.name) {
         case "A":
          this.bet.unitA += unit;
          this.bet.unitA > FreeBetBJTableInfo_1.tableSetting.maxBet && (this.bet.unitA = FreeBetBJTableInfo_1.tableSetting.maxBet);
          break;

         case "B":
          this.bet.unitB += unit;
          this.bet.unitB > FreeBetBJTableInfo_1.tableSetting.maxBet && (this.bet.unitB = FreeBetBJTableInfo_1.tableSetting.maxBet);
          break;

         case "C":
          this.bet.unitC += unit;
          this.bet.unitC > FreeBetBJTableInfo_1.tableSetting.maxBet && (this.bet.unitC = FreeBetBJTableInfo_1.tableSetting.maxBet);
        }
      };
      FreeBetBJTable.prototype.setBetValue = function(seat, value) {
        var label = this.root["$bet"]["$" + seat]["$BetValue"]["#bet"]["label"];
        label.string = FreeBetBJContent_1.getFormatNumberString(value);
      };
      FreeBetBJTable.prototype.getCardBoxCard = function() {
        return this.root["$cardBox"]["card"];
      };
      FreeBetBJTable.prototype.getDealerScript = function() {
        return this.root["Dealer"].getComponent("Dealer");
      };
      FreeBetBJTable.prototype.getCardsScript = function() {
        return this.root["Cards"].getComponent("Cards");
      };
      FreeBetBJTable.prototype.getChipsScript = function() {
        return this.node.getChildByName("Chips").getComponent("Chips");
      };
      FreeBetBJTable.prototype.getButtonsScript = function() {
        return this.root["Buttons"].getComponent("Buttons");
      };
      FreeBetBJTable.prototype.getEventScript = function() {
        return this.node.getComponent("FreeBetEventHandler");
      };
      FreeBetBJTable.prototype.getBalanceScript = function() {
        return this.root["Balance"].getComponent("Balance");
      };
      FreeBetBJTable.prototype.updateBetButtonStatus = function() {
        this.getButtonsScript().enableButtonClick(FreeBetBJTableInfo_1.GameButton.DEAL, this.bet.realTimeUnitA >= FreeBetBJTableInfo_1.tableSetting.minBet || this.bet.realTimeUnitB >= FreeBetBJTableInfo_1.tableSetting.minBet || this.bet.realTimeUnitC >= FreeBetBJTableInfo_1.tableSetting.minBet);
      };
      FreeBetBJTable.prototype.updateBetValueLabel = function() {
        var _this = this;
        this.root["$bet"]["$A"]["zone"].destroyAllChildren();
        this.root["$bet"]["$B"]["zone"].destroyAllChildren();
        this.root["$bet"]["$C"]["zone"].destroyAllChildren();
        if (this.bet.unitA > 0) {
          var nodes = this.getChipsScript().getChipNodes(this.bet.unitA);
          nodes.forEach(function(node) {
            node.removeComponent(cc.BlockInputEvents);
            node.removeComponent(cc.Button);
            _this.root["$bet"]["$A"]["zone"].addChild(node);
          });
          this.showBetValue("A", true);
          this.setBetValue("A", this.bet.unitA * FreeBetBJTableInfo_1.tableSetting.betUnit);
        } else this.showBetValue("A", false);
        if (this.bet.unitB > 0) {
          var nodes = this.getChipsScript().getChipNodes(this.bet.unitB);
          nodes.forEach(function(node) {
            node.removeComponent(cc.BlockInputEvents);
            node.removeComponent(cc.Button);
            _this.root["$bet"]["$B"]["zone"].addChild(node);
          });
          this.showBetValue("B", true);
          this.setBetValue("B", this.bet.unitB * FreeBetBJTableInfo_1.tableSetting.betUnit);
        } else this.showBetValue("B", false);
        if (this.bet.unitC > 0) {
          var nodes = this.getChipsScript().getChipNodes(this.bet.unitC);
          nodes.forEach(function(node) {
            node.removeComponent(cc.BlockInputEvents);
            node.removeComponent(cc.Button);
            _this.root["$bet"]["$C"]["zone"].addChild(node);
          });
          this.showBetValue("C", true);
          this.setBetValue("C", this.bet.unitC * FreeBetBJTableInfo_1.tableSetting.betUnit);
        } else this.showBetValue("C", false);
        this.updateBetButtonStatus();
      };
      FreeBetBJTable.prototype.updateBetLimitLabel = function() {
        this.root["$bet"]["$tips"]["$maxBet"]["#value"]["label"].string = FreeBetBJTableInfo_1.tableSetting.betUnit * FreeBetBJTableInfo_1.tableSetting.maxBet + "";
        this.root["$bet"]["$tips"]["$minBet"]["#value"]["label"].string = FreeBetBJTableInfo_1.tableSetting.betUnit * FreeBetBJTableInfo_1.tableSetting.minBet + "";
      };
      FreeBetBJTable.prototype.addFreeChipToSeat = function(seat, clean) {
        void 0 === clean && (clean = false);
        var target = this.root["$bet"]["$" + seat]["$free"]["zone"];
        clean ? target.destroyAllChildren() : target.addChild(cc.instantiate(this.FreeChip));
      };
      FreeBetBJTable.prototype.effectOfMoveChip = function(target, chip) {
        var _this = this;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.chip);
        var moveChip = cc.instantiate(chip);
        moveChip.removeComponent(cc.Button);
        moveChip.removeComponent(cc.BlockInputEvents);
        moveChip.getChildByName("bg").color = cc.Color.WHITE;
        var startP = FreeBetBJContent_1.getXYUntilNode(chip, this.node);
        var endP = FreeBetBJContent_1.getXYUntilNode(target, this.node);
        moveChip.x = startP.x;
        moveChip.y = startP.y;
        this.node.addChild(moveChip);
        this.addChipToMoveChips(moveChip);
        cc.tween(moveChip).to(.2, {
          x: endP.x,
          y: endP.y
        }).call(function() {
          _this.addBetUnit(target, chip);
          _this.removeChipFromMoveChips(moveChip);
          _this.updateBetValueLabel();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfDealerSendChip = function(seat, delay, callback) {
        void 0 === callback && (callback = null);
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.chip);
        var start = this.root["chipBox"];
        var end = this.root["$bet"][seat];
        var targetZone = this.root["$bet"]["$" + seat]["zone"];
        var copy = cc.instantiate(targetZone);
        var startP = FreeBetBJContent_1.getXYUntilNode(start, this.node);
        var endP = FreeBetBJContent_1.getXYUntilNode(end, this.node);
        copy.x = startP.x;
        copy.y = startP.y;
        this.node.addChild(copy);
        tween(copy).delay(delay).to(.2, {
          x: endP.x,
          y: endP.y
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          null !== callback && callback();
        }).call(function() {
          copy.destroy();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfDealerSendFreeChip = function(seat, callback) {
        var _this = this;
        void 0 === callback && (callback = null);
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.chip);
        var start = this.root["chipBox"];
        var startP = FreeBetBJContent_1.getXYUntilNode(start, this.node);
        var end = this.root["$bet"]["$" + seat]["$free"]["zone"];
        var endP = FreeBetBJContent_1.getXYUntilNode(end, this.node);
        var moveFreeChip = cc.instantiate(this.FreeChip);
        moveFreeChip.x = startP.x;
        moveFreeChip.y = startP.y;
        this.node.addChild(moveFreeChip);
        cc.tween(moveFreeChip).to(.25, {
          x: endP.x,
          y: endP.y
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          _this.addFreeChipToSeat(seat);
          callback && callback();
          moveFreeChip.destroy();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfMoveCard = function(seat, row, card, isBlackJack, isBusted, focus, isFreePush) {
        void 0 === isBlackJack && (isBlackJack = false);
        void 0 === isBusted && (isBusted = false);
        void 0 === focus && (focus = false);
        void 0 === isFreePush && (isFreePush = false);
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.card);
        var isDealer = "Dealer" === seat;
        var moveCard = cc.instantiate(this.root["$cardBox"]["card"]);
        var startP = FreeBetBJContent_1.getXYUntilNode(this.root["$cardBox"]["card"], this.node);
        moveCard.active = true;
        moveCard.x = startP.x;
        moveCard.y = startP.y;
        this.node.addChild(moveCard);
        var cardsJs = this.root["Cards"].getComponent("Cards");
        var dealerJs = this.root["Dealer"].getComponent("Dealer");
        var newCard = isDealer ? dealerJs.addCardToSeatRow(card) : cardsJs.addCardToSeatRow(card, seat, row, focus);
        newCard.active = false;
        var endP = FreeBetBJContent_1.getXYUntilNode(newCard, this.node);
        cc.tween(moveCard).to(.075, {
          x: (endP.x + startP.x) / 2,
          y: (endP.y + startP.y) / 2,
          angle: (newCard.angle + moveCard.angle) / 2,
          skewX: 45,
          skewY: 45,
          scaleX: (newCard.scaleX + moveCard.scaleX) / 2,
          scaleY: (newCard.scaleY + moveCard.scaleY) / 2
        }).call(function() {
          moveCard.getComponent(cc.Sprite).spriteFrame = newCard.getComponent(cc.Sprite).spriteFrame;
        }).to(.075, {
          x: endP.x,
          y: endP.y,
          angle: newCard.angle,
          skewX: newCard.skewX,
          skewY: newCard.skewY,
          scaleX: newCard.scaleX,
          scaleY: newCard.scaleY
        }).call(function() {
          newCard.active = true;
          isDealer ? dealerJs.updateRowPosition() : cardsJs.updateRowPosition(seat, row);
          isDealer ? dealerJs.showValue(true, isBlackJack) : cardsJs.showValue(seat, row, true, isBlackJack);
          isDealer ? dealerJs.updateValuePosition() : cardsJs.updateValuePosition(seat, focus);
          isBusted && (isDealer ? dealerJs.setValueStatus(FreeBetBJTableInfo_1.ValueType.BUSTED) : cardsJs.setValueStatus(seat, row, FreeBetBJTableInfo_1.ValueType.BUSTED));
          isDealer && isFreePush && dealerJs.setValueStatus(FreeBetBJTableInfo_1.ValueType.FREEBETPUSH);
          moveCard.destroy();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfReceiveAllCards = function(rebet) {
        var _this = this;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.card);
        var dealerCards = this.root["$Dealer"]["$row0"]["card"];
        dealerCards.children.forEach(function(card) {
          _this.effectOfReceiveCard(card);
        });
        dealerCards.destroyAllChildren();
        this.getDealerScript().initSeatRow();
        var seats = this.root["Cards"];
        seats.children.forEach(function(seat) {
          seat.children.forEach(function(row) {
            var cards = row.getChildByName("card");
            cards.children.forEach(function(card) {
              _this.effectOfReceiveCard(card);
            });
            cards.destroyAllChildren();
          });
        });
        this.getCardsScript().initSeatRow();
        this.getButtonsScript().actionIndex = 0;
        this.addFreeChipToSeat("A", true);
        this.addFreeChipToSeat("B", true);
        this.addFreeChipToSeat("C", true);
        tween(this.node).delay(.3).call(function() {
          if (rebet) {
            var bets = [];
            bets.push(_this.bet.realTimeUnitA * FreeBetBJTableInfo_1.tableSetting.betUnit);
            bets.push(_this.bet.realTimeUnitB * FreeBetBJTableInfo_1.tableSetting.betUnit);
            bets.push(_this.bet.realTimeUnitC * FreeBetBJTableInfo_1.tableSetting.betUnit);
            FreeBetBJ_1.freeBetBJ.startNewGame(bets).catch(function(err) {
              CocosUtils_1.default.error(err);
            }).then(function(res) {
              if (!res) return;
              var handler = _this.node.getComponent("FreeBetEventHandler");
              handler.effectServerEvent(res);
            });
          } else _this.effectOfChangeAction(FreeBetBJTableInfo_1.GameAction.BET);
        }).start();
      };
      FreeBetBJTable.prototype.effectOfReceiveCard = function(card) {
        var startP = FreeBetBJContent_1.getXYUntilNode(card, this.node);
        var moveCard = cc.instantiate(card);
        moveCard.x = startP.x;
        moveCard.y = startP.y;
        var end = this.root["$cardBackBox"]["card"];
        var endP = FreeBetBJContent_1.getXYUntilNode(end, this.node);
        this.node.addChild(moveCard);
        cc.tween(moveCard).to(.125, {
          x: (endP.x + startP.x) / 2,
          y: (endP.y + startP.y) / 2,
          angle: (end.angle + moveCard.angle) / 2,
          skewX: 45,
          skewY: 45,
          scaleX: (end.scaleX + moveCard.scaleX) / 2,
          scaleY: (end.scaleY + moveCard.scaleY) / 2
        }).call(function() {
          moveCard.getComponent(cc.Sprite).spriteFrame = end.getComponent(cc.Sprite).spriteFrame;
        }).to(.125, {
          x: endP.x,
          y: endP.y,
          angle: end.angle,
          skewX: end.skewX,
          skewY: end.skewY,
          scaleX: end.scaleX,
          scaleY: end.scaleY
        }).call(function() {
          moveCard.destroy();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfSlideDownShow = function(target) {
        var oy = target.y;
        target.active = true;
        cc.tween(target).by(.25, {
          y: -target.height
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          target.y = oy - target.height;
        }).start();
      };
      FreeBetBJTable.prototype.effectOfSlideDownHide = function(target, callback) {
        void 0 === callback && (callback = null);
        var oy = target.y;
        cc.tween(target).by(.25, {
          y: -target.height
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          target.y = oy - target.height;
          target.active = false;
          callback && callback();
        }).start();
      };
      FreeBetBJTable.prototype.effectOfSlideUpShow = function(target, callback) {
        void 0 === callback && (callback = null);
        var oy = target.y;
        target.active = true;
        cc.tween(target).by(.25, {
          y: target.height
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          target.y = oy + target.height;
        }).start();
      };
      FreeBetBJTable.prototype.effectOfSlideUpHide = function(target) {
        var oy = target.y;
        cc.tween(target).by(.25, {
          y: target.height
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          target.y = oy + target.height;
          target.active = false;
        }).start();
      };
      FreeBetBJTable.prototype.effectOfChangeAction = function(action) {
        var _this = this;
        if (action === FreeBetBJTableInfo_1.GameAction.BET) {
          var bg = this.root["bg"];
          var bet = this.root["bet"];
          cc.tween(bg).to(.25, {
            y: 100
          }).call(function() {
            _this.createChips();
            _this.updateBetValueLabel();
          }).start();
          cc.tween(bet).to(.25, {
            y: 100
          }).start();
          this.showCardBox(false);
          this.showCardBackBox(false);
          this.showChipBox(false);
          this.getButtonsScript().changeButtons(action);
        } else if (action === FreeBetBJTableInfo_1.GameAction.CARD) {
          var bg = this.root["bg"];
          var bet = this.root["bet"];
          cc.tween(bg).to(.25, {
            y: 0
          }).call(function() {
            _this.showCardBox(true);
            _this.showCardBackBox(true);
            _this.showChipBox(true);
          }).start();
          cc.tween(bet).to(.25, {
            y: 0
          }).start();
          this.destroyChips();
          this.getButtonsScript().changeButtons(action);
          this.showBetValue("A", false);
          this.showBetValue("B", false);
          this.showBetValue("C", false);
        }
      };
      FreeBetBJTable.prototype.effectOfBetValue = function(seat, value) {
        var target = this.root["$bet"][seat];
        var startP = FreeBetBJContent_1.getXYUntilNode(target, this.node.parent);
        var betValue = cc.instantiate(this.BetValue);
        var betValueJs = betValue.getComponent("BetValue");
        betValueJs.setBetValue(value);
        betValue.x = startP.x;
        betValue.y = startP.y - 120;
        betValue.scaleX = betValue.scaleY = .1;
        this.node.parent.addChild(betValue);
        cc.tween(betValue).to(.2, {
          scaleX: 1,
          scaleY: 1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).delay(1.5).to(.2, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          betValue.destroy();
        }).start();
      };
      FreeBetBJTable.prototype.addChipToMoveChips = function(chip) {
        this.moveChips.push(chip);
      };
      FreeBetBJTable.prototype.removeChipFromMoveChips = function(chip) {
        var index = -1;
        for (var i = 0; this.moveChips.length; i++) if (this.moveChips[i] === chip) {
          chip.destroy();
          index = i;
          break;
        }
        this.moveChips.splice(index, 1);
      };
      FreeBetBJTable.prototype.removeAllMoveChips = function() {
        this.moveChips.forEach(function(chip) {
          chip.stopAllActions();
          chip.destroy();
        });
        this.moveChips.length = 0;
      };
      FreeBetBJTable.prototype.createChips = function() {
        var chips = cc.instantiate(this.Chips);
        var chipsJs = chips.getComponent("Chips");
        chipsJs.table = this;
        chipsJs.setChips(FreeBetBJTableInfo_1.tableSetting.betUnit);
        this.node.addChild(chips);
      };
      FreeBetBJTable.prototype.destroyChips = function() {
        var chips = this.node.getChildByName("Chips");
        this.effectOfSlideDownHide(chips, function() {
          chips.destroy();
        });
      };
      FreeBetBJTable.prototype.showBetTips = function(show) {};
      FreeBetBJTable.prototype.showBetValue = function(seat, show) {
        var betValue = this.root["$bet"]["$" + seat]["BetValue"];
        betValue.getNumberOfRunningActions() > 0 && betValue.stopAllActions();
        if (show) {
          if (false === betValue.active) {
            betValue.active = true;
            cc.tween(betValue).to(.25, {
              scaleX: 1,
              scaleY: 1
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).start();
          }
        } else true === betValue.active && cc.tween(betValue).to(.15, {
          scaleX: .1,
          scaleY: .1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).call(function() {
          betValue.active = false;
        }).start();
      };
      FreeBetBJTable.prototype.showCardBox = function(show) {
        var target = this.root["cardBox"];
        show ? this.effectOfSlideDownShow(target) : this.effectOfSlideUpHide(target);
      };
      FreeBetBJTable.prototype.showCardBackBox = function(show) {
        var target = this.root["cardBackBox"];
        show ? this.effectOfSlideDownShow(target) : this.effectOfSlideUpHide(target);
      };
      FreeBetBJTable.prototype.showChipBox = function(show) {
        var target = this.root["chipBox"];
        show ? this.effectOfSlideDownShow(target) : this.effectOfSlideUpHide(target);
      };
      FreeBetBJTable.prototype.hideUrl = function() {
        var url = window.location.href;
        var newUrl = url.split("?")[0];
        history.pushState({}, "", newUrl);
      };
      FreeBetBJTable.prototype.testChangeBetAction = function() {
        this.effectOfChangeAction(FreeBetBJTableInfo_1.GameAction.BET);
      };
      FreeBetBJTable.prototype.testChangeCardAction = function() {
        this.effectOfChangeAction(FreeBetBJTableInfo_1.GameAction.CARD);
      };
      FreeBetBJTable.prototype.testEffectOfDealerSendChip = function() {
        this.getCardsScript().effectOfChipValue("A", [ 3e3, 12345, 54321, 2008 ]);
      };
      FreeBetBJTable.prototype.testEffectOfDealerSendFreeChip = function() {
        this.effectOfDealerSendFreeChip("A");
      };
      __decorate([ property(cc.Prefab) ], FreeBetBJTable.prototype, "Chips", void 0);
      __decorate([ property(cc.Prefab) ], FreeBetBJTable.prototype, "Menu", void 0);
      __decorate([ property(cc.Prefab) ], FreeBetBJTable.prototype, "BetValue", void 0);
      __decorate([ property(cc.Prefab) ], FreeBetBJTable.prototype, "FreeChip", void 0);
      FreeBetBJTable = __decorate([ ccclass ], FreeBetBJTable);
      return FreeBetBJTable;
    }(cc.Component);
    exports.default = FreeBetBJTable;
    cc._RF.pop();
  }, {
    "../lib/Audio": "Audio",
    "../lib/CocosUtils": "CocosUtils",
    "../lib/FreeBetBJ": "FreeBetBJ",
    "../lib/FreeBetBJContent": "FreeBetBJContent",
    "../lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  FreeBetBJText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3f70fbfPYdAl5+EUzYrNRN+", "FreeBetBJText");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EN = {
      Pop: {
        Yes: "YES",
        No: "NO",
        Ok: "OK"
      },
      Balance: {
        Point: "Pts"
      },
      Message: {
        LoginError: "Platform token id error. Please sing up again."
      },
      Menu: {
        GameRule: "GAME RULE",
        Setting: "SETTINGS"
      },
      Setting: {
        EN: "EN",
        CN: "CN"
      }
    };
    var CN = {
      Pop: {
        Yes: "\u662f",
        No: "\u5426",
        Ok: "\u597d"
      },
      Balance: {
        Point: "\u70b9"
      },
      Message: {
        LoginError: "\u7528\u6237\u8d44\u6599\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55"
      },
      Menu: {
        GameRule: "\u6e38\u620f\u89c4\u5219",
        Setting: "\u8bbe\u5b9a"
      },
      Setting: {
        EN: "\u82f1",
        CN: "\u4e2d"
      }
    };
    exports.freeBetBJText = {
      EN: EN,
      CN: CN
    };
    cc._RF.pop();
  }, {} ],
  FreeBetBJ: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d64d7J7vndJZa5DK31GCjhK", "FreeBetBJ");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJContent_1 = require("./FreeBetBJContent");
    var FreeBetBJTableInfo_1 = require("./FreeBetBJTableInfo");
    var gameHost = "https://clover.kimicat.com/fblackjack";
    exports.freeBetBjUtils = {
      promiseInjector: function(scope) {
        var _this = this;
        return function(func) {
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
          return _this.injectPromise.apply(_this, [ func.bind(scope) ].concat(args));
        };
      },
      injectPromise: function(func) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
        return new Promise(function(resolve, reject) {
          func.apply(void 0, args.concat([ function(err, res) {
            err ? reject(err) : resolve(res);
          } ]));
        });
      }
    };
    var FreeBetBJ = function() {
      function FreeBetBJ(tableID, callback) {
        void 0 === callback && (callback = null);
        this.injectPromise = exports.freeBetBjUtils.promiseInjector(this);
        this.tableID = tableID;
        setTimeout(function() {
          callback && callback(null);
        }, 100);
      }
      FreeBetBJ.prototype.sendRequest = function(api, body, method, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var http, url, data;
          return __generator(this, function(_a) {
            if (!callback) return [ 2, this.injectPromise(this.sendRequest, api, body, method) ];
            try {
              http = new XMLHttpRequest();
              url = gameHost + "/" + api;
              http.open(method, url);
              "POST" === method && http.setRequestHeader("Content-Type", "application/json");
              http.onreadystatechange = function() {
                if (4 == this.readyState) if (200 == this.status) {
                  var result = JSON.parse(this.responseText);
                  "undefined" != typeof result.error ? callback(result.error, null) : callback(null, result);
                } else callback(this.statusText, null);
              };
              data = JSON.stringify(body);
              "GET" === method ? http.send() : http.send(data);
            } catch (error) {
              callback(error, null);
            }
            return [ 2 ];
          });
        });
      };
      FreeBetBJ.prototype.getGameStatus = function(playerID, callback) {
        void 0 === playerID && (playerID = "");
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID
            };
            return [ 2, this.sendRequest("get_game", param, callback) ];
          });
        });
      };
      FreeBetBJ.prototype.joinTable = function(seatID, playerID, mainBet, sideBet, fortuneBet, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID,
              seatID: seatID,
              mainBet: mainBet,
              sideBet: sideBet,
              fortuneBet: fortuneBet
            };
            return [ 2, this.sendRequest("request_seat", param, callback) ];
          });
        });
      };
      FreeBetBJ.prototype.leaveTable = function(playerID, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID
            };
            return [ 2, this.sendRequest("leave_seat", param, callback) ];
          });
        });
      };
      FreeBetBJ.prototype.placeBet = function(playerID, mainBet, sideBet, fortuneBet, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID,
              mainBet: mainBet,
              sideBet: sideBet,
              fortuneBet: fortuneBet
            };
            return [ 2, this.sendRequest("place_bet", param, callback) ];
          });
        });
      };
      FreeBetBJ.prototype.checkAlive = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.sendRequest("", "", "GET") ];
          });
        });
      };
      FreeBetBJ.prototype.getTableStatus = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.sendRequest("get_table/" + this.tableID, "", "GET") ];
          });
        });
      };
      FreeBetBJ.prototype.getGame = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.sendRequest("get_game/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId, "", "GET") ];
          });
        });
      };
      FreeBetBJ.prototype.getBalance = function() {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.sendRequest("get_balance/money_table/" + FreeBetBJTableInfo_1.gamerInfo.gamerId, "", "GET") ];
          });
        });
      };
      FreeBetBJ.prototype.startNewGame = function(bets, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              bets: bets
            };
            return [ 2, this.sendRequest("start_game/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.hit = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/hit/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.stand = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/stand/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.split = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/split/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.freeSplit = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/free_split/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.double = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/double/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      FreeBetBJ.prototype.freeDouble = function(actionIndex, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {};
            return [ 2, this.sendRequest("action/free_double/" + this.tableID + "/" + FreeBetBJTableInfo_1.gamerInfo.gamerId + "/" + actionIndex, param, "POST", callback) ];
          });
        });
      };
      return FreeBetBJ;
    }();
    exports.FreeBetBJ = FreeBetBJ;
    exports.freeBetBJ = new FreeBetBJ(FreeBetBJContent_1.globalConstant.tableId);
    cc._RF.pop();
  }, {
    "./FreeBetBJContent": "FreeBetBJContent",
    "./FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  FreeBetEventHandler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2b9adK3O+ZL8Yq5SSxT1llb", "FreeBetEventHandler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJTableInfo_1 = require("./lib/FreeBetBJTableInfo");
    var tween = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var FreeBetEventHandler = function(_super) {
      __extends(FreeBetEventHandler, _super);
      function FreeBetEventHandler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.table = null;
        _this.splitSeatRow = [];
        return _this;
      }
      FreeBetEventHandler.prototype.start = function() {
        this.table = this.node.getComponent("FreeBetBJTable");
      };
      FreeBetEventHandler.prototype.checkSplitSeatRow = function(target) {
        var isSplit = false;
        for (var i = 0; i < this.splitSeatRow.length; i++) if (this.splitSeatRow[i] === target) {
          isSplit = true;
          this.splitSeatRow.splice(i, 1);
          break;
        }
        return isSplit;
      };
      FreeBetEventHandler.prototype.effectServerEvent = function(data) {
        var _this = this;
        FreeBetBJTableInfo_1.serverInfo.data = data;
        var tableJs = this.table;
        var cardsJs = tableJs.getCardsScript();
        var dealerJs = tableJs.getDealerScript();
        var buttonsJs = tableJs.getButtonsScript();
        var tween = cc.tween(this.node);
        var isNewGame = false;
        if (cardsJs.getRowCount("A") + cardsJs.getRowCount("B") + cardsJs.getRowCount("C") === 0) {
          isNewGame = true;
          data.seats.forEach(function(obj) {
            var seat = _this.getSeatByServerSeatIndex(obj.seatIndex);
            tween.call(function() {
              tableJs.effectOfBetValue(seat, obj.betUnit);
            });
            var card = obj.rows[0].cards[0];
            tween.call(function() {
              tableJs.effectOfMoveCard(seat, "row0", card, obj.rows[0].values.blackjack);
            }).delay(.15);
          });
          tween.call(function() {
            tableJs.effectOfMoveCard("Dealer", "row0", data.dealerCards[0], false);
          }).delay(.15);
          data.seats.forEach(function(obj) {
            var seat = _this.getSeatByServerSeatIndex(obj.seatIndex);
            var card = obj.rows[0].cards[1];
            tween.call(function() {
              tableJs.effectOfMoveCard(seat, "row0", card, obj.rows[0].values.blackjack);
              cardsJs.setValue(seat, "row0", {
                hard: obj.rows[0].values.hard,
                soft: obj.rows[0].values.soft
              });
            }).delay(.15);
          });
          tween.call(function() {
            tableJs.effectOfMoveCard("Dealer", "row0", 52, false);
          }).delay(.15);
        }
        var needCheckSplitForFocusEqual = false;
        var splitSeat = "";
        var newRow = null;
        data.seats.forEach(function(obj) {
          var seat = _this.getSeatByServerSeatIndex(obj.seatIndex);
          var serverRowCount = obj.rows.length;
          var seatRowCount = cardsJs.getSeatRowCount(seat);
          if (serverRowCount > 1 && serverRowCount > seatRowCount) {
            splitSeat = seat;
            newRow = serverRowCount;
          }
        });
        if ("" !== splitSeat) {
          needCheckSplitForFocusEqual = true;
          var splitCurSeat_1 = cardsJs.focusing.seat;
          var splitCurRow_1 = cardsJs.focusing.row;
          var splitNewRow_1 = "row" + (newRow - 1);
          this.splitSeatRow.push(cardsJs.focusing.seat + cardsJs.focusing.row);
          this.splitSeatRow.push(cardsJs.focusing.seat + splitNewRow_1);
          tween.call(function() {
            cardsJs.effectOfSplitCard(splitCurSeat_1, splitCurRow_1, splitNewRow_1);
          }).delay(.5);
        }
        var targetSeat = "";
        -1 !== data.focus.seat && (targetSeat = this.getSeatByServerSeatIndex(data.seats[data.focus.seat].seatIndex));
        var targetRow = "";
        -1 !== data.focus.row && (targetRow = "row" + data.focus.row);
        var curSeat = cardsJs.focusing.seat;
        var curRow = cardsJs.focusing.row;
        if ("" === curSeat && "" === curRow) -1 !== data.focus.seat && -1 !== data.focus.seat && tween.call(function() {
          cardsJs.focus(targetSeat, targetRow);
        }).delay(.25); else {
          var _loop_1 = function() {
            needCheckSplitForFocusEqual = true;
            var newCurSeat = curSeat;
            var newCurRow = curRow;
            var serverRow = data.seats[this_1.getServerSeatsIndexBySeat(newCurSeat, data.seats)].rows[this_1.getServerRowByRow(newCurRow)];
            var _loop_4 = function(i) {
              tween.call(function() {
                tableJs.effectOfMoveCard(newCurSeat, newCurRow, serverRow.cards[i], serverRow.values.blackjack, i === serverRow.cards.length - 1 && "busted" === serverRow.status, true);
                cardsJs.setValue(newCurSeat, newCurRow, {
                  hard: serverRow.values.hard,
                  soft: serverRow.values.soft
                });
              }).delay(.25);
            };
            for (var i = isNewGame ? 2 : this_1.checkSplitSeatRow(newCurSeat + newCurRow) ? 1 : cardsJs.getCardCount(newCurSeat, newCurRow); i < serverRow.cards.length; i++) _loop_4(i);
            var newFocusing = this_1.getNextFocusingByFocusing({
              seat: newCurSeat,
              row: newCurRow
            }, data.seats);
            if (newCurSeat === newFocusing.seat) tween.call(function() {
              cardsJs.changeFocusOnSameSeat(newCurSeat, newCurRow, newFocusing.row);
            }).delay(.5); else {
              var i = this_1.getServerSeatsIndexBySeat(newFocusing.seat, data.seats);
              var j = this_1.getServerRowByRow(newFocusing.row);
              var isBj = -1 !== i && -1 !== j && data.seats[i].rows[j].values.blackjack;
              tween.call(function() {
                cardsJs.blur(newCurSeat);
              }).delay(.25);
              "" === newFocusing.seat || isBj || tween.call(function() {
                cardsJs.focus(newFocusing.seat, newFocusing.row);
              }).delay(.25);
            }
            cardsJs.focusing.seat = curSeat = newFocusing.seat;
            cardsJs.focusing.row = curRow = newFocusing.row;
          };
          var this_1 = this;
          while (curSeat !== targetSeat || curRow !== targetRow) _loop_1();
          if ("" !== curSeat && "" !== curRow) {
            var serverRow_1 = data.seats[this.getServerSeatsIndexBySeat(cardsJs.focusing.seat, data.seats)].rows[this.getServerRowByRow(cardsJs.focusing.row)];
            var _loop_2 = function(i) {
              tween.call(function() {
                tableJs.effectOfMoveCard(curSeat, curRow, serverRow_1.cards[i], false, false, true);
                cardsJs.setValue(curSeat, curRow, {
                  hard: serverRow_1.values.hard,
                  soft: serverRow_1.values.soft
                });
              }).delay(.25);
            };
            for (var i = isNewGame ? 2 : needCheckSplitForFocusEqual && this.checkSplitSeatRow(curSeat + curRow) ? 1 : cardsJs.getCardCount(curSeat, curRow); i < serverRow_1.cards.length; i++) _loop_2(i);
          }
        }
        if ("concluded" === data.status) {
          this.splitSeatRow.length = 0;
          tween.call(function() {
            dealerJs.focus();
          }).delay(.5);
          var dealerCards_1 = data.dealerCards;
          var dealerValues_1 = data.dealerValues;
          var _loop_3 = function(i) {
            var curCards = dealerCards_1.slice(0, i + 1);
            var values = this_2.getCardValue(curCards);
            1 === i ? tween.call(function() {
              dealerJs.setValue({
                hard: values.hard,
                soft: values.soft
              });
              dealerJs.effectOfTurnLastCard(dealerCards_1[i], dealerValues_1.blackjack);
            }).delay(.5) : tween.call(function() {
              dealerJs.setValue({
                hard: values.hard,
                soft: values.soft
              });
              tableJs.effectOfMoveCard("Dealer", "row0", dealerCards_1[i], false, i === dealerCards_1.length - 1 && dealerValues_1.hard > 22, true, i === dealerCards_1.length - 1 && 22 === values.hard);
            }).delay(.25);
          };
          var this_2 = this;
          for (var i = 1; i < dealerCards_1.length; i++) _loop_3(i);
          tween.call(function() {
            dealerJs.blur();
          }).delay(.5);
          data.seats.forEach(function(obj) {
            var seat = _this.getSeatByServerSeatIndex(obj.seatIndex);
            var returnValues = [];
            obj.rows.forEach(function(r, i) {
              var row = "row" + i;
              var status = _this.getValueTypeByServerResult(r.result);
              var returnsChip = r.returns;
              "win" === r.result && returnsChip > 0 && returnValues.push(returnsChip);
              tween.call(function() {
                cardsJs.setValueStatus(seat, row, status);
              });
            });
            returnValues.length > 0 && tween.call(function() {
              cardsJs.effectOfChipValue(seat, returnValues);
            });
            tween.delay(.25);
          });
        }
        if ("concluded" === data.status) tween.call(function() {
          buttonsJs.disableAllCardButtons();
          buttonsJs.showEndButtons(true);
        }); else {
          var i = data.focus.seat;
          var j = data.focus.row;
          var controlData_1 = data.seats[i].rows[j].actions;
          var actionsKey_1 = Object.keys(controlData_1);
          tween.call(function() {
            actionsKey_1.forEach(function(key) {
              var button = _this.getGameButtonByServerAction(key);
              buttonsJs.enableButtonClick(button, controlData_1[key]);
              buttonsJs.showButton(button, controlData_1[key]);
            });
          });
        }
        tween.start();
      };
      FreeBetEventHandler.prototype.noEffectServerEvent = function(data) {
        var _this = this;
        FreeBetBJTableInfo_1.serverInfo.data = data;
        var tableJs = this.table;
        var cardsJs = tableJs.getCardsScript();
        var dealerJs = tableJs.getDealerScript();
        var buttonsJs = tableJs.getButtonsScript();
        buttonsJs.actionIndex = data.actionIndex;
        var chips = cc.instantiate(tableJs.Chips);
        var chipsJs = chips.getComponent("Chips");
        var serverFocus = data.focus;
        data.seats.forEach(function(obj, seatI) {
          var seat = _this.getSeatByServerSeatIndex(obj.seatIndex);
          var betUnit = obj.betUnit;
          var playerBetUnit = betUnit / FreeBetBJTableInfo_1.tableSetting.betUnit;
          tableJs.bet["unit" + seat] = playerBetUnit;
          tableJs.bet["realTimeUnit" + seat] = playerBetUnit;
          tableJs.effectOfBetValue(seat, betUnit);
          var chipNodes = chipsJs.getChipNodes(playerBetUnit);
          chipNodes.forEach(function(node) {
            node.removeComponent(cc.BlockInputEvents);
            node.removeComponent(cc.Button);
            tableJs.root["$bet"]["$" + seat]["zone"].addChild(node);
          });
          obj.rows.forEach(function(rowData, rowI) {
            rowData.cards.forEach(function(card, i) {
              seatI === serverFocus.seat && rowI > serverFocus.row ? i < 1 && tableJs.getCardsScript().addCardToSeatRow(card, seat, "row" + rowI, false) : tableJs.getCardsScript().addCardToSeatRow(card, seat, "row" + rowI, false);
            });
            seatI === serverFocus.seat && rowI > serverFocus.row || cardsJs.setValue(seat, "row" + rowI, {
              hard: rowData.values.hard,
              soft: rowData.values.soft
            });
            var fb = rowData.freeBet;
            while (fb > 0) {
              tableJs.addFreeChipToSeat(seat);
              fb -= betUnit;
            }
          });
          cardsJs.updateValuePosition(seat, false, false);
          obj.rows.forEach(function(rowData, rowI) {
            cardsJs.showValue(seat, "row" + rowI, true, rowData.values.blackjack);
            "busted" === rowData.status && cardsJs.setValueStatus(seat, "row" + rowI, FreeBetBJTableInfo_1.ValueType.BUSTED);
          });
        });
        dealerJs.addCardToSeatRow(data.dealerCards[0]);
        dealerJs.addCardToSeatRow(52);
        var serverSeat = this.getSeatByServerSeatIndex(data.seats[serverFocus.seat].seatIndex);
        cardsJs.focus(serverSeat, "row" + serverFocus.row);
        var curRowNode = cardsJs.root["$" + serverSeat]["row0"];
        var newRowNode = cardsJs.root["$" + serverSeat]["row" + serverFocus.row];
        var z = curRowNode.zIndex;
        curRowNode.zIndex = newRowNode.zIndex;
        newRowNode.zIndex = z;
        var x = curRowNode.x;
        curRowNode.x = newRowNode.x;
        newRowNode.x = x;
        var y = curRowNode.y;
        curRowNode.y = newRowNode.y;
        newRowNode.y = y;
        chips.destroy();
        tween(this.node).delay(1).call(function() {
          var actions = data.seats[serverFocus.seat].rows[serverFocus.row].actions;
          var keys = Object.keys(actions);
          keys.forEach(function(key) {
            var button = _this.getGameButtonByServerAction(key);
            buttonsJs.enableButtonClick(button, actions[key]);
            buttonsJs.showButton(button, actions[key]);
          });
        }).start();
      };
      FreeBetEventHandler.prototype.getSeatByServerSeatIndex = function(index) {
        switch (index) {
         case 0:
          return "A";

         case 1:
          return "B";

         case 2:
          return "C";

         default:
          return "";
        }
      };
      FreeBetEventHandler.prototype.getServerSeatIndexBySeat = function(seat) {
        switch (seat) {
         case "A":
          return 0;

         case "B":
          return 1;

         case "C":
          return 2;

         default:
          return -1;
        }
      };
      FreeBetEventHandler.prototype.getSeatByServerFocus = function(serverFocus, serverSeats) {
        return this.getSeatByServerSeatIndex(serverSeats[serverFocus].seatIndex);
      };
      FreeBetEventHandler.prototype.getServerRowByRow = function(row) {
        switch (row) {
         case "row0":
         case "row1":
         case "row2":
         case "row3":
          return parseInt(row.charAt(row.length - 1));

         default:
          return -1;
        }
      };
      FreeBetEventHandler.prototype.getServerSeatsIndexBySeat = function(seat, serverSeats) {
        var _this = this;
        var index = -1;
        serverSeats.forEach(function(data, i) {
          seat === _this.getSeatByServerSeatIndex(data.seatIndex) && (index = i);
        });
        return index;
      };
      FreeBetEventHandler.prototype.getCardValue = function(cards) {
        var hard = 0;
        var hasA = false;
        var has10 = false;
        for (var i = 0; i < cards.length; i++) {
          var pip = cards[i] % 13;
          if (pip >= 1 && pip <= 8) hard += pip + 1; else if (pip >= 9) {
            hard += 10;
            has10 = true;
          } else if (0 == pip) {
            hard += 1;
            hasA = true;
          }
        }
        var soft = hasA ? hard + 10 : 0;
        return {
          hard: hard,
          soft: soft,
          blackjack: 11 == hard && hasA && has10
        };
      };
      FreeBetEventHandler.prototype.getNextFocusingByFocusing = function(focusing, serverSeats) {
        var _this = this;
        var newFocusing = {
          seat: "",
          row: ""
        };
        var structureSeats = [];
        var structureSeatsMax = [];
        serverSeats.forEach(function(seat) {
          var key = _this.getSeatByServerSeatIndex(seat.seatIndex);
          structureSeats.push(key);
          structureSeatsMax.push(seat.rows.length);
        });
        var serverRow = this.getServerRowByRow(focusing.row);
        for (var i = 0; i < structureSeats.length; i++) if (structureSeats[i] === focusing.seat) {
          if (serverRow + 1 === structureSeatsMax[i]) {
            if (i + 1 < structureSeats.length) {
              newFocusing.seat = structureSeats[i + 1];
              newFocusing.row = "row0";
            }
            break;
          }
          newFocusing.seat = focusing.seat;
          newFocusing.row = "row" + (serverRow + 1);
          break;
        }
        return newFocusing;
      };
      FreeBetEventHandler.prototype.getValueTypeByServerResult = function(status) {
        switch (status) {
         case "win":
          return FreeBetBJTableInfo_1.ValueType.WIN;

         case "lose":
          return FreeBetBJTableInfo_1.ValueType.LOSE;

         case "push":
          return FreeBetBJTableInfo_1.ValueType.PUSH;

         case "none":
          return FreeBetBJTableInfo_1.ValueType.NONE;
        }
      };
      FreeBetEventHandler.prototype.getGameButtonByServerAction = function(action) {
        switch (action) {
         case "hit":
          return FreeBetBJTableInfo_1.GameButton.HIT;

         case "stand":
          return FreeBetBJTableInfo_1.GameButton.STAND;

         case "split":
          return FreeBetBJTableInfo_1.GameButton.SPLIT;

         case "double":
          return FreeBetBJTableInfo_1.GameButton.DOUBLE;

         case "free_split":
          return FreeBetBJTableInfo_1.GameButton.FREESPLIT;

         case "free_double":
          return FreeBetBJTableInfo_1.GameButton.FREEDOUBLE;
        }
      };
      FreeBetEventHandler = __decorate([ ccclass ], FreeBetEventHandler);
      return FreeBetEventHandler;
    }(cc.Component);
    exports.default = FreeBetEventHandler;
    cc._RF.pop();
  }, {
    "./lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3501naviZCM6ps+Mfpidi6", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJContent_1 = require("./lib/FreeBetBJContent");
    var CocosUtils_1 = require("./lib/CocosUtils");
    var FreeBetBJ_1 = require("./lib/FreeBetBJ");
    var FreeBetBJTableInfo_1 = require("./lib/FreeBetBJTableInfo");
    var Audio_1 = require("./lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Game.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Game.prototype.onLoad = function() {
        this.init();
      };
      Game.prototype.start = function() {
        var _this = this;
        Audio_1.audio.playMusic(FreeBetBJContent_1.music.bg);
        FreeBetBJ_1.freeBetBJ.checkAlive().catch(function(err) {
          CocosUtils_1.default.error(err);
          _this.setToolTipsMessage(err);
        }).then(function(res) {
          if (!res) return;
          _this.setToolTipsMessage("Preparing Table...");
          FreeBetBJ_1.freeBetBJ.getTableStatus().catch(function(err) {
            CocosUtils_1.default.error(err);
            _this.setToolTipsMessage(err);
          }).then(function(res) {
            if (!res) return;
            FreeBetBJTableInfo_1.tableSetting.tableID = res["tableID"];
            FreeBetBJTableInfo_1.tableSetting.betUnit = res["betUnit"];
            FreeBetBJTableInfo_1.tableSetting.maxBet = res["maxBet"];
            FreeBetBJTableInfo_1.tableSetting.minBet = res["minBet"];
            var table = cc.instantiate(FreeBetBJContent_1.prefabs.FreeBetBJTAble);
            _this.root["ui"].addChild(table);
          });
        });
      };
      Game.prototype.setToolTipsMessage = function(message) {
        this.root["$ui"]["$toolTips"]["#tip"]["label"].string = message;
      };
      Game.prototype.showToolTipsMessage = function(show) {
        this.root["$ui"]["toolTips"].active = show;
      };
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./lib/Audio": "Audio",
    "./lib/CocosUtils": "CocosUtils",
    "./lib/FreeBetBJ": "FreeBetBJ",
    "./lib/FreeBetBJContent": "FreeBetBJContent",
    "./lib/FreeBetBJTableInfo": "FreeBetBJTableInfo"
  } ],
  I18N: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f63babv6RdHEY85ueX6/DLh", "I18N");
    cc._RF.pop();
  }, {} ],
  Input: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "72bb692mCBJ7YTqmDg1iYHz", "Input");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Input = function(_super) {
      __extends(Input, _super);
      function Input() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.nonActiveColor = cc.Color.WHITE;
        _this.activeColor = new cc.Color(255, 65, 65);
        _this.text = "";
        return _this;
      }
      Input.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Input.prototype.isEmpty = function() {
        return 0 === this.text.length;
      };
      Input.prototype.setText = function(text) {
        this.text = text.charAt(0);
        this.root["#title"]["label"].string = text;
      };
      Input.prototype.setActive = function(active) {
        this.node.color = active ? this.activeColor : this.nonActiveColor;
      };
      Input = __decorate([ ccclass ], Input);
      return Input;
    }(cc.Component);
    exports.default = Input;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils"
  } ],
  Key: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ecfc3dGUahD15tx06LO/RIM", "Key");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Key = function(_super) {
      __extends(Key, _super);
      function Key() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.onClick = null;
        _this.text = "";
        return _this;
      }
      Key.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Key.prototype.onKeyClick = function() {
        "function" === typeof this.onClick && this.onClick(this.text);
      };
      Key.prototype.setText = function(text) {
        this.text = text;
        this.root["#title"]["label"].string = text;
      };
      Key = __decorate([ ccclass ], Key);
      return Key;
    }(cc.Component);
    exports.default = Key;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7155dPJP8VJ14fPbIbdq2wk", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("./lib/CocosUtils");
    var FreeBetBJContent_1 = require("./lib/FreeBetBJContent");
    var tween = cc.tween;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.progressCount = 7;
        _this.progressNow = 0;
        return _this;
      }
      Loading.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Loading.prototype.onLoad = function() {
        FreeBetBJContent_1.fixVisible(this.node);
        this.init();
      };
      Loading.prototype.start = function() {
        this.effectOfLoading();
        this.preLoadResources();
      };
      Loading.prototype.preLoadResources = function() {
        var _this = this;
        cc.loader.loadRes("prefab/Alert", cc.Prefab, this.progressing.bind(this), function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.prefabs.Alert = prefab;
            FreeBetBJContent_1.getAlert(function() {
              _this.addProgress();
            });
          }
        });
        cc.loader.loadRes("prefab/Popup", cc.Prefab, this.progressing.bind(this), function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.prefabs.Popup = prefab;
            FreeBetBJContent_1.getPopup(function() {
              _this.addProgress();
            });
          }
        });
        cc.loader.loadRes("atlas/cards", cc.SpriteAtlas, this.progressing.bind(this), function(err, spriteAtlas) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.atlas.cards = spriteAtlas;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("atlas/chips", cc.SpriteAtlas, this.progressing.bind(this), function(err, spriteAtlas) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.atlas.chips = spriteAtlas;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("prefab/Chip", cc.Prefab, this.progressing.bind(this), function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.prefabs.Chip = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("prefab/FreeBetBJTable", cc.Prefab, this.progressing.bind(this), function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            FreeBetBJContent_1.prefabs.FreeBetBJTAble = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadResDir("music", cc.AudioClip, function(complete, total, item) {
          var progressBar = _this.root["$ui"]["detailProgressBar"].getComponent(cc.ProgressBar);
          progressBar.progress = (complete / total).toFixed(2) - 0;
        }, function(err, clip) {
          err ? CocosUtils_1.default.error(err) : clip.forEach(function(c) {
            FreeBetBJContent_1.music[c.name] = c;
          });
          _this.addProgress();
        });
      };
      Loading.prototype.preLoadScene = function() {
        cc.director.preloadScene("Game", function() {
          CocosUtils_1.default.log("preload Game scene finished.");
        });
      };
      Loading.prototype.addProgress = function() {
        var _this = this;
        this.progressNow++;
        var progressBar = this.root["$ui"]["progressBar"].getComponent(cc.ProgressBar);
        progressBar.progress = this.progressNow / this.progressCount;
        this.progressNow === this.progressCount && cc.director.preloadScene("Game", null, function() {
          _this.effectOfLoading(true);
          cc.director.loadScene("Game");
        });
      };
      Loading.prototype.progressing = function(complete, total) {
        var progressBar = this.root["$ui"]["detailProgressBar"].getComponent(cc.ProgressBar);
        progressBar.progress = (complete / total).toFixed(2) - 0;
      };
      Loading.prototype.effectOfLoading = function(stop) {
        void 0 === stop && (stop = false);
        var frame1 = this.root["$ui"]["$logo"]["1"];
        var frame2 = this.root["$ui"]["$logo"]["2"];
        if (stop) {
          frame1.stopAllActions();
          frame2.stopAllActions();
          frame1.angle = frame2.angle = 0;
        } else {
          tween(frame1).repeatForever(tween(frame1).to(10, {
            angle: 360
          }).call(function() {
            frame1.angle = 0;
          })).start();
          tween(frame2).repeatForever(tween(frame2).to(10, {
            angle: -360
          }).call(function() {
            frame2.angle = 0;
          })).start();
        }
      };
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "./lib/CocosUtils": "CocosUtils",
    "./lib/FreeBetBJContent": "FreeBetBJContent"
  } ],
  MenuItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "92d6cTm5FZB9IhRJVTFqIsH", "MenuItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  Menu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6085fL6bIhH1KxmOgXRSFKR", "Menu");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var Audio_1 = require("../../lib/Audio");
    var tween = cc.tween;
    var FreeBetBJSetting_1 = require("../../lib/FreeBetBJSetting");
    var FreeBetBJText_1 = require("../../lib/FreeBetBJText");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Menu = function(_super) {
      __extends(Menu, _super);
      function Menu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.menuBtn = null;
        _this.cancelBtn = null;
        _this.Setting = null;
        _this.show = false;
        _this.table = null;
        return _this;
      }
      Menu.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Menu.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        if ("EN" === lang) {
          this.root["$content"]["$setting"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.EN.Menu.Setting;
          this.root["$content"]["$gameRule"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.EN.Menu.GameRule;
        } else if ("CN" === lang) {
          this.root["$content"]["$setting"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.CN.Menu.Setting;
          this.root["$content"]["$gameRule"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.CN.Menu.GameRule;
        }
      };
      Menu.prototype.start = function() {
        this.language();
      };
      Menu.prototype.onMenuClick = function() {
        var target = this.root["content"];
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        var showing = target.active;
        if (showing) {
          this.root["#bg"]["sprite"].spriteFrame = this.menuBtn;
          target.active = true;
          target.children.forEach(function(item, i) {
            tween(item).to(.1, {
              y: 0
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.sineOut)).start();
          });
          tween(target).delay(.1).call(function() {
            target.active = false;
          }).start();
        } else {
          this.root["#bg"]["sprite"].spriteFrame = this.cancelBtn;
          var startY_1 = 100;
          var margin_1 = 70;
          target.active = true;
          target.children.forEach(function(item, i) {
            tween(item).to(.2, {
              y: startY_1 + margin_1 * i
            }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).start();
          });
          tween(target).delay(.25).start();
        }
      };
      Menu.prototype.onSettingClick = function(evt) {
        var setting = cc.instantiate(this.Setting);
        setting.zIndex = FreeBetBJContent_1.zOrder.zIndex_MAX;
        this.table.node.addChild(setting);
      };
      Menu.prototype.onGameRuleClick = function(evt) {
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        "EN" === FreeBetBJSetting_1.freeBetBJSetting.language ? window.open(FreeBetBJContent_1.globalConstant.gameRuleUrl) : "CN" === FreeBetBJSetting_1.freeBetBJSetting.language && window.open(FreeBetBJContent_1.globalConstant.gameRuleUrlCN);
      };
      __decorate([ property(cc.SpriteFrame) ], Menu.prototype, "menuBtn", void 0);
      __decorate([ property(cc.SpriteFrame) ], Menu.prototype, "cancelBtn", void 0);
      __decorate([ property(cc.Prefab) ], Menu.prototype, "Setting", void 0);
      Menu = __decorate([ ccclass ], Menu);
      return Menu;
    }(cc.Component);
    exports.default = Menu;
    cc._RF.pop();
  }, {
    "../../lib/Audio": "Audio",
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJContent": "FreeBetBJContent",
    "../../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../../lib/FreeBetBJText": "FreeBetBJText"
  } ],
  Popup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "86f72bwmcdBLJll1xk2snsB", "Popup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJText_1 = require("../../lib/FreeBetBJText");
    var FreeBetBJSetting_1 = require("../../lib/FreeBetBJSetting");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Popup = function(_super) {
      __extends(Popup, _super);
      function Popup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Input = null;
        _this.Key = null;
        _this.Cap = null;
        _this.Delete = null;
        _this.hasInput = false;
        _this.yesCallback = null;
        _this.isPoping = false;
        return _this;
      }
      Popup.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Popup.prototype.start = function() {
        this.language();
      };
      Popup.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        this.root["$pop"]["$buttons"]["$yes"]["#title"]["label"].string = FreeBetBJText_1.freeBetBJText[lang]["Pop"]["Yes"];
        this.root["$pop"]["$buttons"]["$no"]["#title"]["label"].string = FreeBetBJText_1.freeBetBJText[lang]["Pop"]["No"];
        this.root["$pop"]["$buttons"]["$ok"]["#title"]["label"].string = FreeBetBJText_1.freeBetBJText[lang]["Pop"]["Ok"];
      };
      Popup.prototype.initKeyBoard = function() {
        var _this = this;
        var keys = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];
        keys.forEach(function(item) {
          var key = cc.instantiate(_this.Key);
          var keyJs = key.getComponent("Key");
          keyJs.init();
          keyJs.setText(item);
          keyJs.onClick = function(text) {
            _this.onKeyboardClick(text);
          };
          _this.addKey(key);
        });
        var del = cc.instantiate(this.Delete);
        var deleteJS = del.getComponent("Delete");
        deleteJS.init();
        deleteJS.onClick = function() {
          _this.onDeleteClick();
        };
        this.addKey(del);
        var cap = cc.instantiate(this.Cap);
        var capJS = cap.getComponent("Cap");
        capJS.init();
        capJS.onClick = function(active) {
          _this.onCapClick(active);
        };
        this.addKey(cap);
      };
      Popup.prototype.showMessage = function(message) {
        this.root["$pop"]["#message"]["label"].string = message;
        this.showInput(false);
        this.showOk(true);
        this.showYes(false);
        this.showNo(false);
        this.showInput(false);
        this.showKeyboard(false);
        this.node.active = true;
        this.popIn();
      };
      Popup.prototype.showOption = function(message, callback, showInput, inputCount) {
        void 0 === inputCount && (inputCount = 0);
        this.root["$pop"]["#message"]["label"].string = message;
        this.hasInput = showInput;
        this.yesCallback = callback;
        this.showOk(false);
        this.showYes(true);
        this.showNo(true);
        this.showInput(showInput);
        this.showKeyboard(showInput);
        this.node.active = true;
        for (var i = 0; i < inputCount; i++) this.addInput();
        showInput && this.updateInputStatus();
        this.popIn();
      };
      Popup.prototype.onOkClick = function() {
        if (this.isPoping) return;
        this.popOut();
      };
      Popup.prototype.onNoClick = function() {
        if (this.isPoping) return;
        this.popOut();
      };
      Popup.prototype.onYesClick = function() {
        if (this.isPoping) return;
        this.hasInput ? this.yesCallback(this.getInputString()) : this.yesCallback();
        this.popOut();
      };
      Popup.prototype.onBgClick = function() {};
      Popup.prototype.getInputString = function() {
        var str = "";
        var inputs = this.root["$pop"]["inputs"].children;
        inputs.forEach(function(item) {
          str += item.getComponent("Input").text;
        });
        return str;
      };
      Popup.prototype.showOk = function(show) {
        this.root["$pop"]["$buttons"]["ok"].active = show;
      };
      Popup.prototype.showYes = function(show) {
        this.root["$pop"]["$buttons"]["yes"].active = show;
      };
      Popup.prototype.showNo = function(show) {
        this.root["$pop"]["$buttons"]["no"].active = show;
      };
      Popup.prototype.showInput = function(show) {
        this.root["$pop"]["inputs"].active = show;
      };
      Popup.prototype.popIn = function() {
        var _this = this;
        this.language();
        this.isPoping = true;
        var bigger = cc.scaleTo(.25, 1, 1).easing(cc.easeBackOut());
        var pop = this.root["pop"];
        pop.scaleX = pop.scaleY = .2;
        pop.runAction(cc.sequence(bigger, cc.callFunc(function() {
          _this.isPoping = false;
        })));
      };
      Popup.prototype.popOut = function() {
        var _this = this;
        this.isPoping = true;
        var smaller = cc.scaleTo(.25, .2, .2).easing(cc.easeBackIn());
        var pop = this.root["pop"];
        pop.scaleX = pop.scaleY = 1;
        pop.runAction(cc.sequence(smaller, cc.callFunc(function() {
          _this.removeInputs();
          _this.isPoping = false;
          _this.node.active = false;
        })));
      };
      Popup.prototype.removeInputs = function() {
        this.root["$pop"]["inputs"].removeAllChildren(true);
      };
      Popup.prototype.addInput = function() {
        var input = cc.instantiate(this.Input);
        var inputJs = input.getComponent("Input");
        inputJs.init();
        this.root["$pop"]["inputs"].addChild(input);
      };
      Popup.prototype.getFirstEmptyInput = function() {
        var inputs = this.root["$pop"]["inputs"].children;
        var input = null;
        inputs.forEach(function(item) {
          var js = item.getComponent("Input");
          null === input && js.isEmpty() && (input = item);
        });
        return input;
      };
      Popup.prototype.getLastInput = function() {
        var inputs = this.root["$pop"]["inputs"].children;
        return inputs[inputs.length - 1];
      };
      Popup.prototype.updateInputStatus = function() {
        var inputs = this.root["$pop"]["inputs"].children;
        inputs.forEach(function(item) {
          var js = item.getComponent("Input");
          js.setActive(false);
        });
        var input = this.getFirstEmptyInput();
        null === input && (input = this.getLastInput());
        var js = input.getComponent("Input");
        js.setActive(true);
      };
      Popup.prototype.addKey = function(key) {
        this.root["keyboard"].addChild(key);
      };
      Popup.prototype.getKeys = function() {
        return this.root["keyboard"].children;
      };
      Popup.prototype.showKeyboard = function(show) {
        this.root["keyboard"].active = show;
      };
      Popup.prototype.onKeyboardClick = function(text) {
        var n = this.getFirstEmptyInput();
        null === n && (n = this.getLastInput());
        var nJs = n.getComponent("Input");
        nJs.setText(text);
        this.updateInputStatus();
      };
      Popup.prototype.onCapClick = function(active) {
        var keys = this.getKeys();
        keys.forEach(function(item) {
          var js = item.getComponent("Key");
          if (null !== js) {
            var label = js["root"]["#title"]["label"];
            active ? js.setText(label.string.toUpperCase()) : js.setText(label.string.toLowerCase());
          }
        });
      };
      Popup.prototype.onDeleteClick = function() {
        var input = this.getLastNonEmptyInput();
        if (null === input) return;
        var inputJs = input.getComponent("Input");
        inputJs.setText("");
        this.updateInputStatus();
      };
      Popup.prototype.getLastNonEmptyInput = function() {
        var inputs = this.root["$pop"]["inputs"].children;
        var input = null;
        inputs.forEach(function(item) {
          var js = item.getComponent("Input");
          "" !== js.text && (input = item);
        });
        return input;
      };
      __decorate([ property(cc.Prefab) ], Popup.prototype, "Input", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "Key", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "Cap", void 0);
      __decorate([ property(cc.Prefab) ], Popup.prototype, "Delete", void 0);
      Popup = __decorate([ ccclass ], Popup);
      return Popup;
    }(cc.Component);
    exports.default = Popup;
    cc._RF.pop();
  }, {
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../../lib/FreeBetBJText": "FreeBetBJText"
  } ],
  Recharge: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a753hRjUxHUrYcIkNFbmDZ", "Recharge");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJSetting_1 = require("../../lib/FreeBetBJSetting");
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var Audio_1 = require("../../lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Recharge = function(_super) {
      __extends(Recharge, _super);
      function Recharge() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.title = null;
        _this.titleCN = null;
        _this.msg = null;
        _this.msgCN = null;
        _this.buy = null;
        _this.buyCN = null;
        return _this;
      }
      Recharge.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Recharge.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        if ("EN" === lang) {
          this.root["$content"]["#title"]["sprite"].spriteFrame = this.title;
          this.root["$content"]["#msg"]["sprite"].spriteFrame = this.msg;
          this.root["$content"]["#buy"]["button"].normalSprite = this.buy;
          this.root["$content"]["$buy"]["#Background"]["sprite"].spriteFrame = this.buy;
        } else if ("CN" === lang) {
          this.root["$content"]["#title"]["sprite"].spriteFrame = this.titleCN;
          this.root["$content"]["#msg"]["sprite"].spriteFrame = this.msgCN;
          this.root["$content"]["#buy"]["button"].normalSprite = this.buyCN;
          this.root["$content"]["$buy"]["#Background"]["sprite"].spriteFrame = this.buyCN;
        }
      };
      Recharge.prototype.start = function() {
        this.init();
        this.language();
        this.effectOfShow();
      };
      Recharge.prototype.effectOfShow = function() {
        var target = this.root["content"];
        target.scaleX = target.scaleY = .1;
        target.active = true;
        cc.tween(target).to(.25, {
          scaleX: 1,
          scaleY: 1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).start();
      };
      Recharge.prototype.onCloseClick = function() {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.node.destroy();
      };
      Recharge.prototype.onBuyClick = function(evt) {
        var target = evt.target;
        if (target.getNumberOfRunningActions() > 0) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        window.open(FreeBetBJContent_1.globalConstant.buyUrl);
      };
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "title", void 0);
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "titleCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "msg", void 0);
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "msgCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "buy", void 0);
      __decorate([ property(cc.SpriteFrame) ], Recharge.prototype, "buyCN", void 0);
      Recharge = __decorate([ ccclass ], Recharge);
      return Recharge;
    }(cc.Component);
    exports.default = Recharge;
    cc._RF.pop();
  }, {
    "../../lib/Audio": "Audio",
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJContent": "FreeBetBJContent",
    "../../lib/FreeBetBJSetting": "FreeBetBJSetting"
  } ],
  Setting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a3c10k1U7tAlL+lfDLa7NDj", "Setting");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FreeBetBJSetting_1 = require("../../lib/FreeBetBJSetting");
    var FreeBetBJText_1 = require("../../lib/FreeBetBJText");
    var CocosUtils_1 = require("../../lib/CocosUtils");
    var FreeBetBJContent_1 = require("../../lib/FreeBetBJContent");
    var Audio_1 = require("../../lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Setting = function(_super) {
      __extends(Setting, _super);
      function Setting() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.on = null;
        _this.off = null;
        _this.onCN = null;
        _this.offCN = null;
        _this.title = null;
        _this.titleCN = null;
        _this.music = null;
        _this.musicCN = null;
        _this.sound = null;
        _this.soundCN = null;
        _this.lang = null;
        _this.langCN = null;
        _this.fillRect = null;
        _this.musicON = true;
        _this.soundON = true;
        _this.i18n = "EN";
        return _this;
      }
      Setting.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Setting.prototype.language = function() {
        var lang = FreeBetBJSetting_1.freeBetBJSetting.language;
        if ("EN" === lang) {
          this.root["$content"]["#title"]["sprite"].spriteFrame = this.title;
          this.root["$content"]["#sound"]["sprite"].spriteFrame = this.sound;
          if (this.soundON) {
            this.root["$content"]["$sound"]["$switch"]["#Background"]["sprite"].spriteFrame = this.on;
            this.root["$content"]["$sound"]["#switch"]["button"].normalSprite = this.on;
          } else {
            this.root["$content"]["$sound"]["$switch"]["#Background"]["sprite"].spriteFrame = this.off;
            this.root["$content"]["$sound"]["#switch"]["button"].normalSprite = this.off;
          }
          this.root["$content"]["#music"]["sprite"].spriteFrame = this.music;
          if (this.musicON) {
            this.root["$content"]["$music"]["$switch"]["#Background"]["sprite"].spriteFrame = this.on;
            this.root["$content"]["$music"]["#switch"]["button"].normalSprite = this.on;
          } else {
            this.root["$content"]["$music"]["$switch"]["#Background"]["sprite"].spriteFrame = this.off;
            this.root["$content"]["$music"]["#switch"]["button"].normalSprite = this.off;
          }
          this.root["$content"]["#language"]["sprite"].spriteFrame = this.lang;
          this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.EN.Setting.EN;
          this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.EN.Setting.CN;
          this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#active"]["sprite"].spriteFrame = this.fillRect;
          this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#active"]["sprite"].spriteFrame = null;
        } else if ("CN" === lang) {
          this.root["$content"]["#title"]["sprite"].spriteFrame = this.titleCN;
          this.root["$content"]["#sound"]["sprite"].spriteFrame = this.soundCN;
          if (this.soundON) {
            this.root["$content"]["$sound"]["$switch"]["#Background"]["sprite"].spriteFrame = this.onCN;
            this.root["$content"]["$sound"]["#switch"]["button"].normalSprite = this.onCN;
          } else {
            this.root["$content"]["$sound"]["$switch"]["#Background"]["sprite"].spriteFrame = this.offCN;
            this.root["$content"]["$sound"]["#switch"]["button"].normalSprite = this.offCN;
          }
          this.root["$content"]["#music"]["sprite"].spriteFrame = this.musicCN;
          if (this.musicON) {
            this.root["$content"]["$music"]["$switch"]["#Background"]["sprite"].spriteFrame = this.onCN;
            this.root["$content"]["$music"]["#switch"]["button"].normalSprite = this.onCN;
          } else {
            this.root["$content"]["$music"]["$switch"]["#Background"]["sprite"].spriteFrame = this.offCN;
            this.root["$content"]["$music"]["#switch"]["button"].normalSprite = this.offCN;
          }
          this.root["$content"]["#language"]["sprite"].spriteFrame = this.langCN;
          this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.CN.Setting.EN;
          this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#Label"]["label"].string = FreeBetBJText_1.freeBetBJText.CN.Setting.CN;
          this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#active"]["sprite"].spriteFrame = null;
          this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#active"]["sprite"].spriteFrame = this.fillRect;
        }
      };
      Setting.prototype.start = function() {
        this.init();
        this.language();
        this.effectOfShow();
      };
      Setting.prototype.onCloseClick = function() {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.node.destroy();
      };
      Setting.prototype.effectOfShow = function() {
        var target = this.root["content"];
        target.scaleX = target.scaleY = .1;
        target.active = true;
        cc.tween(target).to(.25, {
          scaleX: 1,
          scaleY: 1
        }, FreeBetBJContent_1.getEaseObject(FreeBetBJContent_1.Easing.backOut)).start();
      };
      Setting.prototype.onSoundClick = function() {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.soundON = !this.soundON;
        Audio_1.audio.setEffectVolume(this.soundON);
        this.language();
      };
      Setting.prototype.onMusicClick = function() {
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        this.musicON = !this.musicON;
        Audio_1.audio.setMusicVolume(this.musicON);
        this.language();
      };
      Setting.prototype.onCNClick = function() {
        if ("CN" === FreeBetBJSetting_1.freeBetBJSetting.language) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        FreeBetBJSetting_1.freeBetBJSetting.changeLanguage("CN");
        this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#active"]["sprite"].spriteFrame = null;
        this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#active"]["sprite"].spriteFrame = this.fillRect;
      };
      Setting.prototype.onENClick = function() {
        if ("EN" === FreeBetBJSetting_1.freeBetBJSetting.language) return;
        Audio_1.audio.playEffect(FreeBetBJContent_1.music.press);
        FreeBetBJSetting_1.freeBetBJSetting.changeLanguage("EN");
        this.root["$content"]["$language"]["$switch"]["$EN"]["$Background"]["#active"]["sprite"].spriteFrame = this.fillRect;
        this.root["$content"]["$language"]["$switch"]["$CN"]["$Background"]["#active"]["sprite"].spriteFrame = null;
      };
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "on", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "off", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "onCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "offCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "title", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "titleCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "music", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "musicCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "sound", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "soundCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "lang", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "langCN", void 0);
      __decorate([ property(cc.SpriteFrame) ], Setting.prototype, "fillRect", void 0);
      Setting = __decorate([ ccclass ], Setting);
      return Setting;
    }(cc.Component);
    exports.default = Setting;
    cc._RF.pop();
  }, {
    "../../lib/Audio": "Audio",
    "../../lib/CocosUtils": "CocosUtils",
    "../../lib/FreeBetBJContent": "FreeBetBJContent",
    "../../lib/FreeBetBJSetting": "FreeBetBJSetting",
    "../../lib/FreeBetBJText": "FreeBetBJText"
  } ],
  Tree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "13872Bu/GlPvYXBTDFPl67A", "Tree");
    cc._RF.pop();
  }, {} ]
}, {}, [ "FreeBetEventHandler", "Game", "Loading", "Alias", "I18N", "Tree", "Audio", "CocosUtils", "FreeBetBJ", "FreeBetBJContent", "FreeBetBJSetting", "FreeBetBJTableInfo", "FreeBetBJText", "Alert", "Balance", "BetValue", "BlackJack", "Buttons", "Cards", "Chip", "Chips", "Dealer", "FreeBetBJTable", "Menu", "MenuItem", "Cap", "Delete", "Input", "Key", "Popup", "Recharge", "Setting" ]);