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
    cc._RF.push(module, "c3c2eQ/dyNEJL+RfoFtoFZN", "Alias");
    cc._RF.pop();
  }, {} ],
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ce7ddWtm79PGIZCy+ncoHAS", "Audio");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Audio = function() {
      function Audio(volume) {
        this.volume = 1;
        this.setVolume(volume);
      }
      Audio.prototype.setVolume = function(volume) {
        this.volume = volume;
        cc.audioEngine.setMusicVolume(volume);
      };
      Audio.prototype.playMusic = function(clip) {
        cc.audioEngine.playMusic(clip, true);
      };
      Audio.prototype.stopMusic = function() {
        cc.audioEngine.stopMusic();
      };
      Audio.prototype.playEffect = function(clip) {
        cc.audioEngine.playEffect(clip, false);
      };
      Audio.prototype.stopEffect = function() {
        cc.audioEngine.stopAllEffects();
      };
      return Audio;
    }();
    exports.default = Audio;
    exports.audio = new Audio(.4);
    cc._RF.pop();
  }, {} ],
  Bet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "625b2Ts8MZK25JxzoK4cbtE", "Bet");
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
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowTableInfo_1 = require("../lib/PaiGowTableInfo");
    var PaiGowPoker2_1 = require("../lib/PaiGowPoker2");
    var PaiGowMessage_1 = require("../lib/PaiGowMessage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bet = function(_super) {
      __extends(Bet, _super);
      function Bet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.chips = null;
        _this.nonActiveColor = new cc.Color(133, 133, 133);
        _this.activeColor = new cc.Color(255, 255, 255);
        _this.table = null;
        _this.aceHighBetValue = 0;
        _this.fortuneBetValue = 0;
        _this.mainBetValue = 0;
        _this.aceHighBetRealTimeValue = 0;
        _this.fortuneBetRealTimeValue = 0;
        _this.mainBetRealTimeValue = 0;
        _this.aceHighBetMax = 0;
        _this.aceHighBetMin = 0;
        _this.fortuneBetMax = 0;
        _this.fortuneBetMin = 0;
        _this.mainBetMax = 0;
        _this.mainBetMin = 0;
        return _this;
      }
      Bet.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Bet.prototype.start = function() {
        this.setLimitValue(PaiGowTableInfo_1.betLimit.mainBetMax, PaiGowTableInfo_1.betLimit.mainBetMin, PaiGowTableInfo_1.betLimit.aceHighBetMax, PaiGowTableInfo_1.betLimit.aceHighBetMin, PaiGowTableInfo_1.betLimit.fortuneBetMax, PaiGowTableInfo_1.betLimit.fortuneBetMin);
        this.setMainBetValue(PaiGowTableInfo_1.lastBetValue.mainBet <= PaiGowTableInfo_1.betLimit.mainBetMax ? PaiGowTableInfo_1.lastBetValue.mainBet : PaiGowTableInfo_1.betLimit.mainBetMax);
        this.setAceHighBetValue(PaiGowTableInfo_1.lastBetValue.aceHighBet <= PaiGowTableInfo_1.betLimit.aceHighBetMax ? PaiGowTableInfo_1.lastBetValue.aceHighBet : PaiGowTableInfo_1.betLimit.aceHighBetMax);
        this.setFortuneBetValue(PaiGowTableInfo_1.lastBetValue.fortuneBet <= PaiGowTableInfo_1.betLimit.fortuneBetMax ? PaiGowTableInfo_1.lastBetValue.fortuneBet : PaiGowTableInfo_1.betLimit.fortuneBetMax);
      };
      Bet.prototype.setAceHighBetValue = function(value) {
        this.aceHighBetValue = value;
        this.root["$ui"]["$type"]["$aceHighBet"]["#betValue"]["label"].string = 0 === value ? "" : value + "";
        this.updateZoneChip(this.root["$ui"]["$type"]["$aceHighBet"]["$zone"]["layout"], this.root["$ui"]["$type"]["$aceHighBet"]["chips"].children, value);
        this.updateButtonStatus();
      };
      Bet.prototype.updateAceHighLimitValue = function() {
        var max = this.aceHighBetMax;
        var min = this.aceHighBetMin;
        this.root["$ui"]["$type"]["$aceHighBet"]["$max"]["#value"]["label"].string = max + "";
        this.root["$ui"]["$type"]["$aceHighBet"]["$min"]["#value"]["label"].string = min + "";
        var chips = this.root["$ui"]["$type"]["$aceHighBet"]["chips"].children;
        chips.forEach(function(item) {
          item.active = parseInt(item.name) <= max;
        });
      };
      Bet.prototype.setFortuneBetValue = function(value) {
        this.fortuneBetValue = value;
        this.root["$ui"]["$type"]["$fortuneBet"]["#betValue"]["label"].string = 0 === value ? "" : value + "";
        this.updateZoneChip(this.root["$ui"]["$type"]["$fortuneBet"]["$zone"]["layout"], this.root["$ui"]["$type"]["$fortuneBet"]["chips"].children, value);
        this.updateButtonStatus();
      };
      Bet.prototype.updateFortuneBetLimitValue = function() {
        var max = this.fortuneBetMax;
        var min = this.fortuneBetMin;
        this.root["$ui"]["$type"]["$fortuneBet"]["$max"]["#value"]["label"].string = max + "";
        this.root["$ui"]["$type"]["$fortuneBet"]["$min"]["#value"]["label"].string = min + "";
        var chips = this.root["$ui"]["$type"]["$fortuneBet"]["chips"].children;
        chips.forEach(function(item) {
          item.active = parseInt(item.name) <= max;
        });
      };
      Bet.prototype.setMainBetValue = function(value) {
        this.mainBetValue = value;
        this.root["$ui"]["$type"]["$mainBet"]["#betValue"]["label"].string = 0 === value ? "" : value + "";
        this.updateZoneChip(this.root["$ui"]["$type"]["$mainBet"]["$zone"]["layout"], this.root["$ui"]["$type"]["$mainBet"]["chips"].children, value);
        this.updateButtonStatus();
      };
      Bet.prototype.updateMainBetLimitValue = function() {
        var max = this.mainBetMax;
        var min = this.mainBetMin;
        this.root["$ui"]["$type"]["$mainBet"]["$max"]["#value"]["label"].string = max + "";
        this.root["$ui"]["$type"]["$mainBet"]["$min"]["#value"]["label"].string = min + "";
        var chips = this.root["$ui"]["$type"]["$mainBet"]["chips"].children;
        chips.forEach(function(item) {
          item.active = parseInt(item.name) <= max;
        });
      };
      Bet.prototype.updateLimitValue = function() {
        this.updateAceHighLimitValue();
        this.updateFortuneBetLimitValue();
        this.updateMainBetLimitValue();
        this.updateButtonStatus();
      };
      Bet.prototype.onAceHighBetChipClick = function(e) {
        var _this = this;
        var value = parseInt(e.target["name"]);
        if (this.aceHighBetRealTimeValue >= this.aceHighBetMax) return;
        value + this.aceHighBetRealTimeValue > this.aceHighBetMax ? this.aceHighBetRealTimeValue = this.aceHighBetMax : this.aceHighBetRealTimeValue += value;
        this.moveChip(e.target, this.root["$ui"]["$type"]["$aceHighBet"]["zone"], function() {
          _this.setAceHighBetValue(_this.aceHighBetRealTimeValue);
        });
      };
      Bet.prototype.onFortuneBetChipClick = function(e) {
        var _this = this;
        var value = parseInt(e.target["name"]);
        if (this.fortuneBetRealTimeValue >= this.fortuneBetMax) return;
        value + this.fortuneBetRealTimeValue > this.fortuneBetMax ? this.fortuneBetRealTimeValue = this.fortuneBetMax : this.fortuneBetRealTimeValue += value;
        this.moveChip(e.target, this.root["$ui"]["$type"]["$fortuneBet"]["zone"], function() {
          _this.setFortuneBetValue(_this.fortuneBetRealTimeValue);
        });
      };
      Bet.prototype.onMainBetChipClick = function(e) {
        var _this = this;
        var value = parseInt(e.target["name"]);
        if (this.mainBetRealTimeValue >= this.mainBetMax) return;
        value + this.mainBetRealTimeValue > this.mainBetMax ? this.mainBetRealTimeValue = this.mainBetMax : this.mainBetRealTimeValue += value;
        this.moveChip(e.target, this.root["$ui"]["$type"]["$mainBet"]["zone"], function() {
          _this.setMainBetValue(_this.mainBetRealTimeValue);
        });
      };
      Bet.prototype.onCancelClick = function() {
        this.node.destroy();
      };
      Bet.prototype.onCleanClick = function() {
        this.fortuneBetRealTimeValue = 0;
        this.aceHighBetRealTimeValue = 0;
        this.mainBetRealTimeValue = 0;
        this.setMainBetValue(0);
        this.setFortuneBetValue(0);
        this.setAceHighBetValue(0);
        PaiGowTableInfo_1.lastBetValue.mainBet = 0;
        PaiGowTableInfo_1.lastBetValue.aceHighBet = 0;
        PaiGowTableInfo_1.lastBetValue.fortuneBet = 0;
      };
      Bet.prototype.onDoneClick = function() {
        var _this = this;
        if ("" === PaiGowTableInfo_1.gamerInfo.gamerId) {
          PaiGowContext_1.getAlert().show("Error. No id and bet.");
          return;
        }
        PaiGowPoker2_1.paiGowPoker2.placeBet(PaiGowTableInfo_1.gamerInfo.gamerId, this.mainBetValue, this.aceHighBetValue, this.fortuneBetValue).catch(function(err) {
          PaiGowContext_1.getAlert().show(err);
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          if ("undefined" !== typeof res["mainBetResult"]) if (3 === res["mainBetResult"]) {
            CocosUtils_1.default.log("ace high push");
            _this.table.clearResultEffect();
            _this.table.updateTableCard(null, null, null, null, true);
            _this.table.updateTableCard(null, res["playerCards"], null, null, false);
            _this.table.updateDealer(res["dealerCards"], null);
            _this.table.updateBet(res["mainBet"], res["sideBet"], res["fortuneBet"]);
            _this.table.updateResultEffect(res["mainBet"], res["sideBet"], res["fortuneBet"], res["mainBetWin"], res["sideBetWin"], res["fortuneBetWin"], res["mainBetResult"], res["sideBetResult"], res["fortuneBetResult"]);
            _this.table.showTableButtons(PaiGowTableInfo_1.TABLE_BUTTONS.PLACE_BET);
            _this.table.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.LEAVE, true);
            _this.table.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, true);
            PaiGowTableInfo_1.lastBetValue.mainBet = res["mainBet"];
            PaiGowTableInfo_1.lastBetValue.aceHighBet = res["sideBet"];
            PaiGowTableInfo_1.lastBetValue.fortuneBet = res["fortuneBet"];
            _this.node.destroy();
          } else CocosUtils_1.default.error("BUG!!!!????"); else {
            _this.table.clearResultEffect();
            _this.table.updateTableCard(null, null, null, null, true);
            _this.table.updateHandCard(res["playerCards"]);
            _this.table.updateDealer(res["dealerCards"], res["dealerLowHand"]);
            _this.table.updateBet(res["mainBet"], res["sideBet"], res["fortuneBet"]);
            _this.table.setMessage(PaiGowMessage_1.PaiGowMessage.Tap2Card);
            _this.table.showTableButtons(PaiGowTableInfo_1.TABLE_BUTTONS.SPLIT);
            _this.table.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.HOUSEWAY, true);
            _this.table.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.SPLIT, true);
            _this.node.destroy();
          }
        });
      };
      Bet.prototype.moveChip = function(chip, target, callback) {
        var effect = cc.instantiate(chip);
        var oXy = PaiGowContext_1.getXYUntilNode(chip, this.node);
        effect.x = oXy.x;
        effect.y = oXy.y;
        this.node.addChild(effect);
        var tXy = PaiGowContext_1.getXYUntilNode(target, this.node);
        var actions = cc.sequence(cc.moveTo(.25, tXy.x, tXy.y), cc.callFunc(function() {
          callback();
          effect.destroy();
        }));
        effect.runAction(actions);
      };
      Bet.prototype.updateZoneChip = function(zone, chips, value) {
        zone.removeAllChildren(true);
        var chipQuota = function() {
          var arr = [];
          chips.forEach(function(item) {
            arr.push(parseInt(item.name));
          });
          arr.sort(function(a, b) {
            return b - a;
          });
          return arr;
        }();
        while (value > 0) for (var i = 0; i < chipQuota.length; i++) if (value >= chipQuota[i]) {
          value -= chipQuota[i];
          this.addChipToZone(zone, chipQuota[i]);
          break;
        }
      };
      Bet.prototype.addChipToZone = function(zone, value) {
        var chip = new cc.Node();
        var sprite = chip.addComponent(cc.Sprite);
        sprite.spriteFrame = this.getChipSprite(value + "");
        zone.addChild(chip);
      };
      Bet.prototype.getChipSprite = function(chipName) {
        var sprite = null;
        var sprites = this.chips.getSpriteFrames();
        sprites.forEach(function(item) {
          sprite = item.name === chipName ? item : sprite;
        });
        return sprite;
      };
      Bet.prototype.updateButtonStatus = function() {
        if (this.mainBetValue < this.mainBetMin) {
          this.root["$ui"]["$buttons"]["#done"]["button"].interactable = false;
          this.root["$ui"]["$buttons"]["done"].color = this.nonActiveColor;
          this.root["$ui"]["$buttons"]["$done"]["title"].color = this.nonActiveColor;
        } else {
          this.root["$ui"]["$buttons"]["#done"]["button"].interactable = true;
          this.root["$ui"]["$buttons"]["done"].color = this.activeColor;
          this.root["$ui"]["$buttons"]["$done"]["title"].color = this.activeColor;
        }
        if (this.mainBetValue > 0 || this.aceHighBetValue > 0 || this.fortuneBetValue > 0) {
          this.root["$ui"]["$buttons"]["#clean"]["button"].interactable = true;
          this.root["$ui"]["$buttons"]["clean"].color = this.activeColor;
          this.root["$ui"]["$buttons"]["$clean"]["title"].color = this.activeColor;
        } else {
          this.root["$ui"]["$buttons"]["#clean"]["button"].interactable = false;
          this.root["$ui"]["$buttons"]["clean"].color = this.nonActiveColor;
          this.root["$ui"]["$buttons"]["$clean"]["title"].color = this.nonActiveColor;
        }
      };
      Bet.prototype.setLimitValue = function(mainMax, mainMin, aceHighMax, aceHighMin, fortuneMax, fortuneMin) {
        this.mainBetMax = mainMax;
        this.mainBetMin = mainMin;
        this.aceHighBetMax = aceHighMax;
        this.aceHighBetMin = aceHighMin;
        this.fortuneBetMax = fortuneMax;
        this.fortuneBetMin = fortuneMin;
        this.updateLimitValue();
        this.updateButtonStatus();
      };
      __decorate([ property(cc.SpriteAtlas) ], Bet.prototype, "chips", void 0);
      Bet = __decorate([ ccclass ], Bet);
      return Bet;
    }(cc.Component);
    exports.default = Bet;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowMessage": "PaiGowMessage",
    "../lib/PaiGowPoker2": "PaiGowPoker2",
    "../lib/PaiGowTableInfo": "PaiGowTableInfo"
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
    var CocosUtils_1 = require("../lib/CocosUtils");
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
    "../lib/CocosUtils": "CocosUtils"
  } ],
  Card: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f3964/KGAdI+YPMzj1UmM4u", "Card");
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
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowMessage_1 = require("../lib/PaiGowMessage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Card = function(_super) {
      __extends(Card, _super);
      function Card() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isPicked = false;
        _this.card = null;
        _this.handCard = null;
        _this.enableClick = true;
        return _this;
      }
      Card.prototype.setCard = function(card) {
        this.card = card;
        this.node.getComponent(cc.Sprite).spriteFrame = PaiGowContext_1.getCardSprite(card);
      };
      Card.prototype.onCardClick = function() {
        if (!this.enableClick) return;
        this.toggleIsPicked();
        this.handCard.getPickedCount() === this.handCard.pickLimit ? this.handCard.table.setMessage(PaiGowMessage_1.PaiGowMessage.PleaseSplitCard) : this.handCard.table.setMessage(PaiGowMessage_1.PaiGowMessage.Tap2Card);
      };
      Card.prototype.toggleIsPicked = function() {
        if (this.isPicked) {
          this.node.y -= 20;
          this.isPicked = false;
        } else if (this.handCard.canPicked()) {
          this.node.y += 20;
          this.isPicked = true;
        }
      };
      Card.prototype.pick = function() {
        if (!this.isPicked) {
          this.node.y += 20;
          this.isPicked = true;
        }
      };
      Card.prototype.unPick = function() {
        if (this.isPicked) {
          this.node.y -= 20;
          this.isPicked = false;
        }
      };
      Card = __decorate([ ccclass ], Card);
      return Card;
    }(cc.Component);
    exports.default = Card;
    cc._RF.pop();
  }, {
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowMessage": "PaiGowMessage"
  } ],
  CocosUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96c4aakbbxKC4fqVtwH6cOZ", "CocosUtils");
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
    cc._RF.push(module, "c3671CxIRZFRb8yry1LyjJ8", "Dealer");
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
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowPoker2_1 = require("../lib/PaiGowPoker2");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Dealer = function(_super) {
      __extends(Dealer, _super);
      function Dealer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.round = -1;
        return _this;
      }
      Dealer.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Dealer.prototype.setCards = function(low, high, doFadeOutType) {
        var _this = this;
        void 0 === doFadeOutType && (doFadeOutType = false);
        this.clearCards();
        var lowType = PaiGowPoker2_1.paigowUtils.bitfieldCards(low);
        low = PaiGowPoker2_1.paigowUtils.sortCard(lowType, low);
        var lowTypeName = PaiGowPoker2_1.paigowUtils.typeName(lowType);
        var highType = PaiGowPoker2_1.paigowUtils.bitfieldCards(high);
        high = PaiGowPoker2_1.paigowUtils.sortCard(highType, high);
        var highTypeName = PaiGowPoker2_1.paigowUtils.typeName(highType);
        var lowNodes = PaiGowContext_1.getCardSpriteNodes(low);
        lowNodes.forEach(function(item) {
          _this.root["$low"]["cards"].addChild(item);
        });
        var highNodes = PaiGowContext_1.getCardSpriteNodes(high);
        highNodes.forEach(function(item) {
          _this.root["$high"]["cards"].addChild(item);
        });
        this.root["low"].active = true;
        this.root["high"].active = true;
        doFadeOutType && this.typeFadeOut(lowTypeName, highTypeName);
      };
      Dealer.prototype.setAceHigh = function(aceHigh) {
        var _this = this;
        this.clearCards();
        var aceHighNodes = PaiGowContext_1.getCardSpriteNodes(aceHigh);
        aceHighNodes.forEach(function(item) {
          _this.root["$aceHigh"]["cards"].addChild(item);
        });
        this.root["aceHigh"].active = true;
      };
      Dealer.prototype.clearCards = function() {
        this.root["$low"]["cards"].removeAllChildren(true);
        this.root["$high"]["cards"].removeAllChildren(true);
        this.root["$aceHigh"]["cards"].removeAllChildren(true);
        this.root["low"].active = false;
        this.root["high"].active = false;
        this.root["aceHigh"].active = false;
        this.root["lowType"].active = false;
        this.root["lowType"].stopAllActions();
        this.root["lowType"].opacity = 255;
        this.root["highType"].active = false;
        this.root["highType"].stopAllActions();
        this.root["highType"].opacity = 255;
      };
      Dealer.prototype.typeFadeOut = function(lowTypeName, highTypeName) {
        var _this = this;
        this.root["$lowType"]["#title"]["label"].string = lowTypeName;
        this.root["$highType"]["#title"]["label"].string = highTypeName;
        this.root["lowType"].active = true;
        this.root["highType"].active = true;
        this.root["lowType"].runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(1), cc.callFunc(function() {
          _this.root["lowType"].active = false;
          _this.root["lowType"].opacity = 255;
        })));
        this.root["highType"].runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(1), cc.callFunc(function() {
          _this.root["highType"].active = false;
          _this.root["highType"].opacity = 255;
        })));
      };
      Dealer = __decorate([ ccclass ], Dealer);
      return Dealer;
    }(cc.Component);
    exports.default = Dealer;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowPoker2": "PaiGowPoker2"
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
    var CocosUtils_1 = require("../lib/CocosUtils");
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
    "../lib/CocosUtils": "CocosUtils"
  } ],
  FortuneBetRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ed96fo2PnJCaoHWYtlP0byU", "FortuneBetRule");
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
    var FortuneBetRule = function(_super) {
      __extends(FortuneBetRule, _super);
      function FortuneBetRule() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      FortuneBetRule.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      FortuneBetRule.prototype.setTitleLabel = function(fortuneBet) {
        this.root["$layout"]["#title"]["label"].string = fortuneBet;
      };
      FortuneBetRule.prototype.setPaysLabel = function(pays) {
        this.root["$layout"]["#pays"]["label"].string = pays;
      };
      FortuneBetRule = __decorate([ ccclass ], FortuneBetRule);
      return FortuneBetRule;
    }(cc.Component);
    exports.default = FortuneBetRule;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  GameRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "74899Y6vnFKnIcaoAfVPuaA", "GameRule");
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
    var PaiGowSetting_1 = require("../lib/PaiGowSetting");
    var PaiGowText_1 = require("../lib/PaiGowText");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameRule = function(_super) {
      __extends(GameRule, _super);
      function GameRule() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.HandCardRule = null;
        _this.handCardRules = null;
        _this.activeColor = new cc.Color(218, 255, 0);
        _this.nonActiveColor = new cc.Color(255, 255, 255);
        _this.activeButton = "";
        return _this;
      }
      GameRule.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      GameRule.prototype.start = function() {
        this.language();
        this.onHowToPlayClick();
      };
      GameRule.prototype.language = function() {
        var language = PaiGowSetting_1.paiGowSetting.language;
        this.root["$ui"]["$buttons"]["$howToPlay"]["#title"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Buttons"]["HowToPlay"];
        this.root["$ui"]["$buttons"]["$wayToBet"]["#title"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Buttons"]["WayToBet"];
        this.root["$ui"]["$buttons"]["$handRank"]["#title"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Buttons"]["HandRank"];
      };
      GameRule.prototype.onHowToPlayClick = function() {
        if ("howToPlay" == this.activeButton) return;
        this.resetRuleLayout();
        var language = PaiGowSetting_1.paiGowSetting.language;
        this.root["$ui"]["$rule"]["$view"]["$content"]["#item"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Content"]["HowToPlay"];
        this.setButtonsActiveColor("howToPlay");
      };
      GameRule.prototype.onWayToBetClick = function() {
        if ("wayToBet" == this.activeButton) return;
        this.resetRuleLayout();
        var language = PaiGowSetting_1.paiGowSetting.language;
        this.root["$ui"]["$rule"]["$view"]["$content"]["#item"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Content"]["WayToBet"];
        this.setButtonsActiveColor("wayToBet");
      };
      GameRule.prototype.onHandRankClick = function() {
        var _this = this;
        if ("handRank" == this.activeButton) return;
        var language = PaiGowSetting_1.paiGowSetting.language;
        this.root["$ui"]["$rule"]["$view"]["$content"]["#item"]["label"].string = PaiGowText_1.paiGowText[language]["GameRule"]["Content"]["HandRank"]["Top"];
        this.setButtonsActiveColor("handRank");
        var handCardList = PaiGowText_1.paiGowText[language]["GameRule"]["Content"]["HandRank"]["HandCardList"];
        handCardList.forEach(function(item, i) {
          var handCardRule = cc.instantiate(_this.HandCardRule);
          var handCardRuleJs = handCardRule.getComponent("HandCardRule");
          handCardRuleJs.init();
          handCardRuleJs.setTitleLabel(item["title"]);
          handCardRuleJs.setExampleSprite(_this.getHandCardRuleSprite(i + ""));
          handCardRuleJs.setDescriptionLabel(item["description"]);
          _this.root["$ui"]["$rule"]["$view"]["content"].addChild(handCardRule);
        });
        var bottom = cc.instantiate(this.HandCardRule);
        var bottomJs = bottom.getComponent("HandCardRule");
        bottomJs.init();
        bottomJs.setTitleLabel(PaiGowText_1.paiGowText[language]["GameRule"]["Content"]["HandRank"]["Bottom"]);
        this.root["$ui"]["$rule"]["$view"]["content"].addChild(bottom);
      };
      GameRule.prototype.setButtonsActiveColor = function(nodeName) {
        var _this = this;
        this.root["$ui"]["buttons"].children.forEach(function(child) {
          child.getComponent(cc.Button) && (child.name === nodeName ? child.getChildByName("title").color = _this.activeColor : child.getChildByName("title").color = _this.nonActiveColor);
        });
        this.activeButton = nodeName;
      };
      GameRule.prototype.getHandCardRuleSprite = function(ruleName) {
        var sprite = null;
        var sprites = this.handCardRules.getSpriteFrames();
        sprites.forEach(function(item) {
          sprite = item.name === ruleName ? item : sprite;
        });
        return sprite;
      };
      GameRule.prototype.resetRuleLayout = function() {
        var rule = this.root["$ui"]["$rule"]["$view"]["content"];
        while (rule.childrenCount > 1) rule.removeChild(rule.children[1]);
        this.root["$ui"]["$rule"]["$view"]["$content"]["#item"]["label"].string = "";
      };
      __decorate([ property(cc.Prefab) ], GameRule.prototype, "HandCardRule", void 0);
      __decorate([ property(cc.SpriteAtlas) ], GameRule.prototype, "handCardRules", void 0);
      GameRule = __decorate([ ccclass ], GameRule);
      return GameRule;
    }(cc.Component);
    exports.default = GameRule;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowSetting": "PaiGowSetting",
    "../lib/PaiGowText": "PaiGowText"
  } ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bf415Bvs0xMu57kp2bcCP6x", "Game");
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
    var LuckPay_1 = require("./lib/LuckPay");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var CocosUtils_1 = require("./lib/CocosUtils");
    var PaiGowContext_1 = require("./lib/PaiGowContext");
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Game.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      Game.prototype.onLoad = function() {
        PaiGowContext_1.fixVisible(this.node);
        this.init();
      };
      Game.prototype.start = function() {
        var url = new URL(location.href);
        if (null === url.searchParams.get("pid")) this.root["$ui"]["toolTips"].active = true; else {
          this.root["$ui"]["toolTips"].active = false;
          var token = url.searchParams.get("pid");
          LuckPay_1.luckPay.getBalance(token).catch(function(err) {
            CocosUtils_1.default.error(err);
          }).then(function(res) {
            if (!res) return;
            CocosUtils_1.default.log(res);
          });
        }
      };
      Game.prototype.onSingInClick = function() {
        window.location.href = "https://clover.kimicat.com/LuckPayTest/signin.html";
      };
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "./lib/CocosUtils": "CocosUtils",
    "./lib/LuckPay": "LuckPay",
    "./lib/PaiGowContext": "PaiGowContext"
  } ],
  HandCardRule: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54a9bR02A9AtaVNs1UWmy68", "HandCardRule");
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
    var HandCardRule = function(_super) {
      __extends(HandCardRule, _super);
      function HandCardRule() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      HandCardRule.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      HandCardRule.prototype.setTitleLabel = function(title) {
        this.root["#title"]["label"].string = title;
      };
      HandCardRule.prototype.setExampleSprite = function(sprite) {
        this.root["#example"]["sprite"].spriteFrame = sprite;
      };
      HandCardRule.prototype.setDescriptionLabel = function(description) {
        this.root["#description"]["label"].string = description;
      };
      HandCardRule = __decorate([ ccclass ], HandCardRule);
      return HandCardRule;
    }(cc.Component);
    exports.default = HandCardRule;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  HandCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b106h36JJKHr+rotGR3Zwe", "HandCard");
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
    var HandCard = function(_super) {
      __extends(HandCard, _super);
      function HandCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Card = null;
        _this.root = null;
        _this.table = null;
        _this.pickLimit = 2;
        return _this;
      }
      HandCard.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      HandCard.prototype.addCards = function(cards) {
        var _this = this;
        this.root["cards"].removeAllChildren(true);
        cards.forEach(function(item) {
          var card = cc.instantiate(_this.Card);
          var cardJs = card.getComponent("Card");
          cardJs.handCard = _this;
          cardJs.setCard(item);
          _this.root["cards"].addChild(card);
        });
      };
      HandCard.prototype.getPickedCount = function() {
        var count = 0;
        this.root["cards"].children.forEach(function(item) {
          var itemJs = item.getComponent("Card");
          itemJs.isPicked && count++;
        });
        return count;
      };
      HandCard.prototype.getCards = function(isPicked, isAll) {
        void 0 === isAll && (isAll = false);
        var cards = [];
        this.root["cards"].children.forEach(function(item) {
          var itemJs = item.getComponent("Card");
          isAll ? cards.push(itemJs.card) : itemJs.isPicked === isPicked && cards.push(itemJs.card);
        });
        return cards;
      };
      HandCard.prototype.canPicked = function() {
        return this.getPickedCount() < this.pickLimit;
      };
      HandCard.prototype.pickCards = function(cards) {
        var cardNodes = this.root["cards"].children;
        cardNodes.forEach(function(item) {
          var cardJs = item.getComponent("Card");
          var flag = false;
          cards.forEach(function(c) {
            flag = c === cardJs.card || flag;
          });
          flag ? cardJs.pick() : cardJs.unPick();
        });
      };
      HandCard.prototype.enableClickCards = function(enable) {
        this.root["cards"].children.forEach(function(item) {
          var js = item.getComponent("Card");
          js.enableClick = enable;
        });
      };
      __decorate([ property(cc.Prefab) ], HandCard.prototype, "Card", void 0);
      HandCard = __decorate([ ccclass ], HandCard);
      return HandCard;
    }(cc.Component);
    exports.default = HandCard;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  I18N: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f681Lu71tDBpt+JhE/oi/o", "I18N");
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
    var CocosUtils_1 = require("../lib/CocosUtils");
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
    "../lib/CocosUtils": "CocosUtils"
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
    var CocosUtils_1 = require("../lib/CocosUtils");
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
    "../lib/CocosUtils": "CocosUtils"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c42a6woU4dMbYmXOHvAxF+/", "Loading");
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
    var PaiGowContext_1 = require("./lib/PaiGowContext");
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
        PaiGowContext_1.fixVisible(this.node);
        this.init();
        this.preLoadResources();
      };
      Loading.prototype.preLoadResources = function() {
        var _this = this;
        cc.loader.loadRes("prefab/Alert", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.Alert = prefab;
            PaiGowContext_1.getAlert(function() {
              _this.addProgress();
            });
          }
        });
        cc.loader.loadRes("prefab/Popup", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.Popup = prefab;
            PaiGowContext_1.getPopup(function() {
              _this.addProgress();
            });
          }
        });
        cc.loader.loadRes("prefab/Menu", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.Menu = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("prefab/PaiGowTable", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.PaiGowTable = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("prefab/GameRule", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.GameRule = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("prefab/Paytable", cc.Prefab, function(err, prefab) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.prefabs.Paytable = prefab;
            _this.addProgress();
          }
        });
        cc.loader.loadRes("atlas/cards", cc.SpriteAtlas, function(err, spriteAtlas) {
          if (err) CocosUtils_1.default.error(err); else {
            PaiGowContext_1.atlas.cards = spriteAtlas;
            _this.addProgress();
          }
        });
      };
      Loading.prototype.preLoadScene = function() {
        cc.director.preloadScene("Game", function() {
          CocosUtils_1.default.log("preload Game scene finished.");
        });
      };
      Loading.prototype.addProgress = function() {
        this.progressNow++;
        var progressBar = this.root["$ui"]["progressBar"].getComponent(cc.ProgressBar);
        progressBar.progress = this.progressNow / this.progressCount;
        this.progressNow === this.progressCount && cc.director.loadScene("Game");
      };
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "./lib/CocosUtils": "CocosUtils",
    "./lib/PaiGowContext": "PaiGowContext"
  } ],
  LuckPay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2a83ePECjhKMK0Jka8B7TT9", "LuckPay");
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
    var LuckPayHost = "https://tronpaytest-api.lucknetwork.org";
    var LuckPayUtils = {
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
    var LuckPay = function() {
      function LuckPay(appID) {
        this.injectPromise = null;
        this.appID = null;
        this.injectPromise = LuckPayUtils.promiseInjector(this);
        this.appID = appID;
      }
      LuckPay.prototype.postRequest = function(api, body, header, callback) {
        void 0 === header && (header = false);
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var http_1, url, data;
          return __generator(this, function(_a) {
            if ("function" == typeof header) {
              callback = header;
              header = false;
            }
            if (!callback) return [ 2, this.injectPromise(this.postRequest, api, body, header) ];
            false == header && (header = {});
            try {
              http_1 = new XMLHttpRequest();
              url = LuckPayHost + "/" + api;
              http_1.open("POST", url);
              http_1.setRequestHeader("Content-Type", "application/json");
              Object.keys(header).forEach(function(item) {
                http_1.setRequestHeader(item, header[item]);
              });
              http_1.onreadystatechange = function() {
                if (4 == this.readyState) if (200 == this.status) {
                  var result = JSON.parse(this.responseText);
                  "undefined" != typeof result.error ? callback(result.error, null) : 1 != result.success ? callback(result.error_msg, null) : callback(null, result.data);
                } else callback(this.statusText, null);
              };
              data = JSON.stringify(body);
              console.log("data:", data);
              http_1.send(data);
            } catch (error) {
              callback(error, null);
            }
            return [ 2 ];
          });
        });
      };
      LuckPay.prototype.getRequest = function(api, header, callback) {
        void 0 === header && (header = false);
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var http_2, url;
          return __generator(this, function(_a) {
            if ("function" == typeof header) {
              callback = header;
              header = false;
            }
            if (!callback) return [ 2, this.injectPromise(this.getRequest, api, header) ];
            false == header && (header = {});
            try {
              http_2 = new XMLHttpRequest();
              url = LuckPayHost + "/" + api;
              http_2.open("GET", url);
              http_2.setRequestHeader("Content-Type", "application/json");
              Object.keys(header).forEach(function(item) {
                http_2.setRequestHeader(item, header[item]);
              });
              http_2.onreadystatechange = function() {
                if (4 == this.readyState) if (200 == this.status) {
                  var result = JSON.parse(this.responseText);
                  "undefined" != typeof result.error ? callback(result.error, null) : 1 != result.success ? callback(result.error_msg, null) : callback(null, result.data);
                } else callback(this.statusText, null);
              };
              http_2.send();
            } catch (error) {
              callback(error, null);
            }
            return [ 2 ];
          });
        });
      };
      LuckPay.prototype.getSignMessage = function(token, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.getRequest("accounts/sign/" + token + "/" + this.appID, callback) ];
          });
        });
      };
      LuckPay.prototype.accountLogin = function(token, address, message, signature, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              address: address,
              message: message,
              signature: signature
            };
            return [ 2, this.postRequest("accounts/login/" + token, param, callback) ];
          });
        });
      };
      LuckPay.prototype.accountStatus = function(token, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.getRequest("accounts/status", {
              "service-token": token
            }, callback) ];
          });
        });
      };
      LuckPay.prototype.accountLogout = function(token, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, this.getRequest("accounts/logout", {
              "service-token": token
            }, callback) ];
          });
        });
      };
      LuckPay.prototype.getBalance = function(token, tableID, callback) {
        void 0 === tableID && (tableID = false);
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            if ("function" == typeof tableID) {
              callback = tableID;
              tableID = false;
            }
            return tableID ? [ 2, this.getRequest("balances/" + tableID, {
              "service-token": token
            }, callback) ] : [ 2, this.getRequest("balances", {
              "service-token": token
            }, callback) ];
          });
        });
      };
      LuckPay.prototype.deposit = function(token, currency, amount, tableID, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            "number" == typeof amount && (amount = amount.toString(10));
            param = {
              amount: amount,
              table_id: tableID
            };
            return [ 2, this.postRequest("/balances/" + currency + "/deposit", param, {
              "service-token": token
            }, callback) ];
          });
        });
      };
      LuckPay.prototype.withdraw = function(token, currency, amount, tableID, address, callback) {
        void 0 === address && (address = false);
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            if ("function" == typeof address) {
              callback = address;
              address = false;
            }
            "number" == typeof amount && (amount = amount.toString(10));
            param = {
              amount: amount,
              table_id: tableID
            };
            false != address && (param.address = address);
            return [ 2, this.postRequest("/balances/" + currency + "/withdraw", param, {
              "service-token": token
            }, callback) ];
          });
        });
      };
      return LuckPay;
    }();
    exports.LuckPay = LuckPay;
    exports.luckPay = new LuckPay("E6JyTXxRFrFC9aH3");
    cc._RF.pop();
  }, {} ],
  MenuItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c366bs34sVOWIGDWufc3d9j", "MenuItem");
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
    var MenuItem = function(_super) {
      __extends(MenuItem, _super);
      function MenuItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.root = null;
        _this.onClick = null;
        return _this;
      }
      MenuItem.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      MenuItem.prototype.start = function() {};
      MenuItem.prototype.setIconSprite = function(sprite, size) {
        void 0 === size && (size = 24);
        this.root["#icon"]["sprite"].spriteFrame = sprite;
        this.root["icon"].width = this.root["icon"].height = size;
      };
      MenuItem.prototype.setTitleLabel = function(label) {
        this.root["#title"]["label"].string = label;
        this.root["#title"]["label"]._forceUpdateRenderData();
        this.fixValuePosition();
      };
      MenuItem.prototype.setValueLabel = function(label) {
        this.root["#value"]["label"].string = label;
        this.fixValuePosition();
      };
      MenuItem.prototype.fixValuePosition = function() {
        var title = this.root["title"];
        var value = this.root["value"];
        value.x = title.x + title.width + 20;
      };
      MenuItem.prototype.setClickEvent = function(callback) {
        this.node.off(cc.Node.EventType.TOUCH_END, this.onClick);
        this.onClick = callback;
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick);
      };
      MenuItem = __decorate([ ccclass ], MenuItem);
      return MenuItem;
    }(cc.Component);
    exports.default = MenuItem;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  Menu: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28fccvCzItHHbaYXq+yXCZ2", "Menu");
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
    var PaiGowSetting_1 = require("../lib/PaiGowSetting");
    var PaiGowApi_1 = require("../lib/PaiGowApi");
    var PaiGowPlayer_1 = require("../lib/PaiGowPlayer");
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowText_1 = require("../lib/PaiGowText");
    var Audio_1 = require("../lib/Audio");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Menu = function(_super) {
      __extends(Menu, _super);
      function Menu() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.MenuItem = null;
        _this.icons = null;
        _this.root = null;
        _this.isBack = false;
        _this.backCallback = null;
        return _this;
      }
      Menu.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
        this.initMenuItems();
      };
      Menu.prototype.initMenuItems = function() {
        var _this = this;
        var layout = this.root["menuItems"];
        var menuItemText = PaiGowText_1.paiGowText["EN"]["Menu"];
        menuItemText.forEach(function(item) {
          var menuItem = cc.instantiate(_this.MenuItem);
          var menuItemJs = menuItem.getComponent("MenuItem");
          menuItemJs.init();
          menuItemJs.setTitleLabel(item["content"]);
          menuItemJs.setIconSprite(_this.getItemSprite(item["title"]), _this.getItemSize(item["title"]));
          menuItemJs.setValueLabel(_this.getItemValue(item["title"]));
          menuItemJs.setClickEvent(_this.getItemClickEvent(item["title"]));
          layout.addChild(menuItem);
        });
      };
      Menu.prototype.start = function() {};
      Menu.prototype.language = function() {
        var language = PaiGowSetting_1.paiGowSetting.language;
        var menuItemText = PaiGowText_1.paiGowText[language]["Menu"];
        var menuItems = this.root["menuItems"];
        menuItems.children.forEach(function(item, i) {
          var itemJs = item.getComponent("MenuItem");
          itemJs.setTitleLabel(menuItemText[i]["content"]);
        });
      };
      Menu.prototype.onMenuButtonClick = function() {
        if (this.isBack) {
          this.backCallback();
          this.setBack(false);
          return;
        }
        this.root["menuItems"].active = !this.root["menuItems"].active;
        this.root["line"].active = this.root["menuItems"].active;
        this.root["mask"].active = this.root["menuItems"].active;
      };
      Menu.prototype.setBack = function(isBack, callback) {
        void 0 === callback && (callback = null);
        this.isBack = isBack;
        this.backCallback = callback;
        this.root["$menu"]["open"].active = !isBack;
        this.root["$menu"]["back"].active = isBack;
      };
      Menu.prototype.updatePlayerBalanceLabel = function() {
        this.root["#playerBalance"]["label"].string = PaiGowPlayer_1.paiGowPlayer.playerBalance + "";
      };
      Menu.prototype.getItemSprite = function(iconName) {
        var sprite = null;
        var sprites = this.icons.getSpriteFrames();
        var iconData = this.getItemData(iconName);
        var spriteName = iconData["iconSpriteName"];
        sprites.forEach(function(item) {
          sprite = item.name === spriteName ? item : sprite;
        });
        return sprite;
      };
      Menu.prototype.getItemSize = function(iconName) {
        var iconData = this.getItemData(iconName);
        return iconData["size"];
      };
      Menu.prototype.getItemValue = function(iconName) {
        var iconData = this.getItemData(iconName);
        return iconData["value"];
      };
      Menu.prototype.getItemClickEvent = function(iconName) {
        var iconData = this.getItemData(iconName);
        return iconData["onClick"];
      };
      Menu.prototype.getItemData = function(iconName) {
        var _this = this;
        var map = {
          GameRule: {
            iconSpriteName: "cards-spade-1",
            size: 24,
            value: "",
            onClick: function(e) {
              return _this.onGameRuleClick(e);
            }
          },
          Paytable: {
            iconSpriteName: "currency-usd",
            size: 18,
            value: "",
            onClick: function(e) {
              return _this.onPaytableClick(e);
            }
          },
          Language: {
            iconSpriteName: "translate",
            size: 18,
            value: "EN",
            onClick: function(e) {
              return _this.onLanguageClick(e);
            }
          }
        };
        return map[iconName];
      };
      Menu.prototype.onLoginClick = function(e) {
        PaiGowApi_1.paiGowApi.login();
      };
      Menu.prototype.onGameRuleClick = function(e) {
        var _this = this;
        var gameRule = cc.instantiate(PaiGowContext_1.prefabs.GameRule);
        var gameRuleJs = gameRule.getComponent("GameRule");
        gameRuleJs.init();
        this.setBack(true, function() {
          gameRule.destroy();
          _this.setBack(false);
        });
        PaiGowContext_1.getCurrentSceneNode().addChild(gameRule);
        this.root["menuItems"].active = !this.root["menuItems"].active;
        this.root["line"].active = this.root["menuItems"].active;
        this.root["mask"].active = this.root["menuItems"].active;
      };
      Menu.prototype.onPaytableClick = function(e) {
        var _this = this;
        var payTable = cc.instantiate(PaiGowContext_1.prefabs.Paytable);
        var payTableJs = payTable.getComponent("Paytable");
        payTableJs.init();
        this.setBack(true, function() {
          payTable.destroy();
          _this.setBack(false);
        });
        PaiGowContext_1.getCurrentSceneNode().addChild(payTable);
        this.root["menuItems"].active = !this.root["menuItems"].active;
        this.root["line"].active = this.root["menuItems"].active;
        this.root["mask"].active = this.root["menuItems"].active;
      };
      Menu.prototype.onLanguageClick = function(e) {
        PaiGowSetting_1.paiGowSetting.changeLanguage();
        PaiGowSetting_1.paiGowSetting.triggerLanguage(PaiGowContext_1.getCurrentSceneNode());
        var item = e.target;
        var itemJs = item.getComponent("MenuItem");
        itemJs.setValueLabel(PaiGowSetting_1.paiGowSetting.language);
      };
      Menu.prototype.onBackgroundMusicClick = function(e) {
        var item = e.target;
        var itemJs = item.getComponent("MenuItem");
        if (PaiGowSetting_1.paiGowSetting.music) {
          Audio_1.audio.stopMusic();
          itemJs.setValueLabel("OFF");
        } else {
          Audio_1.audio.playMusic(PaiGowContext_1.music.bg);
          itemJs.setValueLabel("ON");
        }
        PaiGowSetting_1.paiGowSetting.music = !PaiGowSetting_1.paiGowSetting.music;
      };
      Menu.prototype.onMaskClick = function() {
        this.root["menuItems"].active = false;
        this.root["line"].active = false;
        this.root["mask"].active = false;
      };
      __decorate([ property(cc.Prefab) ], Menu.prototype, "MenuItem", void 0);
      __decorate([ property(cc.SpriteAtlas) ], Menu.prototype, "icons", void 0);
      Menu = __decorate([ ccclass ], Menu);
      return Menu;
    }(cc.Component);
    exports.default = Menu;
    cc._RF.pop();
  }, {
    "../lib/Audio": "Audio",
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowApi": "PaiGowApi",
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowPlayer": "PaiGowPlayer",
    "../lib/PaiGowSetting": "PaiGowSetting",
    "../lib/PaiGowText": "PaiGowText"
  } ],
  PaiGowApi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "60d6bgEgQpAV50cGOZMhsGC", "PaiGowApi");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PaiGowContext_1 = require("./PaiGowContext");
    var LuckPay_1 = require("./LuckPay");
    var CocosUtils_1 = require("./CocosUtils");
    var PaiGowPlayer_1 = require("./PaiGowPlayer");
    var PaiGowMessage_1 = require("./PaiGowMessage");
    var PaiGowPoker_1 = require("./PaiGowPoker");
    var PaiGowApi = function() {
      function PaiGowApi(currency) {
        this._currency = currency;
      }
      Object.defineProperty(PaiGowApi.prototype, "currency", {
        get: function() {
          return this._currency;
        },
        set: function(value) {
          this._currency = value;
        },
        enumerable: true,
        configurable: true
      });
      PaiGowApi.prototype.login = function() {
        var _this = this;
        if ("undefined" === typeof window["tronWeb"]) {
          PaiGowContext_1.getAlert().show(PaiGowMessage_1.PaiGowMessage.UnInstallTronLink);
          return;
        }
        var message = "";
        LuckPay_1.luckPay.getSignMessage(this.currency).then(function(result) {
          CocosUtils_1.default.log("getSignMessage:");
          CocosUtils_1.default.log(result);
          message = result.message;
          return window["tronWeb"].trx.sign(message);
        }).then(function(signResult) {
          CocosUtils_1.default.log("signResult:");
          CocosUtils_1.default.log(signResult);
          return LuckPay_1.luckPay.accountLogin(_this.currency, window["tronWeb"].defaultAddress.base58, message, signResult);
        }).then(function(_a) {
          var service_token = _a.service_token;
          PaiGowPlayer_1.paiGowPlayer.setServiceToken(service_token);
        }).catch(function(error) {
          CocosUtils_1.default.log("error:");
          CocosUtils_1.default.log(error);
          PaiGowContext_1.getAlert().show(error);
        });
      };
      PaiGowApi.prototype.withLoggedIn = function(callback) {
        var serviceToken = PaiGowPlayer_1.paiGowPlayer.serviceToken;
        "string" === typeof serviceToken ? LuckPay_1.luckPay.accountStatus(serviceToken).then(function(result) {
          1 === result.login ? callback(result) : callback(false);
        }).catch(function(error) {
          CocosUtils_1.default.warn("error:");
          CocosUtils_1.default.warn(error);
          callback(false);
        }) : callback(false);
      };
      PaiGowApi.prototype.refreshGameTable = function() {
        PaiGowPoker_1.paiGowPoker.getTableStatus(PaiGowPlayer_1.paiGowPlayer.serviceToken).then(function(result) {
          CocosUtils_1.default.log("result:");
          CocosUtils_1.default.log(result);
        });
      };
      return PaiGowApi;
    }();
    exports.default = PaiGowApi;
    exports.paiGowApi = new PaiGowApi("TRX");
    cc._RF.pop();
  }, {
    "./CocosUtils": "CocosUtils",
    "./LuckPay": "LuckPay",
    "./PaiGowContext": "PaiGowContext",
    "./PaiGowMessage": "PaiGowMessage",
    "./PaiGowPlayer": "PaiGowPlayer",
    "./PaiGowPoker": "PaiGowPoker"
  } ],
  PaiGowContext: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e8bfBcxWdLO4GFEVLGZcqI", "PaiGowContext");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("./CocosUtils");
    exports.globalConstant = {
      tableId: "testTable"
    };
    exports.prefabs = {
      Alert: null,
      Menu: null,
      PaiGowTable: null,
      GameRule: null,
      Paytable: null,
      Popup: null
    };
    exports.music = {
      bg: null
    };
    exports.atlas = {
      cards: null
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
    exports.getCardSpriteNode = function(card) {
      var node = new cc.Node();
      var sprite = node.addComponent(cc.Sprite);
      node.name = card + "";
      var sf = null;
      var sfs = exports.atlas.cards.getSpriteFrames();
      sfs.forEach(function(item) {
        sf = parseInt(item.name) === card ? item : sf;
      });
      sprite.spriteFrame = sf;
      node.width = 100;
      node.height = 112;
      return node;
    };
    exports.getCardSpriteNodes = function(cards) {
      var cardNodes = [];
      cards.forEach(function(item) {
        cardNodes.push(exports.getCardSpriteNode(item));
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
    cc._RF.pop();
  }, {
    "./CocosUtils": "CocosUtils"
  } ],
  PaiGowMessage: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0538dSD5hJAg4HopQIV5oEI", "PaiGowMessage");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PaiGowMessage;
    (function(PaiGowMessage) {
      PaiGowMessage["UnInstallTronLink"] = "Please install TronLink.";
      PaiGowMessage["JoinSeatError"] = "You can't join this seat.";
      PaiGowMessage["EnterYourID"] = "Please enter your ID.";
      PaiGowMessage["NoID"] = "You have to set your playerID first.";
      PaiGowMessage["IDAlreadySeat"] = "This ID already seated.";
      PaiGowMessage["JoinTableSuccess"] = "Join table success.";
      PaiGowMessage["SplitIllegal"] = "High card must be higher rank than low card.";
      PaiGowMessage["BetSuccess"] = "Bet Success.";
      PaiGowMessage["SureToLeave"] = "Leave PaiGow ?";
      PaiGowMessage["PleaseSelectSeat"] = "Select a seat and bet to join table.";
      PaiGowMessage["WaitingCardDealing"] = "Cards dealing, please wait...";
      PaiGowMessage["Tap2Card"] = "Tap 2 cards for the low hand.";
      PaiGowMessage["PleaseSplitCard"] = "Please split your cards.";
      PaiGowMessage["PleaseBet"] = "Please bet for next round.";
      PaiGowMessage["Win"] = "You win: ";
      PaiGowMessage["Lose"] = "You lose: ";
      PaiGowMessage["PleaseWaitOtherPlayersSplit"] = "Please wait other players split.";
    })(PaiGowMessage = exports.PaiGowMessage || (exports.PaiGowMessage = {}));
    cc._RF.pop();
  }, {} ],
  PaiGowPlayer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "764e6ceJrZEx5jsfaZUmlcO", "PaiGowPlayer");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PaiGowPlayer = function() {
      function PaiGowPlayer() {
        this.gameTable = {};
        this.serviceToken = null;
        this.isLoggedIn = false;
        this.playerId = "";
        this.playerBalance = 0;
        this.winAmount = 0;
        this.isAceHigh = false;
        this.isApiCalled = false;
        this.isShowResult = false;
        this.isClientBetting = false;
        this.mainBet = 0;
        this.sideBet = 0;
        this.fortuneBet = 0;
        this.seatId = "";
        this.playerCards = [];
        this.playerLowCards = [];
      }
      PaiGowPlayer.prototype.setGameTable = function(gameTable) {
        this.gameTable = gameTable;
      };
      PaiGowPlayer.prototype.setServiceToken = function(serviceToken) {
        this.serviceToken = serviceToken;
      };
      PaiGowPlayer.prototype.setPlayerId = function(playerId) {
        this.playerId = playerId;
      };
      PaiGowPlayer.prototype.setIsLoggedIn = function(isLoggedIn) {
        this.isLoggedIn = isLoggedIn;
      };
      PaiGowPlayer.prototype.setIsApiCalled = function(isApiCalled) {
        this.isApiCalled = isApiCalled;
      };
      PaiGowPlayer.prototype.setPlayerCards = function(playerCards) {
        this.playerCards = playerCards;
      };
      PaiGowPlayer.prototype.setPlayerLowCards = function(playerLowCards) {
        this.playerLowCards = playerLowCards;
      };
      return PaiGowPlayer;
    }();
    exports.default = PaiGowPlayer;
    exports.paiGowPlayer = new PaiGowPlayer();
    cc._RF.pop();
  }, {} ],
  PaiGowPoker2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7c5b0gHy3BOJKzzi4UTQgoj", "PaiGowPoker2");
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
    var PaiGowContext_1 = require("./PaiGowContext");
    var gameHost = "https://clover.kimicat.com/spaigow";
    exports.paigowUtils = {
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
      },
      toCardsArray: function(cards) {
        var cardsArray = [];
        for (var i = 0; i <= 52; i++) {
          cards.mod(2).isZero() || cardsArray.push(i);
          cards = cards.sub(cards.mod(2)).div(2);
        }
        return cardsArray;
      },
      popcount: function(cards) {
        var maskedCards = 16383 & cards;
        maskedCards = ((43690 & maskedCards) >> 1) + (21845 & maskedCards);
        maskedCards = ((52428 & maskedCards) >> 2) + (13107 & maskedCards);
        maskedCards = ((61680 & maskedCards) >> 4) + (3855 & maskedCards);
        maskedCards = ((65280 & maskedCards) >> 8) + (255 & maskedCards);
        return maskedCards;
      },
      bitscan: function(cards) {
        var res = 0;
        if (0 != (65280 & cards)) {
          res += 8;
          cards &= 65280;
        }
        if (0 != (61680 & cards)) {
          res += 4;
          cards &= 61680;
        }
        if (0 != (52428 & cards)) {
          res += 2;
          cards &= 52428;
        }
        0 != (43690 & cards) && (res += 1);
        return res;
      },
      bitfieldCards: function(cards) {
        var suites = [ 0, 0, 0, 0 ];
        var joker = false;
        for (var i = 0; i < cards.length; i++) 52 == cards[i] ? joker = true : suites[Math.floor(cards[i] / 13)] |= 1 << cards[i] % 13;
        for (var i = 0; i < 4; i++) suites[i] |= (1 & suites[i]) << 13;
        var counts = [ 0, 0, 0, 0 ];
        counts[3] = suites[0] & suites[1] & suites[2] & suites[3];
        var a = suites[0] | suites[1] | suites[2] | suites[3];
        var b = a & ~counts[3];
        var c = suites[0] ^ suites[1] ^ suites[2] ^ suites[3];
        counts[1] = b & ~c;
        counts[2] = suites[0] & suites[1] & suites[2] & ~suites[3] | suites[0] & suites[1] & ~suites[2] & suites[3] | suites[0] & ~suites[1] & suites[2] & suites[3] | ~suites[0] & suites[1] & suites[2] & suites[3];
        counts[0] = c & ~counts[2];
        for (var i = 0; i < 4; i++) counts[i] &= -2;
        if (joker && 0 != (8192 & counts[3])) return 12513006;
        if (joker) {
          counts[3] |= 8192 & counts[2];
          counts[2] &= -8193;
          counts[2] |= 8192 & counts[1];
          counts[1] &= -8193;
          counts[1] |= 8192 & counts[0];
          counts[0] &= -8193;
          0 == (8192 & a) && (counts[0] |= 8192);
        }
        for (var i = 0; i < 4; i++) if (7681 == (7681 & suites[i]) || joker && 4 == exports.paigowUtils.popcount(7681 & suites[i])) return 11403264;
        var mask = 7936;
        var largestCard = 13;
        while (mask >= 31) {
          for (var i = 0; i < 4; i++) if ((suites[i] & mask) == mask || joker && 4 == exports.paigowUtils.popcount(suites[i] & mask)) return 9437184 + (largestCard << 16);
          mask >>= 1;
          largestCard--;
        }
        if (0 != counts[3]) {
          var fours = exports.paigowUtils.bitscan(counts[3]) + 1;
          return 8388608 + 69904 * fours;
        }
        if (0 != counts[2]) {
          var threes = exports.paigowUtils.bitscan(counts[2]);
          var threeOrTwo = counts[2] ^ 1 << threes | counts[1];
          if (0 != threeOrTwo) {
            var twos = exports.paigowUtils.bitscan(threeOrTwo);
            return 7340032 + 69888 * (threes + 1) + 17 * (twos + 1);
          }
        }
        if (joker) for (var i = 0; i < 4; i++) {
          var idx = exports.paigowUtils.bitscan(16383 & ~suites[i]);
          suites[i] |= 1 << idx;
        }
        var cardIndices = 0;
        for (var i = 0; i < 4; i++) {
          var number = exports.paigowUtils.popcount(suites[i] >> 1);
          if (number >= 5) {
            var p = 5;
            var indices = 0;
            var c = suites[i];
            while (p > 0) {
              var idx = exports.paigowUtils.bitscan(c);
              c ^= 1 << idx;
              indices <<= 4;
              indices += idx + 1;
              p--;
            }
            indices > cardIndices && (cardIndices = indices);
          }
        }
        if (cardIndices > 0) return 6291456 + cardIndices;
        var allCounts = a;
        mask = 15872;
        largestCard = 14;
        while (mask >= 31) {
          if ((allCounts & mask) == mask || joker && 4 == exports.paigowUtils.popcount(allCounts & mask)) return 5242880 + (largestCard << 16);
          mask >>= 1;
          largestCard--;
        }
        if (0 != counts[2]) {
          var threes = exports.paigowUtils.bitscan(counts[2]) + 1;
          return 4194304 + 69888 * threes;
        }
        if (exports.paigowUtils.popcount(counts[1] >> 1) >= 2) {
          var twosA = exports.paigowUtils.bitscan(counts[1]);
          var twosB = exports.paigowUtils.bitscan(counts[1] ^ 1 << twosA);
          var one = exports.paigowUtils.bitscan(counts[0]);
          return 3145728 + 69632 * (twosA + 1) + 272 * (twosB + 1) + one + 1;
        }
        if (0 != counts[1]) {
          var twos = exports.paigowUtils.bitscan(counts[1]) + 1;
          var res = 512 + 17 * twos;
          var p = 3;
          var c = counts[0];
          while (p > 0) {
            var idx = exports.paigowUtils.bitscan(c);
            c ^= 1 << idx;
            res <<= 4;
            res += idx + 1;
            p--;
          }
          return res;
        }
        var res = 1;
        var p = 5;
        var c = counts[0];
        while (p > 0) {
          var idx = exports.paigowUtils.bitscan(c);
          c ^= 1 << idx;
          res <<= 4;
          res += idx + 1;
          p--;
        }
        return res;
      },
      matchCardValue: function(card, value) {
        return card % 13 + 1 == value || 14 == value && card % 13 == 0;
      },
      pickCard: function(value, cards) {
        var joker = false;
        var jokerIdx = 0;
        for (var i = 0; i < cards.length; i++) if (52 == cards[i]) {
          joker = true;
          jokerIdx = i;
        } else if (exports.paigowUtils.matchCardValue(cards[i], value)) {
          var r = cards[i];
          cards.splice(i, 1);
          return r;
        }
        if (joker) {
          cards.splice(jokerIdx, 1);
          return 52;
        }
        console.trace("Error");
        throw "error";
      },
      sortCard: function(type, cards) {
        var tempCards = cards.slice(0);
        var handType = type >> 20;
        var result = [];
        if (2 == cards.length) {
          for (var i = 0; i < 2; i++) {
            var pick = type >> 4 * (4 - i) & 15;
            if (0 == pick) break;
            result.push(exports.paigowUtils.pickCard(pick, tempCards));
          }
          result.concat(tempCards);
          return result;
        }
        if (5 == cards.length) {
          if (10 == handType || 9 == handType || 5 == handType) {
            var startCard = type >> 16 & 15;
            for (var i = 0; i < 5; i++) {
              result.push(exports.paigowUtils.pickCard(startCard, tempCards));
              startCard--;
            }
            return result;
          }
          for (var i = 0; i < 5; i++) {
            var pick = type >> 4 * (4 - i) & 15;
            if (0 == pick) break;
            result.push(exports.paigowUtils.pickCard(pick, tempCards));
          }
          result = result.concat(tempCards);
          return result;
        }
        if (7 == cards.length) {
          tempCards.sort(function(a, b) {
            var aValue = a % 13;
            0 == aValue && (aValue = 13);
            var bValue = b % 13;
            0 == bValue && (bValue = 13);
            return bValue - aValue;
          });
          return tempCards;
        }
        return false;
      },
      typeName: function(type) {
        var nameArray = [ "", "High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush", "Five Aces" ];
        return nameArray[type >> 20 & 15];
      },
      remainCards: function(lowCards, allCards) {
        var res = [];
        for (var i = 0; i < allCards.length; i++) lowCards.includes(allCards[i]) || res.push(allCards[i]);
        return res;
      },
      tryAllCategories: function(cards) {
        var bestType = 0;
        var bestCard1 = 0;
        var bestCard2 = 0;
        var bestCard1v = 0;
        var bestCard2v = 0;
        for (var i = 0; i < cards.length; i++) {
          var tempCards = cards.slice(0);
          tempCards.splice(i, 1);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          var tempType = tempHand >> 20;
          if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) for (var j = i; j < tempCards.length; j++) {
            var tempCards2 = tempCards.slice(0);
            tempCards2.splice(j, 1);
            var tempHand2 = exports.paigowUtils.bitfieldCards(tempCards2);
            var tempType2 = tempHand2 >> 20;
            if (5 == tempType2 || 6 == tempType2 || 9 == tempType2 || 10 == tempType2) {
              var card1 = cards[i] % 13;
              var card1v = cards[i];
              var card2 = tempCards[j] % 13;
              var card2v = tempCards[j];
              0 == card1 && (card1 = 13);
              0 == card2 && (card2 = 13);
              52 == cards[i] && (card1 = 13);
              52 == tempCards[j] && (card2 = 13);
              if (card1 < card2) {
                var t = card2;
                card2 = card1;
                card1 = t;
                t = card2v;
                card2v = card1v;
                card1v = t;
              }
              if (bestType < tempType2) {
                bestCard1 = card1;
                bestCard1v = card1v;
                bestCard2 = card2;
                bestCard2v = card2v;
                bestType = tempType2;
              } else if (bestCard1 == card1) {
                if (bestType < tempType2) {
                  bestType = tempType2;
                  bestCard1v = card1v;
                  bestCard2 = card2;
                  bestCard2v = card2v;
                } else if (bestType == tempType2 && bestCard2 < card2) {
                  bestCard1v = card1v;
                  bestCard2 = card2;
                  bestCard2v = card2v;
                }
              } else if (bestCard1 < card1 && bestType <= tempType2) {
                bestCard1 = card1;
                bestCard1v = card1v;
                bestCard2 = card2;
                bestCard2v = card2v;
                bestType = tempType2;
              }
            }
          }
        }
        return [ bestCard1v, bestCard2v ];
      },
      levelOfPair: function(index) {
        return index >= 2 && index <= 6 ? 1 : index >= 7 && index <= 10 ? 2 : 3;
      },
      houseWay: function(cards) {
        if (7 != cards.length) return false;
        var hand = exports.paigowUtils.bitfieldCards(cards);
        var typeOfHand = hand >> 20;
        var handCards = 1048575 & hand;
        var lowHand = [];
        var newCards = cards.slice(0);
        var dontPick = false;
        var joker = false;
        for (var i = 0; i < cards.length; i++) 52 == newCards[i] && (joker = true);
        if (1 == typeOfHand) {
          lowHand.push(handCards >> 12 & 15);
          lowHand.push(handCards >> 8 & 15);
        } else if (2 == typeOfHand) {
          lowHand.push(handCards >> 8 & 15);
          lowHand.push(handCards >> 4 & 15);
        } else if (3 == typeOfHand) {
          var pair1 = handCards >> 16 & 15;
          var pair2 = handCards >> 8 & 15;
          var high = 15 & handCards;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(pair1, tempCards);
          exports.paigowUtils.pickCard(pair1, tempCards);
          exports.paigowUtils.pickCard(pair2, tempCards);
          exports.paigowUtils.pickCard(pair2, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2) {
            lowHand.push(pair1);
            lowHand.push(pair1);
          } else {
            var levelOfPair1 = exports.paigowUtils.levelOfPair(pair1);
            var levelOfPair2 = exports.paigowUtils.levelOfPair(pair2);
            if (14 == pair1) {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else if (1 == levelOfPair1 && 1 == levelOfPair2) lowHand.push(high); else if ((2 == levelOfPair1 || 3 == levelOfPair1) && 1 == levelOfPair2 || 2 == levelOfPair1 && 2 == levelOfPair2) if (14 == high) lowHand.push(high); else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            }
            if (1 == lowHand.length) {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(high, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              lowHand.push(15 & tempHand);
            }
          }
        } else if (4 == typeOfHand) {
          var threes = handCards >> 16 & 15;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 4) {
            lowHand.push(threes);
            lowHand.push(threes);
          } else if (14 == threes) {
            lowHand.push(14);
            lowHand.push(tempHand >> 16 & 15);
          } else {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          }
        } else if (5 == typeOfHand || 6 == typeOfHand || 9 == typeOfHand || 10 == typeOfHand) {
          var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
          var joker = false;
          for (var i = 0; i < newCards.length; i++) if (52 == newCards[i]) joker = true; else {
            var c = newCards[i] % 13 + 1;
            1 == c && (c = 14);
            counts[c]++;
          }
          joker && counts[14]++;
          var twos = 0;
          var threes = 0;
          var twosArray = [];
          var threesArray = [];
          for (var i = 14; i >= 2; i--) if (2 == counts[i]) {
            twos++;
            twosArray.push(i);
          } else if (3 == counts[i]) {
            threes++;
            threesArray.push(i);
          }
          if (joker && 1 == threes && 0 == twos) {
            lowHand.push(threesArray[0]);
            lowHand.push(threesArray[0]);
            var tempCards = newCards.slice(0);
            lowHand[0] = exports.paigowUtils.pickCard(lowHand[0], tempCards);
            lowHand[1] = exports.paigowUtils.pickCard(lowHand[1], tempCards);
            var tempLowRank = exports.paigowUtils.bitfieldCards(lowHand);
            var tempHighRank = exports.paigowUtils.bitfieldCards(tempCards);
            if (tempHighRank <= tempLowRank) {
              twos = 1;
              threes = 0;
              twosArray = threesArray;
              threesArray = [];
            }
            lowHand = [];
          }
          if (0 == twos && 0 == threes) {
            lowHand = exports.paigowUtils.tryAllCategories(newCards);
            dontPick = true;
          } else if (1 == twos && 0 == threes) {
            var tempCards = newCards.slice(0);
            exports.paigowUtils.pickCard(twosArray[0], tempCards);
            exports.paigowUtils.pickCard(twosArray[0], tempCards);
            var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
            var tempType = tempHand >> 20;
            if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) {
              lowHand.push(twosArray[0]);
              lowHand.push(twosArray[0]);
            } else if (1 != counts[14] || 2 != counts[13] && 2 != counts[12] && 2 != counts[11] && 2 != counts[10]) {
              lowHand = exports.paigowUtils.tryAllCategories(newCards);
              dontPick = true;
            } else {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(14, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              var tempType = tempHand >> 20;
              if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) {
                dontPick = true;
                for (var i = 0; i < newCards.length; i++) if (52 == newCards[i] || newCards[i] % 13 == 0) {
                  lowHand.push(newCards[i]);
                  break;
                }
                counts[14]--;
                if (6 == tempType || 9 == tempType) {
                  var colors = [ 0, 0, 0, 0 ];
                  for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && newCards[i] % 13 != 0 && colors[Math.floor(newCards[i] / 13)]++;
                  if (joker && 52 != lowHand[0]) for (var i = 0; i < 4; i++) colors[i]++;
                  for (var i = 0; i < 5; i++) {
                    var c = 0;
                    c = 9 == tempType ? (tempHand >> 16 & 15) - i : tempHand >> 4 * i & 15;
                    counts[c] > 0 && counts[c]--;
                  }
                  for (var i = 0; i < newCards.length; i++) if (52 != newCards[i] && newCards[i] % 13 != 0 && counts[newCards[i] % 13 + 1] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)]) {
                    lowHand.push(newCards[i]);
                    break;
                  }
                } else {
                  for (var i = 0; i < 5; i++) {
                    var c = (tempHand >> 16 & 15) - i;
                    counts[c] > 0 && counts[c]--;
                  }
                  for (var i = 0; i < newCards.length; i++) if (newCards[i] % 13 != 0 && counts[newCards[i] % 13] >= 1) {
                    lowHand.push(newCards[i]);
                    break;
                  }
                }
              } else {
                lowHand.push(14);
                counts[14]--;
                for (var i = 9; i >= 2; i--) if (1 == counts[i]) {
                  lowHand.push(i);
                  break;
                }
              }
            }
          } else if (2 == twos) if (twosArray[0] >= 2 && twosArray[0] <= 6 && twosArray[1] >= 2 && twosArray[1] <= 6) if (counts[14] >= 1) {
            lowHand.push(14);
            counts[14]--;
            for (var i = 14; i >= 2; i--) if (1 == counts[i]) {
              lowHand.push(i);
              break;
            }
          } else {
            var tempCards = newCards.slice(0);
            if (6 == typeOfHand || 9 == typeOfHand) {
              dontPick = true;
              var colors = [ 0, 0, 0, 0 ];
              for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && colors[Math.floor(newCards[i] / 13)]++;
              if (joker) for (var i = 0; i < 4; i++) colors[i]++;
              for (var i = 0; i < 5; i++) {
                var c = 0;
                c = 6 == typeOfHand ? handCards >> 4 * i & 15 : (handCards >> 16 & 15) - i;
                counts[c] > 0 && counts[c]--;
              }
              for (var i = 0; i < newCards.length; i++) (52 == newCards[i] && counts[14] >= 1 || newCards[i] % 13 == 0 && counts[14] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)] || counts[newCards[i] % 13 + 1] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)]) && lowHand.push(newCards[i]);
            } else {
              for (var i = 0; i < 5; i++) {
                var c = (handCards >> 16 & 15) - i;
                counts[c] > 0 && counts[c]--;
              }
              for (var i = 14; i >= 2; i--) {
                if (counts[i] >= 2) {
                  lowHand.push(i);
                  lowHand.push(i);
                  break;
                }
                if (1 == counts[i]) {
                  lowHand.push(i);
                  if (2 == lowHand.length) break;
                }
              }
            }
          } else {
            var pair1 = twosArray[0];
            var pair2 = twosArray[1];
            var levelOfPair1 = exports.paigowUtils.levelOfPair(pair1);
            var levelOfPair2 = exports.paigowUtils.levelOfPair(pair2);
            if (14 == pair1) {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else if (1 == levelOfPair1 && 1 == levelOfPair2) lowHand.push(high); else if ((2 == levelOfPair1 || 3 == levelOfPair1) && 1 == levelOfPair2 || 2 == levelOfPair1 && 2 == levelOfPair2) if (14 == high) lowHand.push(high); else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            }
            if (1 == lowHand.length) {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(high, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              lowHand.push(15 & tempHand);
            }
          } else if (3 == twos) {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else if (1 == threes && 0 == twos) {
            dontPick = true;
            var colors = [ 0, 0, 0, 0 ];
            for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && colors[Math.floor(newCards[i] / 13)]++;
            if (joker) for (var i = 0; i < 4; i++) colors[i]++;
            for (var i = 0; i < newCards.length; i++) {
              var c = newCards[i] % 13 + 1;
              1 == c && (c = 14);
              if (52 != newCards[i] && c == threesArray[0] && 5 != colors[Math.floor(newCards[i] / 13)]) {
                lowHand.push(newCards[i]);
                if (2 == lowHand.length) break;
              }
            }
          } else if (1 == threes && 1 == twos) if (2 == twosArray[0] && 1 == counts[14] && 1 == counts[13]) {
            lowHand.push(14);
            lowHand.push(13);
          } else {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else if (1 == threes && 2 == twos) {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else {
            lowHand.push(threesArray[0]);
            lowHand.push(threesArray[0]);
          }
        } else if (8 == typeOfHand) {
          var fours = handCards >> 16 & 15;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2 || tempHand >> 20 == 3) if (14 == fours) {
            lowHand.push(fours);
            lowHand.push(fours);
          } else {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else if (fours >= 2 && fours <= 6) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else if (fours >= 7 && fours <= 10) if (14 == (tempHand >> 16 & 15)) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else {
            lowHand.push(fours);
            lowHand.push(fours);
          } else {
            lowHand.push(fours);
            lowHand.push(fours);
          }
        } else if (7 == typeOfHand) {
          var threes = handCards >> 16 & 15;
          var twos = 15 & handCards;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2) if (2 == twos && 14 == (tempHand >> 8 & 15) && 13 == (tempHand >> 4 & 15)) {
            lowHand.push(14);
            lowHand.push(13);
          } else {
            lowHand.push(twos);
            lowHand.push(twos);
          } else if (tempHand >> 20 == 3) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 16 & 15);
          } else {
            lowHand.push(threes);
            lowHand.push(threes);
          }
        } else if (11 == typeOfHand) {
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2 && 13 == (tempHand >> 16 & 15)) {
            lowHand.push(13);
            lowHand.push(13);
          } else {
            lowHand.push(14);
            lowHand.push(14);
          }
        }
        if (!dontPick) {
          lowHand[0] = exports.paigowUtils.pickCard(lowHand[0], newCards);
          lowHand[1] = exports.paigowUtils.pickCard(lowHand[1], newCards);
        }
        return lowHand;
      }
    };
    var PaiGowPoker = function() {
      function PaiGowPoker(tableID, callback) {
        void 0 === callback && (callback = null);
        this.injectPromise = exports.paigowUtils.promiseInjector(this);
        this.tableID = tableID;
        setTimeout(function() {
          callback && callback(null);
        }, 100);
      }
      PaiGowPoker.prototype.sortCard = function(cards) {
        var cardType = exports.paigowUtils.bitfieldCards(cards);
        return exports.paigowUtils.sortCard(cardType, cards);
      };
      PaiGowPoker.prototype.sendRequest = function(api, body, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var http, url, data;
          return __generator(this, function(_a) {
            if (!callback) return [ 2, this.injectPromise(this.sendRequest, api, body) ];
            try {
              http = new XMLHttpRequest();
              url = gameHost + "/" + api;
              http.open("POST", url);
              http.setRequestHeader("Content-Type", "application/json");
              http.onreadystatechange = function() {
                if (4 == this.readyState) if (200 == this.status) {
                  var result = JSON.parse(this.responseText);
                  "undefined" != typeof result.error ? callback(result.error, null) : callback(null, result);
                } else callback(this.statusText, null);
              };
              data = JSON.stringify(body);
              console.log("data:", data);
              http.send(data);
            } catch (error) {
              callback(error, null);
            }
            return [ 2 ];
          });
        });
      };
      PaiGowPoker.prototype.getTableStatus = function(playerID, callback) {
        void 0 === playerID && (playerID = "");
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID
            };
            return [ 2, this.sendRequest("get_table", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.getGameStatus = function(playerID, callback) {
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
      PaiGowPoker.prototype.joinTable = function(seatID, playerID, mainBet, sideBet, fortuneBet, callback) {
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
      PaiGowPoker.prototype.splitCard = function(lowHand, playerID, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              playerID: playerID,
              lowHand: lowHand
            };
            return [ 2, this.sendRequest("split_card", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.leaveTable = function(playerID, callback) {
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
      PaiGowPoker.prototype.placeBet = function(playerID, mainBet, sideBet, fortuneBet, callback) {
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
      PaiGowPoker.prototype.deposit = function(serviceToken, amount, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken,
              amount: amount
            };
            return [ 2, this.sendRequest("deposit", param, callback) ];
          });
        });
      };
      return PaiGowPoker;
    }();
    exports.PaiGowPoker = PaiGowPoker;
    exports.paiGowPoker2 = new PaiGowPoker(PaiGowContext_1.globalConstant.tableId);
    cc._RF.pop();
  }, {
    "./PaiGowContext": "PaiGowContext"
  } ],
  PaiGowPoker: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5bcd5PDQr9Jy6LtIyq3w6ME", "PaiGowPoker");
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
    var PaiGowContext_1 = require("./PaiGowContext");
    var gameHost = "https://clover.kimicat.com/mpaigow";
    exports.paigowUtils = {
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
      },
      toCardsArray: function(cards) {
        var cardsArray = [];
        for (var i = 0; i <= 52; i++) {
          cards.mod(2).isZero() || cardsArray.push(i);
          cards = cards.sub(cards.mod(2)).div(2);
        }
        return cardsArray;
      },
      popcount: function(cards) {
        var maskedCards = 16383 & cards;
        maskedCards = ((43690 & maskedCards) >> 1) + (21845 & maskedCards);
        maskedCards = ((52428 & maskedCards) >> 2) + (13107 & maskedCards);
        maskedCards = ((61680 & maskedCards) >> 4) + (3855 & maskedCards);
        maskedCards = ((65280 & maskedCards) >> 8) + (255 & maskedCards);
        return maskedCards;
      },
      bitscan: function(cards) {
        var res = 0;
        if (0 != (65280 & cards)) {
          res += 8;
          cards &= 65280;
        }
        if (0 != (61680 & cards)) {
          res += 4;
          cards &= 61680;
        }
        if (0 != (52428 & cards)) {
          res += 2;
          cards &= 52428;
        }
        0 != (43690 & cards) && (res += 1);
        return res;
      },
      bitfieldCards: function(cards) {
        var suites = [ 0, 0, 0, 0 ];
        var joker = false;
        for (var i = 0; i < cards.length; i++) 52 == cards[i] ? joker = true : suites[Math.floor(cards[i] / 13)] |= 1 << cards[i] % 13;
        for (var i = 0; i < 4; i++) suites[i] |= (1 & suites[i]) << 13;
        var counts = [ 0, 0, 0, 0 ];
        counts[3] = suites[0] & suites[1] & suites[2] & suites[3];
        var a = suites[0] | suites[1] | suites[2] | suites[3];
        var b = a & ~counts[3];
        var c = suites[0] ^ suites[1] ^ suites[2] ^ suites[3];
        counts[1] = b & ~c;
        counts[2] = suites[0] & suites[1] & suites[2] & ~suites[3] | suites[0] & suites[1] & ~suites[2] & suites[3] | suites[0] & ~suites[1] & suites[2] & suites[3] | ~suites[0] & suites[1] & suites[2] & suites[3];
        counts[0] = c & ~counts[2];
        for (var i = 0; i < 4; i++) counts[i] &= -2;
        if (joker && 0 != (8192 & counts[3])) return 12513006;
        if (joker) {
          counts[3] |= 8192 & counts[2];
          counts[2] &= -8193;
          counts[2] |= 8192 & counts[1];
          counts[1] &= -8193;
          counts[1] |= 8192 & counts[0];
          counts[0] &= -8193;
          0 == (8192 & a) && (counts[0] |= 8192);
        }
        for (var i = 0; i < 4; i++) if (7681 == (7681 & suites[i]) || joker && 4 == exports.paigowUtils.popcount(7681 & suites[i])) return 11403264;
        var mask = 7936;
        var largestCard = 13;
        while (mask >= 31) {
          for (var i = 0; i < 4; i++) if ((suites[i] & mask) == mask || joker && 4 == exports.paigowUtils.popcount(suites[i] & mask)) return 9437184 + (largestCard << 16);
          mask >>= 1;
          largestCard--;
        }
        if (0 != counts[3]) {
          var fours = exports.paigowUtils.bitscan(counts[3]) + 1;
          return 8388608 + 69904 * fours;
        }
        if (0 != counts[2]) {
          var threes = exports.paigowUtils.bitscan(counts[2]);
          var threeOrTwo = counts[2] ^ 1 << threes | counts[1];
          if (0 != threeOrTwo) {
            var twos = exports.paigowUtils.bitscan(threeOrTwo);
            return 7340032 + 69888 * (threes + 1) + 17 * (twos + 1);
          }
        }
        if (joker) for (var i = 0; i < 4; i++) {
          var idx = exports.paigowUtils.bitscan(16383 & ~suites[i]);
          suites[i] |= 1 << idx;
        }
        var cardIndices = 0;
        for (var i = 0; i < 4; i++) {
          var number = exports.paigowUtils.popcount(suites[i] >> 1);
          if (number >= 5) {
            var p = 5;
            var indices = 0;
            var c = suites[i];
            while (p > 0) {
              var idx = exports.paigowUtils.bitscan(c);
              c ^= 1 << idx;
              indices <<= 4;
              indices += idx + 1;
              p--;
            }
            indices > cardIndices && (cardIndices = indices);
          }
        }
        if (cardIndices > 0) return 6291456 + cardIndices;
        var allCounts = a;
        mask = 15872;
        largestCard = 14;
        while (mask >= 31) {
          if ((allCounts & mask) == mask || joker && 4 == exports.paigowUtils.popcount(allCounts & mask)) return 5242880 + (largestCard << 16);
          mask >>= 1;
          largestCard--;
        }
        if (0 != counts[2]) {
          var threes = exports.paigowUtils.bitscan(counts[2]) + 1;
          return 4194304 + 69888 * threes;
        }
        if (exports.paigowUtils.popcount(counts[1] >> 1) >= 2) {
          var twosA = exports.paigowUtils.bitscan(counts[1]);
          var twosB = exports.paigowUtils.bitscan(counts[1] ^ 1 << twosA);
          var one = exports.paigowUtils.bitscan(counts[0]);
          return 3145728 + 69632 * (twosA + 1) + 272 * (twosB + 1) + one + 1;
        }
        if (0 != counts[1]) {
          var twos = exports.paigowUtils.bitscan(counts[1]) + 1;
          var res = 512 + 17 * twos;
          var p = 3;
          var c = counts[0];
          while (p > 0) {
            var idx = exports.paigowUtils.bitscan(c);
            c ^= 1 << idx;
            res <<= 4;
            res += idx + 1;
            p--;
          }
          return res;
        }
        var res = 1;
        var p = 5;
        var c = counts[0];
        while (p > 0) {
          var idx = exports.paigowUtils.bitscan(c);
          c ^= 1 << idx;
          res <<= 4;
          res += idx + 1;
          p--;
        }
        return res;
      },
      matchCardValue: function(card, value) {
        return card % 13 + 1 == value || 14 == value && card % 13 == 0;
      },
      pickCard: function(value, cards) {
        var joker = false;
        var jokerIdx = 0;
        for (var i = 0; i < cards.length; i++) if (52 == cards[i]) {
          joker = true;
          jokerIdx = i;
        } else if (exports.paigowUtils.matchCardValue(cards[i], value)) {
          var r = cards[i];
          cards.splice(i, 1);
          return r;
        }
        if (joker) {
          cards.splice(jokerIdx, 1);
          return 52;
        }
        console.trace("Error");
        throw "error";
      },
      sortCard: function(type, cards) {
        var tempCards = cards.slice(0);
        var handType = type >> 20;
        var result = [];
        if (2 == cards.length) {
          for (var i = 0; i < 2; i++) {
            var pick = type >> 4 * (4 - i) & 15;
            if (0 == pick) break;
            result.push(exports.paigowUtils.pickCard(pick, tempCards));
          }
          result.concat(tempCards);
          return result;
        }
        if (5 == cards.length) {
          if (10 == handType || 9 == handType || 5 == handType) {
            var startCard = type >> 16 & 15;
            for (var i = 0; i < 5; i++) {
              result.push(exports.paigowUtils.pickCard(startCard, tempCards));
              startCard--;
            }
            return result;
          }
          for (var i = 0; i < 5; i++) {
            var pick = type >> 4 * (4 - i) & 15;
            if (0 == pick) break;
            result.push(exports.paigowUtils.pickCard(pick, tempCards));
          }
          result = result.concat(tempCards);
          return result;
        }
        if (7 == cards.length) {
          tempCards.sort(function(a, b) {
            var aValue = a % 13;
            0 == aValue && (aValue = 13);
            var bValue = b % 13;
            0 == bValue && (bValue = 13);
            return bValue - aValue;
          });
          return tempCards;
        }
        return false;
      },
      typeName: function(type) {
        var nameArray = [ "", "High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush", "Five Aces" ];
        return nameArray[type >> 20 & 15];
      },
      remainCards: function(lowCards, allCards) {
        var res = [];
        for (var i = 0; i < allCards.length; i++) lowCards.includes(allCards[i]) || res.push(allCards[i]);
        return res;
      },
      tryAllCategories: function(cards) {
        var bestType = 0;
        var bestCard1 = 0;
        var bestCard2 = 0;
        var bestCard1v = 0;
        var bestCard2v = 0;
        for (var i = 0; i < cards.length; i++) {
          var tempCards = cards.slice(0);
          tempCards.splice(i, 1);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          var tempType = tempHand >> 20;
          if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) for (var j = i; j < tempCards.length; j++) {
            var tempCards2 = tempCards.slice(0);
            tempCards2.splice(j, 1);
            var tempHand2 = exports.paigowUtils.bitfieldCards(tempCards2);
            var tempType2 = tempHand2 >> 20;
            if (5 == tempType2 || 6 == tempType2 || 9 == tempType2 || 10 == tempType2) {
              var card1 = cards[i] % 13;
              var card1v = cards[i];
              var card2 = tempCards[j] % 13;
              var card2v = tempCards[j];
              0 == card1 && (card1 = 13);
              0 == card2 && (card2 = 13);
              52 == cards[i] && (card1 = 13);
              52 == tempCards[j] && (card2 = 13);
              if (card1 < card2) {
                var t = card2;
                card2 = card1;
                card1 = t;
                t = card2v;
                card2v = card1v;
                card1v = t;
              }
              if (bestType < tempType2) {
                bestCard1 = card1;
                bestCard1v = card1v;
                bestCard2 = card2;
                bestCard2v = card2v;
                bestType = tempType2;
              } else if (bestCard1 == card1) {
                if (bestType < tempType2) {
                  bestType = tempType2;
                  bestCard1v = card1v;
                  bestCard2 = card2;
                  bestCard2v = card2v;
                } else if (bestType == tempType2 && bestCard2 < card2) {
                  bestCard1v = card1v;
                  bestCard2 = card2;
                  bestCard2v = card2v;
                }
              } else if (bestCard1 < card1 && bestType <= tempType2) {
                bestCard1 = card1;
                bestCard1v = card1v;
                bestCard2 = card2;
                bestCard2v = card2v;
                bestType = tempType2;
              }
            }
          }
        }
        return [ bestCard1v, bestCard2v ];
      },
      levelOfPair: function(index) {
        return index >= 2 && index <= 6 ? 1 : index >= 7 && index <= 10 ? 2 : 3;
      },
      houseWay: function(cards) {
        if (7 != cards.length) return false;
        var hand = exports.paigowUtils.bitfieldCards(cards);
        var typeOfHand = hand >> 20;
        var handCards = 1048575 & hand;
        var lowHand = [];
        var newCards = cards.slice(0);
        var dontPick = false;
        var joker = false;
        for (var i = 0; i < cards.length; i++) 52 == newCards[i] && (joker = true);
        if (1 == typeOfHand) {
          lowHand.push(handCards >> 12 & 15);
          lowHand.push(handCards >> 8 & 15);
        } else if (2 == typeOfHand) {
          lowHand.push(handCards >> 8 & 15);
          lowHand.push(handCards >> 4 & 15);
        } else if (3 == typeOfHand) {
          var pair1 = handCards >> 16 & 15;
          var pair2 = handCards >> 8 & 15;
          var high = 15 & handCards;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(pair1, tempCards);
          exports.paigowUtils.pickCard(pair1, tempCards);
          exports.paigowUtils.pickCard(pair2, tempCards);
          exports.paigowUtils.pickCard(pair2, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2) {
            lowHand.push(pair1);
            lowHand.push(pair1);
          } else {
            var levelOfPair1 = exports.paigowUtils.levelOfPair(pair1);
            var levelOfPair2 = exports.paigowUtils.levelOfPair(pair2);
            if (14 == pair1) {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else if (1 == levelOfPair1 && 1 == levelOfPair2) lowHand.push(high); else if ((2 == levelOfPair1 || 3 == levelOfPair1) && 1 == levelOfPair2 || 2 == levelOfPair1 && 2 == levelOfPair2) if (14 == high) lowHand.push(high); else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            }
            if (1 == lowHand.length) {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(high, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              lowHand.push(15 & tempHand);
            }
          }
        } else if (4 == typeOfHand) {
          var threes = handCards >> 16 & 15;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 4) {
            lowHand.push(threes);
            lowHand.push(threes);
          } else if (14 == threes) {
            lowHand.push(14);
            lowHand.push(tempHand >> 16 & 15);
          } else {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          }
        } else if (5 == typeOfHand || 6 == typeOfHand || 9 == typeOfHand || 10 == typeOfHand) {
          var counts = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
          var joker = false;
          for (var i = 0; i < newCards.length; i++) if (52 == newCards[i]) joker = true; else {
            var c = newCards[i] % 13 + 1;
            1 == c && (c = 14);
            counts[c]++;
          }
          joker && counts[14]++;
          var twos = 0;
          var threes = 0;
          var twosArray = [];
          var threesArray = [];
          for (var i = 14; i >= 2; i--) if (2 == counts[i]) {
            twos++;
            twosArray.push(i);
          } else if (3 == counts[i]) {
            threes++;
            threesArray.push(i);
          }
          if (joker && 1 == threes && 0 == twos) {
            lowHand.push(threesArray[0]);
            lowHand.push(threesArray[0]);
            var tempCards = newCards.slice(0);
            lowHand[0] = exports.paigowUtils.pickCard(lowHand[0], tempCards);
            lowHand[1] = exports.paigowUtils.pickCard(lowHand[1], tempCards);
            var tempLowRank = exports.paigowUtils.bitfieldCards(lowHand);
            var tempHighRank = exports.paigowUtils.bitfieldCards(tempCards);
            if (tempHighRank <= tempLowRank) {
              twos = 1;
              threes = 0;
              twosArray = threesArray;
              threesArray = [];
            }
            lowHand = [];
          }
          if (0 == twos && 0 == threes) {
            lowHand = exports.paigowUtils.tryAllCategories(newCards);
            dontPick = true;
          } else if (1 == twos && 0 == threes) {
            var tempCards = newCards.slice(0);
            exports.paigowUtils.pickCard(twosArray[0], tempCards);
            exports.paigowUtils.pickCard(twosArray[0], tempCards);
            var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
            var tempType = tempHand >> 20;
            if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) {
              lowHand.push(twosArray[0]);
              lowHand.push(twosArray[0]);
            } else if (1 != counts[14] || 2 != counts[13] && 2 != counts[12] && 2 != counts[11] && 2 != counts[10]) {
              lowHand = exports.paigowUtils.tryAllCategories(newCards);
              dontPick = true;
            } else {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(14, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              var tempType = tempHand >> 20;
              if (5 == tempType || 6 == tempType || 9 == tempType || 10 == tempType) {
                dontPick = true;
                for (var i = 0; i < newCards.length; i++) if (52 == newCards[i] || newCards[i] % 13 == 0) {
                  lowHand.push(newCards[i]);
                  break;
                }
                counts[14]--;
                if (6 == tempType || 9 == tempType) {
                  var colors = [ 0, 0, 0, 0 ];
                  for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && newCards[i] % 13 != 0 && colors[Math.floor(newCards[i] / 13)]++;
                  if (joker && 52 != lowHand[0]) for (var i = 0; i < 4; i++) colors[i]++;
                  for (var i = 0; i < 5; i++) {
                    var c = 0;
                    c = 9 == tempType ? (tempHand >> 16 & 15) - i : tempHand >> 4 * i & 15;
                    counts[c] > 0 && counts[c]--;
                  }
                  for (var i = 0; i < newCards.length; i++) if (52 != newCards[i] && newCards[i] % 13 != 0 && counts[newCards[i] % 13 + 1] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)]) {
                    lowHand.push(newCards[i]);
                    break;
                  }
                } else {
                  for (var i = 0; i < 5; i++) {
                    var c = (tempHand >> 16 & 15) - i;
                    counts[c] > 0 && counts[c]--;
                  }
                  for (var i = 0; i < newCards.length; i++) if (newCards[i] % 13 != 0 && counts[newCards[i] % 13] >= 1) {
                    lowHand.push(newCards[i]);
                    break;
                  }
                }
              } else {
                lowHand.push(14);
                counts[14]--;
                for (var i = 9; i >= 2; i--) if (1 == counts[i]) {
                  lowHand.push(i);
                  break;
                }
              }
            }
          } else if (2 == twos) if (twosArray[0] >= 2 && twosArray[0] <= 6 && twosArray[1] >= 2 && twosArray[1] <= 6) if (counts[14] >= 1) {
            lowHand.push(14);
            counts[14]--;
            for (var i = 14; i >= 2; i--) if (1 == counts[i]) {
              lowHand.push(i);
              break;
            }
          } else {
            var tempCards = newCards.slice(0);
            if (6 == typeOfHand || 9 == typeOfHand) {
              dontPick = true;
              var colors = [ 0, 0, 0, 0 ];
              for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && colors[Math.floor(newCards[i] / 13)]++;
              if (joker) for (var i = 0; i < 4; i++) colors[i]++;
              for (var i = 0; i < 5; i++) {
                var c = 0;
                c = 6 == typeOfHand ? handCards >> 4 * i & 15 : (handCards >> 16 & 15) - i;
                counts[c] > 0 && counts[c]--;
              }
              for (var i = 0; i < newCards.length; i++) (52 == newCards[i] && counts[14] >= 1 || newCards[i] % 13 == 0 && counts[14] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)] || counts[newCards[i] % 13 + 1] >= 1 && 5 != colors[Math.floor(newCards[i] / 13)]) && lowHand.push(newCards[i]);
            } else {
              for (var i = 0; i < 5; i++) {
                var c = (handCards >> 16 & 15) - i;
                counts[c] > 0 && counts[c]--;
              }
              for (var i = 14; i >= 2; i--) {
                if (counts[i] >= 2) {
                  lowHand.push(i);
                  lowHand.push(i);
                  break;
                }
                if (1 == counts[i]) {
                  lowHand.push(i);
                  if (2 == lowHand.length) break;
                }
              }
            }
          } else {
            var pair1 = twosArray[0];
            var pair2 = twosArray[1];
            var levelOfPair1 = exports.paigowUtils.levelOfPair(pair1);
            var levelOfPair2 = exports.paigowUtils.levelOfPair(pair2);
            if (14 == pair1) {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else if (1 == levelOfPair1 && 1 == levelOfPair2) lowHand.push(high); else if ((2 == levelOfPair1 || 3 == levelOfPair1) && 1 == levelOfPair2 || 2 == levelOfPair1 && 2 == levelOfPair2) if (14 == high) lowHand.push(high); else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            } else {
              lowHand.push(pair2);
              lowHand.push(pair2);
            }
            if (1 == lowHand.length) {
              var tempCards = newCards.slice(0);
              exports.paigowUtils.pickCard(high, tempCards);
              var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
              lowHand.push(15 & tempHand);
            }
          } else if (3 == twos) {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else if (1 == threes && 0 == twos) {
            dontPick = true;
            var colors = [ 0, 0, 0, 0 ];
            for (var i = 0; i < newCards.length; i++) 52 != newCards[i] && colors[Math.floor(newCards[i] / 13)]++;
            if (joker) for (var i = 0; i < 4; i++) colors[i]++;
            for (var i = 0; i < newCards.length; i++) {
              var c = newCards[i] % 13 + 1;
              1 == c && (c = 14);
              if (52 != newCards[i] && c == threesArray[0] && 5 != colors[Math.floor(newCards[i] / 13)]) {
                lowHand.push(newCards[i]);
                if (2 == lowHand.length) break;
              }
            }
          } else if (1 == threes && 1 == twos) if (2 == twosArray[0] && 1 == counts[14] && 1 == counts[13]) {
            lowHand.push(14);
            lowHand.push(13);
          } else {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else if (1 == threes && 2 == twos) {
            lowHand.push(twosArray[0]);
            lowHand.push(twosArray[0]);
          } else {
            lowHand.push(threesArray[0]);
            lowHand.push(threesArray[0]);
          }
        } else if (8 == typeOfHand) {
          var fours = handCards >> 16 & 15;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          exports.paigowUtils.pickCard(fours, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2 || tempHand >> 20 == 3) if (14 == fours) {
            lowHand.push(fours);
            lowHand.push(fours);
          } else {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else if (fours >= 2 && fours <= 6) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else if (fours >= 7 && fours <= 10) if (14 == (tempHand >> 16 & 15)) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 12 & 15);
          } else {
            lowHand.push(fours);
            lowHand.push(fours);
          } else {
            lowHand.push(fours);
            lowHand.push(fours);
          }
        } else if (7 == typeOfHand) {
          var threes = handCards >> 16 & 15;
          var twos = 15 & handCards;
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          exports.paigowUtils.pickCard(threes, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2) if (2 == twos && 14 == (tempHand >> 8 & 15) && 13 == (tempHand >> 4 & 15)) {
            lowHand.push(14);
            lowHand.push(13);
          } else {
            lowHand.push(twos);
            lowHand.push(twos);
          } else if (tempHand >> 20 == 3) {
            lowHand.push(tempHand >> 16 & 15);
            lowHand.push(tempHand >> 16 & 15);
          } else {
            lowHand.push(threes);
            lowHand.push(threes);
          }
        } else if (11 == typeOfHand) {
          var tempCards = newCards.slice(0);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          exports.paigowUtils.pickCard(14, tempCards);
          var tempHand = exports.paigowUtils.bitfieldCards(tempCards);
          if (tempHand >> 20 == 2 && 13 == (tempHand >> 16 & 15)) {
            lowHand.push(13);
            lowHand.push(13);
          } else {
            lowHand.push(14);
            lowHand.push(14);
          }
        }
        if (!dontPick) {
          lowHand[0] = exports.paigowUtils.pickCard(lowHand[0], newCards);
          lowHand[1] = exports.paigowUtils.pickCard(lowHand[1], newCards);
        }
        return lowHand;
      }
    };
    var PaiGowPoker = function() {
      function PaiGowPoker(tableID, callback) {
        void 0 === callback && (callback = null);
        this.injectPromise = exports.paigowUtils.promiseInjector(this);
        this.tableID = tableID;
        setTimeout(function() {
          callback && callback(null);
        }, 100);
      }
      PaiGowPoker.prototype.sortCard = function(cards) {
        var cardType = exports.paigowUtils.bitfieldCards(cards);
        return exports.paigowUtils.sortCard(cardType, cards);
      };
      PaiGowPoker.prototype.sendRequest = function(api, body, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var http, url, data;
          return __generator(this, function(_a) {
            if (!callback) return [ 2, this.injectPromise(this.sendRequest, api, body) ];
            try {
              http = new XMLHttpRequest();
              url = gameHost + "/" + api;
              http.open("POST", url);
              http.setRequestHeader("Content-Type", "application/json");
              http.onreadystatechange = function() {
                if (4 == this.readyState) if (200 == this.status) {
                  var result = JSON.parse(this.responseText);
                  "undefined" != typeof result.error ? callback(result.error, null) : callback(null, result);
                } else callback(this.statusText, null);
              };
              data = JSON.stringify(body);
              console.log("data:", data);
              http.send(data);
            } catch (error) {
              callback(error, null);
            }
            return [ 2 ];
          });
        });
      };
      PaiGowPoker.prototype.getTableStatus = function(serviceToken, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            if ("function" == typeof serviceToken) {
              callback = serviceToken;
              serviceToken = null;
            }
            param = {
              tableID: this.tableID
            };
            null != serviceToken && (param["serviceToken"] = serviceToken);
            return [ 2, this.sendRequest("get_table", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.joinTable = function(serviceToken, seatID, mainBet, sideBet, fortuneBet, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken,
              seatID: seatID,
              mainBet: mainBet,
              sideBet: sideBet,
              fortuneBet: fortuneBet
            };
            return [ 2, this.sendRequest("request_seat", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.splitCard = function(serviceToken, lowHand, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken,
              lowHand: lowHand
            };
            return [ 2, this.sendRequest("split_card", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.leaveTable = function(serviceToken, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken
            };
            return [ 2, this.sendRequest("leave_seat", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.placeBet = function(serviceToken, mainBet, sideBet, fortuneBet, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken,
              mainBet: mainBet,
              sideBet: sideBet,
              fortuneBet: fortuneBet
            };
            return [ 2, this.sendRequest("place_bet", param, callback) ];
          });
        });
      };
      PaiGowPoker.prototype.deposit = function(serviceToken, amount, callback) {
        void 0 === callback && (callback = false);
        return __awaiter(this, void 0, void 0, function() {
          var param;
          return __generator(this, function(_a) {
            param = {
              tableID: this.tableID,
              serviceToken: serviceToken,
              amount: amount
            };
            return [ 2, this.sendRequest("deposit", param, callback) ];
          });
        });
      };
      return PaiGowPoker;
    }();
    exports.PaiGowPoker = PaiGowPoker;
    exports.paiGowPoker = new PaiGowPoker(PaiGowContext_1.globalConstant.tableId);
    cc._RF.pop();
  }, {
    "./PaiGowContext": "PaiGowContext"
  } ],
  PaiGowSetting: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7dffhw+W1Kl5AVEacruREN", "PaiGowSetting");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var CocosUtils_1 = require("./CocosUtils");
    var PaiGowSetting = function() {
      function PaiGowSetting(currency, language, music, volume) {
        this.languages = [ "EN", "CN" ];
        this._currency = currency;
        this._language = language;
        this._music = music;
        this._volume = volume;
      }
      Object.defineProperty(PaiGowSetting.prototype, "currency", {
        get: function() {
          return this._currency;
        },
        set: function(value) {
          this._currency = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaiGowSetting.prototype, "language", {
        get: function() {
          return this._language;
        },
        set: function(value) {
          this._language = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaiGowSetting.prototype, "music", {
        get: function() {
          return this._music;
        },
        set: function(value) {
          this._music = value;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(PaiGowSetting.prototype, "volume", {
        get: function() {
          return this._volume;
        },
        set: function(value) {
          this._volume = value;
        },
        enumerable: true,
        configurable: true
      });
      PaiGowSetting.prototype.changeLanguage = function() {
        var _this = this;
        var index = -1;
        this.languages.forEach(function(item, i, arr) {
          item === _this.language && (index = i + 1 >= arr.length ? 0 : i + 1);
        });
        -1 != index ? this.language = this.languages[index] : CocosUtils_1.default.warn("change language error.");
      };
      PaiGowSetting.prototype.triggerLanguage = function(node) {
        var _this = this;
        node.children.forEach(function(child) {
          var js = cc.js.getClassByName(child.name);
          if (js) {
            var childJs = child.getComponent(child.name);
            "function" === typeof childJs.language && childJs.language();
          }
          _this.triggerLanguage(child);
        });
      };
      return PaiGowSetting;
    }();
    exports.default = PaiGowSetting;
    exports.paiGowSetting = new PaiGowSetting("TRX", "EN", false, false);
    cc._RF.pop();
  }, {
    "./CocosUtils": "CocosUtils"
  } ],
  PaiGowTableInfo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4368cgw25RL4bnlGzYP9G3/", "PaiGowTableInfo");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.gamerInfo = {
      gamerId: ""
    };
    exports.betLimit = {
      mainBetMin: 0,
      mainBetMax: 0,
      aceHighBetMax: 0,
      aceHighBetMin: 0,
      fortuneBetMax: 0,
      fortuneBetMin: 0
    };
    exports.lastBetValue = {
      mainBet: 0,
      aceHighBet: 0,
      fortuneBet: 0
    };
    var TABLE_BUTTON;
    (function(TABLE_BUTTON) {
      TABLE_BUTTON[TABLE_BUTTON["HOUSEWAY"] = 0] = "HOUSEWAY";
      TABLE_BUTTON[TABLE_BUTTON["SPLIT"] = 1] = "SPLIT";
      TABLE_BUTTON[TABLE_BUTTON["BET"] = 2] = "BET";
      TABLE_BUTTON[TABLE_BUTTON["LEAVE"] = 3] = "LEAVE";
    })(TABLE_BUTTON = exports.TABLE_BUTTON || (exports.TABLE_BUTTON = {}));
    var TABLE_BUTTONS;
    (function(TABLE_BUTTONS) {
      TABLE_BUTTONS[TABLE_BUTTONS["PLACE_BET"] = 0] = "PLACE_BET";
      TABLE_BUTTONS[TABLE_BUTTONS["SPLIT"] = 1] = "SPLIT";
    })(TABLE_BUTTONS = exports.TABLE_BUTTONS || (exports.TABLE_BUTTONS = {}));
    var TABLE_BET_ZONE;
    (function(TABLE_BET_ZONE) {
      TABLE_BET_ZONE[TABLE_BET_ZONE["MAIN"] = 0] = "MAIN";
      TABLE_BET_ZONE[TABLE_BET_ZONE["ACE_HIGH"] = 1] = "ACE_HIGH";
      TABLE_BET_ZONE[TABLE_BET_ZONE["FORTUNE"] = 2] = "FORTUNE";
    })(TABLE_BET_ZONE = exports.TABLE_BET_ZONE || (exports.TABLE_BET_ZONE = {}));
    var ResultType;
    (function(ResultType) {
      ResultType["MAIN"] = "main";
      ResultType["ACE_HIGH"] = "aceHigh";
      ResultType["FORTUNE"] = "fortune";
    })(ResultType = exports.ResultType || (exports.ResultType = {}));
    var GameStatus;
    (function(GameStatus) {
      GameStatus["NO_GAME"] = "NO_GAME";
      GameStatus["SPLIT_CARD"] = "SPLIT_CARD";
    })(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
    var MainBetResult;
    (function(MainBetResult) {
      MainBetResult[MainBetResult["PUSH"] = 0] = "PUSH";
      MainBetResult[MainBetResult["PLAYER_WON"] = 1] = "PLAYER_WON";
      MainBetResult[MainBetResult["PLAYER_LOSE"] = 2] = "PLAYER_LOSE";
      MainBetResult[MainBetResult["ACE_HIGH_PUSH"] = 3] = "ACE_HIGH_PUSH";
    })(MainBetResult = exports.MainBetResult || (exports.MainBetResult = {}));
    exports.resultDescription = {
      main: {
        0: "",
        1: "MAIN 2x",
        2: "",
        3: "PUSH"
      },
      aceHigh: {
        0: "",
        1: "Dealer Ace High w/o Joker 5x",
        2: "Dealer Ace High w/ Joker 15x",
        3: "Both Dealer and Player Ace High 40x"
      },
      fortune: {
        0: "",
        1: "",
        2: "",
        3: "",
        4: "Three of a Kind 3x",
        5: "Straight 2x",
        6: "Flush 4x",
        7: "Full House 5x",
        8: "Four of a Kind 25x",
        9: "Straight Flush 50x",
        10: "Royal Flush 150x",
        11: "Five Aces 400x",
        12: "7-card Straight Flush w/ Joker 1000x",
        13: "Royal Flush + Royal Match 2000x",
        14: "7-card Straight Flush w/o Joker 8000x"
      }
    };
    cc._RF.pop();
  }, {} ],
  PaiGowTable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5279ctoyxFE/5PagkLm2VFG", "PaiGowTable");
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
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowTableInfo_1 = require("../lib/PaiGowTableInfo");
    var PaiGowPoker2_1 = require("../lib/PaiGowPoker2");
    var PaiGowMessage_1 = require("../lib/PaiGowMessage");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var PaiGowTable = function(_super) {
      __extends(PaiGowTable, _super);
      function PaiGowTable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.Bet = null;
        _this.Dealer = null;
        _this.HandCard = null;
        _this.TableCard = null;
        _this.ResultEffect = null;
        _this.chips = null;
        return _this;
      }
      PaiGowTable.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
        this.initTableCard();
      };
      PaiGowTable.prototype.initTableCard = function() {
        CocosUtils_1.default.log("init TableCard.");
        var tableCard = cc.instantiate(this.TableCard);
        var tableCardJs = tableCard.getComponent("TableCard");
        tableCardJs.init();
        this.setTableCard(tableCard);
        CocosUtils_1.default.log("init Dealer.");
        var dealer = cc.instantiate(this.Dealer);
        var dealerJs = dealer.getComponent("Dealer");
        dealerJs.init();
        this.setDealer(dealer);
      };
      PaiGowTable.prototype.start = function() {
        this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, true);
        this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.LEAVE, true);
        this.setMessage(PaiGowMessage_1.PaiGowMessage.EnterYourID);
      };
      PaiGowTable.prototype.onHouseWayClick = function() {
        var handCard = this.getHandCard();
        if (null !== handCard) {
          var handCardJs = handCard.getComponent("HandCard");
          var cards = handCardJs.getCards(null, true);
          var low = PaiGowPoker2_1.paigowUtils.houseWay(cards);
          handCardJs.pickCards(low);
        } else CocosUtils_1.default.error("BUG: you can't click houseWay without hand card.");
      };
      PaiGowTable.prototype.onSplitClick = function() {
        var _this = this;
        var handCard = this.getHandCard();
        if (null !== handCard) {
          var handCardJs_1 = handCard.getComponent("HandCard");
          var pickCards = handCardJs_1.getCards(true);
          var lowRank = PaiGowPoker2_1.paigowUtils.bitfieldCards(pickCards);
          var unPickCards = handCardJs_1.getCards(false);
          var highRank = PaiGowPoker2_1.paigowUtils.bitfieldCards(unPickCards);
          if (handCardJs_1.getPickedCount() !== handCardJs_1.pickLimit) PaiGowContext_1.getAlert().show(PaiGowMessage_1.PaiGowMessage.Tap2Card); else if (lowRank >= highRank) PaiGowContext_1.getAlert().show(PaiGowMessage_1.PaiGowMessage.SplitIllegal); else {
            this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.HOUSEWAY, false);
            this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.SPLIT, false);
            handCardJs_1.enableClickCards(false);
            PaiGowPoker2_1.paiGowPoker2.splitCard(pickCards, PaiGowTableInfo_1.gamerInfo.gamerId).catch(function(err) {
              CocosUtils_1.default.error(err);
              PaiGowContext_1.getAlert().show(err);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.HOUSEWAY, true);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.SPLIT, true);
              handCardJs_1.enableClickCards(true);
            }).then(function(res) {
              if (!res) return;
              _this.destroyHandCard();
              _this.updateDealer(res["dealerCards"], res["dealerLowHand"], true);
              _this.updateTableCard(res["playerLowHand"], res["playerCards"], res["dealerLowHand"], res["dealerCards"], false, true);
              _this.updateBet(res["mainBetWin"], res["sideBetWin"], res["fortuneBetWin"]);
              _this.updateResultEffect(res["mainBet"], res["sideBet"], res["fortuneBet"], res["mainBetWin"], res["sideBetWin"], res["fortuneBetWin"], res["mainBetResult"], res["sideBetResult"], res["fortuneBetResult"]);
              _this.showTableButtons(PaiGowTableInfo_1.TABLE_BUTTONS.PLACE_BET);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.LEAVE, true);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, true);
              PaiGowTableInfo_1.lastBetValue.mainBet = res["mainBet"];
              PaiGowTableInfo_1.lastBetValue.aceHighBet = res["sideBet"];
              PaiGowTableInfo_1.lastBetValue.fortuneBet = res["fortuneBet"];
            });
          }
        } else CocosUtils_1.default.error("BUG: you can't click split without hand card.");
      };
      PaiGowTable.prototype.onBetClick = function() {
        var _this = this;
        "" === PaiGowTableInfo_1.gamerInfo.gamerId ? PaiGowContext_1.getPopup().showOption(PaiGowMessage_1.PaiGowMessage.EnterYourID, function(str) {
          PaiGowPoker2_1.paiGowPoker2.getGameStatus(str).catch(function(err) {
            PaiGowContext_1.getAlert().show(err);
            CocosUtils_1.default.error(err);
          }).then(function(res) {
            if (!res) return;
            PaiGowTableInfo_1.gamerInfo.gamerId = str;
            if (res["status"] === PaiGowTableInfo_1.GameStatus.SPLIT_CARD) {
              _this.clearResultEffect();
              _this.updateTableCard(null, null, null, null, true);
              _this.updateHandCard(res["playerCards"]);
              _this.updateDealer(res["dealerCards"], res["dealerLowHand"]);
              _this.updateBet(res["mainBet"], res["sideBet"], res["fortuneBet"]);
              _this.setMessage(PaiGowMessage_1.PaiGowMessage.Tap2Card);
              _this.showTableButtons(PaiGowTableInfo_1.TABLE_BUTTONS.SPLIT);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.HOUSEWAY, true);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.SPLIT, true);
            } else PaiGowPoker2_1.paiGowPoker2.getTableStatus(str).catch(function(err) {
              PaiGowContext_1.getAlert().show(err);
              CocosUtils_1.default.error(err);
            }).then(function(res) {
              if (!res) return;
              PaiGowTableInfo_1.betLimit.mainBetMax = res["betLimits"]["maxMainBet"];
              PaiGowTableInfo_1.betLimit.mainBetMin = res["betLimits"]["minMainBet"];
              PaiGowTableInfo_1.betLimit.aceHighBetMax = res["betLimits"]["maxSideBet"];
              PaiGowTableInfo_1.betLimit.aceHighBetMin = res["betLimits"]["minSideBet"];
              PaiGowTableInfo_1.betLimit.fortuneBetMax = res["betLimits"]["maxFortuneBet"];
              PaiGowTableInfo_1.betLimit.fortuneBetMin = res["betLimits"]["minFortuneBet"];
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, false);
              var bet = cc.instantiate(_this.Bet);
              var betJs = bet.getComponent("Bet");
              betJs.init();
              betJs.table = _this;
              PaiGowContext_1.getCurrentSceneNode().addChild(bet);
              _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, true);
            });
          });
        }, true, 6) : PaiGowPoker2_1.paiGowPoker2.getTableStatus(PaiGowTableInfo_1.gamerInfo.gamerId).catch(function(err) {
          PaiGowContext_1.getAlert().show(err);
          CocosUtils_1.default.error(err);
        }).then(function(res) {
          if (!res) return;
          PaiGowTableInfo_1.betLimit.mainBetMax = res["betLimits"]["maxMainBet"];
          PaiGowTableInfo_1.betLimit.mainBetMin = res["betLimits"]["minMainBet"];
          PaiGowTableInfo_1.betLimit.aceHighBetMax = res["betLimits"]["maxSideBet"];
          PaiGowTableInfo_1.betLimit.aceHighBetMin = res["betLimits"]["minSideBet"];
          PaiGowTableInfo_1.betLimit.fortuneBetMax = res["betLimits"]["maxFortuneBet"];
          PaiGowTableInfo_1.betLimit.fortuneBetMin = res["betLimits"]["minFortuneBet"];
          _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, false);
          var bet = cc.instantiate(_this.Bet);
          var betJs = bet.getComponent("Bet");
          betJs.init();
          betJs.table = _this;
          PaiGowContext_1.getCurrentSceneNode().addChild(bet);
          _this.enableButtonClick(PaiGowTableInfo_1.TABLE_BUTTON.BET, true);
        });
      };
      PaiGowTable.prototype.onLeaveClick = function() {
        PaiGowContext_1.getPopup().showOption(PaiGowMessage_1.PaiGowMessage.SureToLeave, function() {
          cc.game.end();
        }, false, 0);
      };
      PaiGowTable.prototype.getHandCard = function() {
        return this.root["$ui"]["handCards"].getChildByName("HandCard");
      };
      PaiGowTable.prototype.setHandCard = function(handCard) {
        this.root["$ui"]["handCards"].addChild(handCard);
      };
      PaiGowTable.prototype.destroyHandCard = function() {
        this.root["$ui"]["handCards"].removeAllChildren(true);
      };
      PaiGowTable.prototype.getDealer = function() {
        return this.root["$ui"]["dealerSeat"].getChildByName("Dealer");
      };
      PaiGowTable.prototype.setDealer = function(dealer) {
        this.root["$ui"]["dealerSeat"].addChild(dealer);
      };
      PaiGowTable.prototype.getTableCard = function() {
        return this.root["$ui"]["tableCards"].getChildByName("TableCard");
      };
      PaiGowTable.prototype.setTableCard = function(tableCard) {
        this.root["$ui"]["tableCards"].addChild(tableCard);
      };
      PaiGowTable.prototype.setResultEffect = function(resultEffect) {
        return this.root["$ui"]["resultEffect"].addChild(resultEffect);
      };
      PaiGowTable.prototype.getResultEffect = function() {
        return this.root["$ui"]["resultEffect"].getChildByName("ResultEffect");
      };
      PaiGowTable.prototype.updateResultEffect = function(mainBet, aceHighBet, fortuneBet, mainBetWin, aceHighBetWin, fortuneBetWin, mainBetResult, aceHighBetResult, fortuneBetResult) {
        if (null !== this.getResultEffect()) return;
        var totalWin = mainBetWin + aceHighBetWin + fortuneBetWin;
        var totalBet = mainBet + aceHighBet + fortuneBet;
        var result = totalWin - totalBet;
        result >= 0 ? this.setMessage(PaiGowMessage_1.PaiGowMessage.Win + result + " in total.\n" + PaiGowMessage_1.PaiGowMessage.PleaseBet) : this.setMessage(PaiGowMessage_1.PaiGowMessage.Lose + -result + " in total.\n" + PaiGowMessage_1.PaiGowMessage.PleaseBet);
        var mainMessage = "";
        mainBetResult == PaiGowTableInfo_1.MainBetResult.PUSH ? mainMessage += "PUSH" : mainBetResult == PaiGowTableInfo_1.MainBetResult.ACE_HIGH_PUSH ? mainMessage += "ACE HIGH PUSH" : mainBetWin > 0 && (mainMessage += mainBetWin);
        var aciHighMessages = [];
        if (aceHighBetWin > 0) {
          aciHighMessages.push(PaiGowTableInfo_1.resultDescription["aceHigh"][aceHighBetResult + ""]);
          aciHighMessages.push(aceHighBetWin);
        }
        var fortuneMessages = [];
        if (fortuneBetWin > 0) {
          fortuneMessages.push(PaiGowTableInfo_1.resultDescription["fortune"][fortuneBetResult + ""]);
          fortuneMessages.push(fortuneBetWin);
        }
        var resultEffect = cc.instantiate(this.ResultEffect);
        var resultEffectJs = resultEffect.getComponent("ResultEffect");
        resultEffectJs.init();
        this.setResultEffect(resultEffect);
        resultEffectJs.play(result > 0, mainMessage, aciHighMessages, fortuneMessages);
      };
      PaiGowTable.prototype.updateLeave = function() {
        this.destroyHandCard();
        var tableCard = this.getTableCard();
        var tableCardJs = tableCard.getComponent("TableCard");
        tableCardJs.resetDefaultCards();
        this.showTableButtons(PaiGowTableInfo_1.TABLE_BUTTONS.PLACE_BET);
      };
      PaiGowTable.prototype.updateTableCard = function(playerLow, playerCards, dealerLow, dealerCards, justReset, doFadeOutType) {
        void 0 === dealerLow && (dealerLow = null);
        void 0 === dealerCards && (dealerCards = null);
        void 0 === justReset && (justReset = false);
        void 0 === doFadeOutType && (doFadeOutType = false);
        var tableCard = this.getTableCard();
        var tableCardJs = tableCard.getComponent("TableCard");
        tableCardJs.resetDefaultCards();
        if (justReset) return;
        if (null === playerLow) {
          tableCardJs.setAceHigh(playerCards, false);
          return;
        }
        var playerHigh = PaiGowPoker2_1.paigowUtils.remainCards(playerLow, playerCards);
        var dealerHigh = PaiGowPoker2_1.paigowUtils.remainCards(dealerLow, dealerCards);
        if (null === dealerLow) {
          tableCardJs.setLowCard(playerLow, false, false);
          tableCardJs.setHighCard(playerHigh, false, false);
        } else {
          var playerLowType = PaiGowPoker2_1.paigowUtils.bitfieldCards(playerLow);
          var dealerLowType = PaiGowPoker2_1.paigowUtils.bitfieldCards(dealerLow);
          tableCardJs.setLowCard(playerLow, playerLowType > dealerLowType, doFadeOutType);
          var playerHighType = PaiGowPoker2_1.paigowUtils.bitfieldCards(playerHigh);
          var dealerHighType = PaiGowPoker2_1.paigowUtils.bitfieldCards(dealerHigh);
          tableCardJs.setHighCard(playerHigh, playerHighType > dealerHighType, doFadeOutType);
        }
      };
      PaiGowTable.prototype.updateHandCard = function(cards) {
        var handCard = this.getHandCard();
        if (null === handCard) {
          CocosUtils_1.default.log("init HandCard.");
          handCard = cc.instantiate(this.HandCard);
          var handCardJs = handCard.getComponent("HandCard");
          handCardJs.table = this;
          handCardJs.init();
          handCardJs.addCards(cards);
          this.setHandCard(handCard);
        } else CocosUtils_1.default.warn("updateHandCard() should only for initial one time per round.");
      };
      PaiGowTable.prototype.updateBet = function(mainBet, aceHighBet, fortuneBet) {
        this.updateZoneChip(PaiGowTableInfo_1.TABLE_BET_ZONE.MAIN, mainBet);
        this.updateZoneChip(PaiGowTableInfo_1.TABLE_BET_ZONE.ACE_HIGH, aceHighBet);
        this.updateZoneChip(PaiGowTableInfo_1.TABLE_BET_ZONE.FORTUNE, fortuneBet);
      };
      PaiGowTable.prototype.updateDealer = function(cards, lowCards, doFadeOutType) {
        void 0 === lowCards && (lowCards = null);
        void 0 === doFadeOutType && (doFadeOutType = false);
        var dealer = this.getDealer();
        if (null === dealer) {
          CocosUtils_1.default.log("init Dealer.");
          dealer = cc.instantiate(this.Dealer);
          var dealerJs_1 = dealer.getComponent("Dealer");
          dealerJs_1.init();
          this.setDealer(dealer);
        }
        var dealerJs = dealer.getComponent("Dealer");
        if (null === lowCards) dealerJs.setAceHigh(cards); else {
          var high = PaiGowPoker2_1.paigowUtils.remainCards(lowCards, cards);
          dealerJs.setCards(lowCards, high, doFadeOutType);
        }
      };
      PaiGowTable.prototype.setMessage = function(message) {
        this.root["$ui"]["message"].active = "" !== message;
        this.root["$ui"]["$message"]["#title"]["label"].string = message;
      };
      PaiGowTable.prototype.enableButtonClick = function(button, enable) {
        switch (button) {
         case PaiGowTableInfo_1.TABLE_BUTTON.BET:
          this.root["$buttons"]["$placeBet"]["#bet"]["button"].interactable = enable;
          break;

         case PaiGowTableInfo_1.TABLE_BUTTON.HOUSEWAY:
          this.root["$buttons"]["$split"]["#houseWay"]["button"].interactable = enable;
          break;

         case PaiGowTableInfo_1.TABLE_BUTTON.LEAVE:
          this.root["$buttons"]["$placeBet"]["#leave"]["button"].interactable = enable;
          break;

         case PaiGowTableInfo_1.TABLE_BUTTON.SPLIT:
          this.root["$buttons"]["$split"]["#split"]["button"].interactable = enable;
        }
      };
      PaiGowTable.prototype.showTableButtons = function(buttons) {
        this.root["$buttons"]["placeBet"].active = false;
        this.root["$buttons"]["split"].active = false;
        switch (buttons) {
         case PaiGowTableInfo_1.TABLE_BUTTONS.PLACE_BET:
          this.root["$buttons"]["placeBet"].active = true;
          break;

         case PaiGowTableInfo_1.TABLE_BUTTONS.SPLIT:
          this.root["$buttons"]["split"].active = true;
        }
      };
      PaiGowTable.prototype.getChipSprite = function(chipName) {
        var sprite = null;
        var sprites = this.chips.getSpriteFrames();
        sprites.forEach(function(item) {
          sprite = item.name === chipName ? item : sprite;
        });
        return sprite;
      };
      PaiGowTable.prototype.addChipToZone = function(zone, value) {
        var chip = new cc.Node();
        var sprite = chip.addComponent(cc.Sprite);
        sprite.spriteFrame = this.getChipSprite(value + "");
        zone.addChild(chip);
      };
      PaiGowTable.prototype.updateZoneChip = function(betZone, value) {
        var zone = null;
        switch (betZone) {
         case PaiGowTableInfo_1.TABLE_BET_ZONE.ACE_HIGH:
          zone = this.getAceHighBetZone();
          break;

         case PaiGowTableInfo_1.TABLE_BET_ZONE.FORTUNE:
          zone = this.getFortuneBetZone();
          break;

         case PaiGowTableInfo_1.TABLE_BET_ZONE.MAIN:
          zone = this.getMainBetZone();
        }
        zone.removeAllChildren(true);
        var chipQuota = [ 1e3, 500, 100, 25 ];
        while (value > 0) for (var i = 0; i < chipQuota.length; i++) if (value >= chipQuota[i]) {
          value -= chipQuota[i];
          this.addChipToZone(zone, chipQuota[i]);
          break;
        }
      };
      PaiGowTable.prototype.getMainBetZone = function() {
        return this.root["$ui"]["$bet"]["$mainBet"]["$zone"]["layout"];
      };
      PaiGowTable.prototype.getAceHighBetZone = function() {
        return this.root["$ui"]["$bet"]["$aceHighBet"]["$zone"]["layout"];
      };
      PaiGowTable.prototype.getFortuneBetZone = function() {
        return this.root["$ui"]["$bet"]["$fortuneBet"]["$zone"]["layout"];
      };
      PaiGowTable.prototype.clearResultEffect = function() {
        this.root["$ui"]["resultEffect"].removeAllChildren(true);
      };
      __decorate([ property(cc.Prefab) ], PaiGowTable.prototype, "Bet", void 0);
      __decorate([ property(cc.Prefab) ], PaiGowTable.prototype, "Dealer", void 0);
      __decorate([ property(cc.Prefab) ], PaiGowTable.prototype, "HandCard", void 0);
      __decorate([ property(cc.Prefab) ], PaiGowTable.prototype, "TableCard", void 0);
      __decorate([ property(cc.Prefab) ], PaiGowTable.prototype, "ResultEffect", void 0);
      __decorate([ property(cc.SpriteAtlas) ], PaiGowTable.prototype, "chips", void 0);
      PaiGowTable = __decorate([ ccclass ], PaiGowTable);
      return PaiGowTable;
    }(cc.Component);
    exports.default = PaiGowTable;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowMessage": "PaiGowMessage",
    "../lib/PaiGowPoker2": "PaiGowPoker2",
    "../lib/PaiGowTableInfo": "PaiGowTableInfo"
  } ],
  PaiGowText: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "96cc34DLxZOq6YX0m16jrLY", "PaiGowText");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EN = {
      Menu: [ {
        title: "GameRule",
        content: "Game Rule"
      }, {
        title: "Paytable",
        content: "Paytable"
      }, {
        title: "Language",
        content: "Language"
      } ],
      GameRule: {
        Buttons: {
          HowToPlay: "\u2660 How to Play",
          WayToBet: "\u2660 Way To Bet",
          HandRank: "\u2660 Hand Rank"
        },
        Content: {
          HowToPlay: "\ud83d\udcb0 There are 53 cards (52 standard deck + a joker) used for the Open Face PaiGow Poker. Arrange two poker hands with the seven cards that are dealt:\n \u2022 A two-card \u201clow\u201d hand \n \u2022 A five-card \u201chigh\u201d hand \n A joker may be used as an ace or a wild card to complete the five-card hand to a straight or a flush. ! If the best five-card hand the dealer can make is ace-high, then the hand is an automatic push.",
          WayToBet: "\ud83d\udcb0 Main Bet: The player wins both hands and wins payout of 1:1.\n\n\ud83d\udcb0Fortune Bet: Best hand possible among the player\u2019s seven cards.Please see Paytable for the odds.\n\n\ud83d\udcb0Ace High Bet: Dealer\u2019s high hand is an Ace High Pai Gow or both player and dealer\u2019s hand Ace High Pai Gow. Please see Paytable for the odds.",
          HandRank: {
            Top: "The rank of each card used in Fortune Pai Gow Poker, in order of highest to lowest rank, shall be: Ace, King, Queen, Jack, Ten, 9, 8, 7, 6, 5, 4, 3, 2. All suits shall be considered equal in rank. \n! Ace, 2, 3, 4, 5, is the lowest ranked Straight. \n\n Following is the rank of Open Face PaiGow Poker:",
            HandCardList: [ {
              title: "7 Card Straight Flush (No Joker)",
              description: "A hand that consists of seven cards of the same suit in consecutive ranking that does not utilize a joker. An ace, king, queen, jack, 10, 9, and 8 is the highest ranked 7 Card Straight Flush (No Joker) hand and a 7, 6, 5, 4, 3, 2 and ace is the lowest ranked 7 Card Straight Flush (No Joker) hand."
            }, {
              title: "Royal Flush + Royal Match",
              description: "Royal Flush (with or without joker) with the additional two cards of a King and Queen in suit, but of a different suit than the five cards comprising the Royal Flush."
            }, {
              title: "7 Card Straight Flush (With Joker)",
              description: "A hand that consists of seven cards of the same suit in consecutive ranking that utilizes a joker. An ace, king, queen, jack, 10, 9, and 8 is the highest ranked 7 Card Straight Flush (With Joker) hand, with one of those cards being substituted with a joker, and a 7, 6, 5, 4, 3, 2 and ace is the lowest ranked 7 Card Straight Flush (With Joker) hand, with one of those cards being substituted with a joker."
            }, {
              title: "Five Aces",
              description: "A hand that consists of five cards containing all aces (4 Aces + Joker)."
            }, {
              title: "Royal Flush",
              description: "A hand that consists of an ace, king, queen, jack and 10 of the same suit."
            }, {
              title: "Straight Flush",
              description: "A hand that consists of five cards of the same suit in consecutive ranking. A king, queen, jack, 10 and 9 is the highest ranked Straight Flush and a 5, 4, 3, 2 and ace is the lowest ranked Straight Flush."
            }, {
              title: "Four of a Kind",
              description: "A hand that consists of four cards of the same rank. Four aces is the highest ranked Four of a Kind and four 2\u2019s is the lowest ranked Four of a Kind."
            }, {
              title: "Full House",
              description: "A hand that consists of a Three of a Kind and a Pair. Three aces and two kings is the highest ranked Full House and three 2\u2019s and two 3\u2019s is the lowest ranked Full House."
            }, {
              title: "Flush",
              description: "A hand that consists of five cards of the same suit, but that are not in consecutive ranking. An ace, king, queen, jack and 9 is the highest ranked Flush and a 7, 6, 5, 4, 2 is the lowest ranked Flush."
            }, {
              title: "Straight",
              description: "A hand that consists of five cards that are in consecutive ranking, but that are not the same suit. An ace, king, queen, jack and 10 is the highest ranked Straight and a 5, 4, 3, 2 and Ace is the lowest ranked Straight."
            }, {
              title: "Three of a Kind",
              description: "A hand that consists of three cards of the same rank. Three aces is the highest ranked Three of a Kind and three 2\u2019s is the lowest ranked Three of a Kind."
            }, {
              title: "Two Pairs",
              description: "A hand that consists of two pairs. Two aces and two kings is the highest ranked Two Pairs and two 3\u2019s and two 2\u2019s is the lowest ranked Two Pairs."
            }, {
              title: "One Pairs",
              description: "A hand that consists of two cards of the same rank. Two aces is the highest ranked Pair and two 2\u2019s is the lowest ranked Pair."
            }, {
              title: "High Card",
              description: "A hand that consists of five cards that do not make any of the hands listed above. An ace, king, queen, jack and 9 is the highest ranked High Card hand and 7, 6, 5, 4, 2 is the lowest ranked High Card hand."
            } ],
            Bottom: "! Should a player\u2019s hand rank exactly the same as the Dealer's hand, the Dealer wins. It happens more often in the low hand."
          }
        }
      },
      Paytable: {
        Buttons: {
          PushAceHighBet: "\u2660 Push Ace High Bet",
          FortuneBet: "\u2660 Fortune Bet"
        },
        Content: {
          PushAceHighBet: "Both player and dealer have ace-high pai gow: Pays 40 to 1 \n\nDealer has ace-high pai gow with joker: Pays 15 to 1 \n\nDealer has ace-high pai gow without joker: Pays 5 to 1 \n\nNeither player nor dealer has ace-high pai gow: Loss",
          FortuneBet: {
            FortuneBetList: [ {
              title: "Fortune Bet",
              pays: "Pays"
            }, {
              title: "7 Card Straight Flush (No Joker)",
              pays: "8000 : 1"
            }, {
              title: "Royal Flush + Royal Match",
              pays: "2000 : 1"
            }, {
              title: "7 Card Straight Flush (With Joker)",
              pays: "1000 : 1"
            }, {
              title: "Five Aces",
              pays: "400 : 1"
            }, {
              title: "Royal Flush",
              pays: "150 : 1"
            }, {
              title: "Straight Flush",
              pays: "50 : 1"
            }, {
              title: "Four of a Kind",
              pays: "25 : 1"
            }, {
              title: "Full House",
              pays: "5 : 1"
            }, {
              title: "Flush",
              pays: "4 : 1"
            }, {
              title: "Three of a Kind",
              pays: "3 : 1"
            }, {
              title: "Straight",
              pays: "2 : 1"
            } ]
          }
        }
      }
    };
    var CN = {
      Menu: [ {
        title: "GameRule",
        content: "\u6e38\u620f\u89c4\u5219"
      }, {
        title: "Paytable",
        content: "\u5956\u91d1\u652f\u4ed8\u8868"
      }, {
        title: "Language",
        content: "\u8bed\u8a00"
      } ],
      GameRule: {
        Buttons: {
          HowToPlay: "\u2660 \u6e38\u620f\u89c4\u5219",
          WayToBet: "\u2660 \u5982\u4f55\u4e0b\u6ce8",
          HandRank: "\u2660 \u9ad8\u4e0b\u6bd4\u8f83"
        },
        Content: {
          HowToPlay: "\ud83d\udcb0 \u644a\u5f00\u724c\u4e5d\u6251\u514b\uff08Open Face Pai Gow Poker\uff09\u8fd9\u4e2a\u6e38\u620f\u4f7f\u752853\u5f20\u724c\uff08\u5305\u62ec\u4e00\u5f20\u738b\u724cJoker\uff09\uff0c\u53c2\u4e0e\u8005\u5404\u5f977\u5f20\u724c\u3002\u73a9\u6cd5\u662f\u5c06\u4e03\u5f20\u724c\u5206\u6210\u6700\u597d\u7684\u4e94\u5f20\u53ca\u4e24\u5f20\u724c\uff1a \n \u2022 \u4e24\u5f20\u724c\u7ec4\u4e3a \u4f4e\u624b\u724c\n \u2022 \u4e94\u5f20\u724c\u7ec4\u4e3a \u9ad8\u624b\u724c \u5fc5\u9808\u6bd4\u4e24\u5f20\u4f4e\u724c\u5927\n\u738b\u724c\uff08 Joker \uff09\u53ef\u4ee5\u7528\u6765\u51d1\u6210\u987a\u5b50\uff0c\u540c\u82b1\uff0c\u6216\u987a\u5b50\u540c\u82b1\uff0c\u4e0d\u7136\u5c31\u53ea\u80fd\u5f53\u505a Ace\u3002\n\n\u6ce8\u610f\uff01 \u5982\u679c\u5e84\u5bb6\u53ef\u4ee5\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f35 Ace \u5927\u724c\u724c\u4e5d\uff0c\u6b64\u5c40\u6703\u81ea\u52d5\u5224\u4e3a\u5e73\u5c40\u4ea6\u79f0\u4e3a PUSH \u3002",
          WayToBet: "\ud83d\udcb0 \u4e3b\u8d4c\u6ce8: \u6b32\u83b7\u80dc\uff0c\u73a9\u5bb6\u624b\u4e2d\u8fd9\u4e24\u7ec4\u724c\u5fc5\u987b\u5206\u522b\u9ad8\u4e8e\u5e84\u5bb6\u7684\u4e24\u7ec4\u724c\u3002\u8d62\u94b1\u6bd4\u4f8b\u662f 1:1\u3002\n\n\ud83d\udcb0\u5e78\u8fd0\u7ea2\u5229\u6ce8: \u73a9\u5bb6\u4e0b\u7684\u989d\u5916\u6ce8\uff0c 7 \u5f20\u724c\u7684\u7279\u522b\u7ec4\u5408\u53ef\u4ee5\u83b7\u5f97\u5e78\u8fd0\u7ea2\u5229\uff0c\u6700\u9ad8\u6d3e\u5f69\u7387\u53ef\u9ad8\u8fbe 8000 : 1\uff0c\u6709\u5173\u8d54\u7387\u8bf7\u53c2\u9605\u5956\u91d1\u652f\u4ed8\u8868\u3002\n\n\ud83d\udcb0Ace\u724c\u4e5d\u6ce8: \u5e84\u5bb6\u53ea\u80fd\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u662fAce \u4e3a\u6700\u5927\u724c\u7684\u724c\u4e5d\uff0c\u6216\u662f\u73a9\u5bb6\u4e5f\u540c\u6837\u53ea\u80fd\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3aAce\u5927\u724c\uff0c\u6709\u5173\u8d54\u7387\u8bf7\u53c2\u9605\u5956\u91d1\u652f\u4ed8\u8868\u3002",
          HandRank: {
            Top: "\u644a\u5f00\u724c\u4e5d\u6251\u514b\u4e2d\u4f7f\u7528\u7684\u6bcf\u5f20\u724c\u7684\u5927\u5c0f\uff0c\u6309\u4ece\u9ad8\u5230\u4f4e\u7684\u987a\u5e8f\u6392\u5217\uff0c\u5e94\u4e3a\uff1aA \u6216 \u738b\u724c(Joker)\uff0cK\u56fd\u738b\uff0cQ \u5973\u738b\uff0cJ \u6770\u514b\uff0c10\uff0c9\uff0c8\uff0c7\uff0c6\uff0c5\uff0c4\uff0c3\uff0c2\u3002\n\u6ce8\u610f\uff01A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u7684\u987a\u5b50\u3002\n\n\u724c\u4e5d\u6251\u514b\u7684\u5404\u7c7b\u724c\u578b\u7ec4\u5408\uff1a",
            HandCardList: [ {
              title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4e0d\u4f7f\u7528\u738b\u724c Joker)",
              description: "\u4e03\u5f20\u724c\u7686\u540c\u82b1\u7ec4\u5408\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u5e76\u65e0\u4f7f\u7528\u738b\u724c\uff08Joker\uff09\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\uff0cK\uff0cQ\uff0cJ\uff0c10\u30019\u30018 \u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\uff0c\u53e6\u59167\u30016\u30015\u30014\u30013\u30012\u3001A  \u7684\u4e03\u5f35\u540c\u82b1\u987a\u662f\u6700\u4f4e\u3002"
            }, {
              title: "\u7687\u5bb6\u540c\u82b1\u987a + \u7687\u5bb6\u914d\u5bf9",
              description: "\u4e94\u5f20\u540c\u6837\u82b1\u8272\u7684\u724c\u5206\u522b\u4e3aACE\uff08A\uff09\uff0c\u8001K\uff0c\u7687\u540e\uff08Q\uff09\uff0c\u6770\u514b\uff08J\uff09\u548c10\u4ee5ACE\uff08A\uff09\u4e3a\u9996\uff0c\u4e94\u5f20\u724c\u7686\u662f\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\uff0c\u53e6\u5916\u4e00\u5f20K\u548c\u4e00\u5f20Q\uff0c\u4f46\u4e0e\u7687\u5bb6\u540c\u82b1\u987a\u7684\u4e94\u5f20\u724c\u4e0d\u540c\u3002"
            }, {
              title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4f7f\u7528\u738b\u724c Joker)",
              description: "\u516d\u5f20\u724c\u7686\u540c\u82b1\u548c\u4e00\u5f20\u738b\u724c\uff08Joker\uff09\u7ec4\u5408\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u300110\u30019\u30018\u5176\u4e2d\u4e00\u5f20\u738b\u724c (Joker) \u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\u4e03\u5f35\u540c\u82b1\u987a\uff0c\u53e6\u59167\u30016\u30015\u30014\u30013\u30012\u3001A \u5176\u4e2d\u4e00\u5f20\u738b\u724c (Joker) \u7684\u4e03\u5f35\u540c\u82b1\u987a \u662f\u6700\u4f4e\u7684\u3002"
            }, {
              title: "\u4e94\u4e2a A",
              description: "5\u5f20Aces\u8fd9\u662f\u9ad8\u624b\u724c\u91cc\u6700\u9ad8\u7684\u7ec4\u5408\u3002\u56e0\u4e3a\u6709\u4e00\u5f20\u738b\u724c(Joker)\u6240\u4ee5\u540c\u65f6\u67095\u5f20Aces\u662f\u6700\u56f0\u96be\u7684\u3002"
            }, {
              title: "\u7687\u5bb6\u540c\u82b1\u987a",
              description: "\u4e94\u5f20\u540c\u6837\u82b1\u8272\u7684\u724c\u5206\u522b\u4e3aACE\uff08A\uff09\uff0c\u8001K\uff0c\u7687\u540e\uff08Q\uff09\uff0c\u6770\u514b\uff08J\uff09\u548c10\u4ee5ACE\uff08A\uff09\u4e3a\u9996\uff0c\u4e94\u5f20\u724c\u7686\u662f\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u3002"
            }, {
              title: "\u540c\u82b1\u987a",
              description: "\u4e94\u5f20\u724c\u7686\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\uff0c\u4f46\u5e76\u975e\u4ee5ACE\uff08A\uff09\u4e3a\u9996\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cK\u3001Q\u3001J\u300110\u30019\u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u5916A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u540c\u82b1\u987a\u3002"
            }, {
              title: "\u56db\u6761",
              description: "\u56db\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
            }, {
              title: "\u846b\u82a6",
              description: "\u4e09\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u548c\u53e6\u5916\u4e24\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
            }, {
              title: "\u540c\u82b1",
              description: "\u4e94\u5f35\u82b1\u8272\u76f8\u540c\u7684\u724c\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u30019\u7684\u540c\u82b1\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u59167\u30016\u30015\u30014\u30012\u662f\u6700\u4f4e\u7684\u7684\u540c\u82b1\u3002"
            }, {
              title: "\u987a\u5b50\uff08\u86c7\uff09",
              description: "\u4e94\u5f20\u53f7\u7801\u987a\u5e8f\u6392\u5217\u7684\u724c\u3002\u3014ACE\uff08A\uff09\u724c\u53ef\u7528\u4f5c\u6700\u9ad8\u6216\u6700\u4f4e\u3015\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u300110\u7684\u987a\u5b50\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u5916A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u7684\u987a\u5b50\u3002"
            }, {
              title: "\u4e09\u5bf9(\u4e09\u6761)",
              description: "\u4e09\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
            }, {
              title: "\u4e24\u5bf9",
              description: "\u4e03\u5f20\u724c\u4e2d\u5176\u4e2d\u6709\u4e24\u5bf9\u4e0d\u540c\u7684\u4e00\u5bf9\u3002"
            }, {
              title: "\u5bf9\u5b50",
              description: "\u4e03\u5f20\u724c\u4e2d\u5176\u4e2d\u6709\u4e00\u5bf9\u76f8\u540c\u7684\u724c\u3002"
            }, {
              title: "\u5927\u724c",
              description: "\u6ca1\u6709\u5bf9\u5b50\u3001\u987a\u5b50\u6216\u540c\u82b1 \u2013 \u8ba9\u6700\u5927\u7684\u724c\u4f5c\u9ad8\u624b\u724c\uff08\u4e94\u5f20\u724c\uff09\uff0c\u7b2c\u4e8c\u5927\u7684\u724c\u4f5c\u4f4e\u624b\u724c\u3002"
            } ],
            Bottom: "\u6ce8\u610f\uff01\u5e84\u548c\u73a9\u5bb6\u540c\u724c\u7684\u60c5\u51b5\u4e0b\uff0c\u5e84\u5bb6\u8d62\u3002"
          }
        }
      },
      Paytable: {
        Buttons: {
          PushAceHighBet: "\u2660 Ace\u724c\u4e5d\u6ce8",
          FortuneBet: "\u2660 \u5e78\u8fd0\u7ea2\u5229"
        },
        Content: {
          PushAceHighBet: " \u2022 \u5e84\u5bb6\u548c\u73a9\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f20 Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 40 \u500d\n \u2022 \u5e84\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u6709\u738b\u724c (Joker) \u7684\u4e03\u5f35 Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 15 \u500d\n \u2022 \u5e84\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f20Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 5 \u500d\n \u2022 \u5e84\u5bb6\u548c\u73a9\u5bb6\u90fd\u7121Ace \u5927\u724c\u724c\u4e5d\uff1a \u7121\u6d3e\u5f69",
          FortuneBet: {
            FortuneBetList: [ {
              title: "\u5e78\u8fd0\u7ea2\u5229",
              pays: "\u6d3e\u5f69\u7387"
            }, {
              title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4e0d\u4f7f\u7528\u738b\u724c Joker)",
              pays: "8000 : 1"
            }, {
              title: "\u7687\u5bb6\u540c\u82b1\u987a + \u7687\u5bb6\u914d\u5bf9",
              pays: "2000 : 1"
            }, {
              title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4f7f\u7528\u738b\u724c Joker)",
              pays: "1000 : 1"
            }, {
              title: "\u4e94\u4e2a A",
              pays: "400 : 1"
            }, {
              title: "\u7687\u5bb6\u540c\u82b1\u987a",
              pays: "150 : 1"
            }, {
              title: "\u540c\u82b1\u987a",
              pays: "50 : 1"
            }, {
              title: "\u56db\u6761",
              pays: "25 : 1"
            }, {
              title: "\u846b\u82a6",
              pays: "5 : 1"
            }, {
              title: "\u540c\u82b1",
              pays: "4 : 1"
            }, {
              title: "\u4e09\u5bf9(\u4e09\u6761)",
              pays: "3 : 1"
            }, {
              title: "\u987a\u5b50\uff08\u86c7\uff09",
              pays: "2 : 1"
            } ]
          }
        }
      }
    };
    exports.paiGowText = {
      EN: EN,
      CN: CN
    };
    cc._RF.pop();
  }, {} ],
  Paytable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2450e66IDhIFImNNpUbjvUQ", "Paytable");
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
    var PaiGowSetting_1 = require("../lib/PaiGowSetting");
    var PaiGowText_1 = require("../lib/PaiGowText");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Paytable = function(_super) {
      __extends(Paytable, _super);
      function Paytable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.FortuneBetRule = null;
        _this.activeColor = new cc.Color(218, 255, 0);
        _this.nonActiveColor = new cc.Color(255, 255, 255);
        _this.activeButton = "";
        return _this;
      }
      Paytable.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
        this.language();
      };
      Paytable.prototype.start = function() {
        this.onPushAceHighBetClick();
      };
      Paytable.prototype.language = function() {
        var language = PaiGowSetting_1.paiGowSetting.language;
        this.root["$ui"]["$buttons"]["$pushAceHighBet"]["#title"]["label"].string = PaiGowText_1.paiGowText[language]["Paytable"]["Buttons"]["PushAceHighBet"];
        this.root["$ui"]["$buttons"]["$fortuneBet"]["#title"]["label"].string = PaiGowText_1.paiGowText[language]["Paytable"]["Buttons"]["FortuneBet"];
      };
      Paytable.prototype.onPushAceHighBetClick = function() {
        if ("pushAceHighBet" === this.activeButton) return;
        this.resetRuleLayout();
        var language = PaiGowSetting_1.paiGowSetting.language;
        var item = cc.instantiate(this.root["$ui"]["$rule"]["$view"]["$content"]["item"]);
        item.getComponent(cc.Label).string = PaiGowText_1.paiGowText[language]["Paytable"]["Content"]["PushAceHighBet"];
        item.active = true;
        this.root["$ui"]["$rule"]["$view"]["content"].addChild(item);
        this.setButtonsActiveColor("pushAceHighBet");
      };
      Paytable.prototype.onFortuneBetClick = function() {
        var _this = this;
        if ("fortuneBet" === this.activeButton) return;
        this.resetRuleLayout();
        var language = PaiGowSetting_1.paiGowSetting.language;
        var fortuneBetList = PaiGowText_1.paiGowText[language]["Paytable"]["Content"]["FortuneBet"]["FortuneBetList"];
        fortuneBetList.forEach(function(item) {
          var fortuneBetRule = cc.instantiate(_this.FortuneBetRule);
          var fortuneBetRuleJs = fortuneBetRule.getComponent("FortuneBetRule");
          fortuneBetRuleJs.init();
          fortuneBetRuleJs.setTitleLabel(item["title"]);
          fortuneBetRuleJs.setPaysLabel(item["pays"]);
          _this.root["$ui"]["$rule"]["$view"]["content"].addChild(fortuneBetRule);
        });
        this.setButtonsActiveColor("fortuneBet");
      };
      Paytable.prototype.setButtonsActiveColor = function(nodeName) {
        var _this = this;
        this.root["$ui"]["buttons"].children.forEach(function(child) {
          child.getComponent(cc.Button) && (child.name === nodeName ? child.getChildByName("title").color = _this.activeColor : child.getChildByName("title").color = _this.nonActiveColor);
        });
        this.activeButton = nodeName;
      };
      Paytable.prototype.resetRuleLayout = function() {
        var rule = this.root["$ui"]["$rule"]["$view"]["content"];
        while (rule.childrenCount > 1) rule.removeChild(rule.children[1]);
      };
      __decorate([ property(cc.Prefab) ], Paytable.prototype, "FortuneBetRule", void 0);
      Paytable = __decorate([ ccclass ], Paytable);
      return Paytable;
    }(cc.Component);
    exports.default = Paytable;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowSetting": "PaiGowSetting",
    "../lib/PaiGowText": "PaiGowText"
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
    var CocosUtils_1 = require("../lib/CocosUtils");
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
    "../lib/CocosUtils": "CocosUtils"
  } ],
  ResultEffect: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e22c0yvSGBAHJvD2VOWgRle", "ResultEffect");
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
    var ResultEffect = function(_super) {
      __extends(ResultEffect, _super);
      function ResultEffect() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.timeLine = 0;
        return _this;
      }
      ResultEffect.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      ResultEffect.prototype.play = function(youWin, mainMessage, aceHighMessages, fortuneMessages) {
        var _this = this;
        var messageActions = [];
        if (youWin) {
          var youWinAction = cc.spawn(cc.fadeIn(.5), cc.moveBy(.5, 0, 230));
          this.root["youWin"].runAction(youWinAction);
          this.timeLine += .5;
        }
        if ("" !== mainMessage) {
          var mainActions = [];
          mainActions.push(cc.delayTime(this.timeLine));
          mainActions.push(cc.fadeIn(.5));
          mainActions.push(cc.delayTime(2));
          mainActions.push(cc.fadeOut(.5));
          this.root["mainBet"].runAction(cc.sequence(mainActions));
          messageActions.push(cc.delayTime(this.timeLine));
          messageActions.push(cc.callFunc(function() {
            _this.setMessage(mainMessage);
          }));
          messageActions.push(cc.fadeIn(.5));
          messageActions.push(cc.delayTime(2));
          messageActions.push(cc.fadeOut(.5));
          this.timeLine += 3;
        }
        if (aceHighMessages.length > 0) {
          var aceHighActions = [];
          aceHighActions.push(cc.delayTime(this.timeLine));
          aceHighActions.push(cc.fadeIn(.5));
          aceHighActions.push(cc.delayTime(2 + 2 * (aceHighActions.length - 1)));
          aceHighActions.push(cc.fadeOut(.5));
          this.root["aceHighBet"].runAction(cc.sequence(aceHighActions));
          aceHighMessages.forEach(function(item, i) {
            messageActions.push(cc.callFunc(function() {
              _this.setMessage(item);
            }));
            if (0 === i) {
              messageActions.push(cc.fadeIn(.5));
              messageActions.push(cc.delayTime(2));
            }
            if (1 === i) {
              messageActions.push(cc.delayTime(2));
              messageActions.push(cc.fadeOut(.5));
            }
            _this.timeLine += 2.5;
          });
        }
        if (fortuneMessages.length > 0) {
          var fortuneActions = [];
          fortuneActions.push(cc.delayTime(this.timeLine));
          fortuneActions.push(cc.fadeIn(.5));
          fortuneActions.push(cc.delayTime(2 + 2 * (fortuneMessages.length - 1)));
          fortuneActions.push(cc.fadeOut(.5));
          this.root["fortuneBet"].runAction(cc.sequence(fortuneActions));
          fortuneMessages.forEach(function(item, i) {
            messageActions.push(cc.callFunc(function() {
              _this.setMessage(item);
            }));
            if (0 === i) {
              messageActions.push(cc.fadeIn(.5));
              messageActions.push(cc.delayTime(2));
            }
            if (1 === i) {
              messageActions.push(cc.delayTime(2));
              messageActions.push(cc.fadeOut(.5));
            }
            _this.timeLine += 2.5;
          });
        }
        messageActions.push(cc.callFunc(function() {
          _this.node.destroy();
        }));
        messageActions.length > 1 ? this.root["message"].runAction(cc.sequence(messageActions)) : this.node.destroy();
      };
      ResultEffect.prototype.setMessage = function(message) {
        this.root["$message"]["#title"]["label"].string = message;
      };
      ResultEffect = __decorate([ ccclass ], ResultEffect);
      return ResultEffect;
    }(cc.Component);
    exports.default = ResultEffect;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils"
  } ],
  TableCard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e4635aDCkNP/61U+2tVG90J", "TableCard");
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
    var PaiGowContext_1 = require("../lib/PaiGowContext");
    var PaiGowPoker2_1 = require("../lib/PaiGowPoker2");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TableCard = function(_super) {
      __extends(TableCard, _super);
      function TableCard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.defaultCard = null;
        return _this;
      }
      TableCard.prototype.init = function() {
        this.root = CocosUtils_1.default.tree(this.node, {});
      };
      TableCard.prototype.setLowCard = function(cards, lockIt, doFadeOutType) {
        this.root["low"].active = true;
        this.root["lowCards"].active = true;
        this.root["lowLock"].active = lockIt;
        var cardType = PaiGowPoker2_1.paigowUtils.bitfieldCards(cards);
        cards = PaiGowPoker2_1.paigowUtils.sortCard(cardType, cards);
        if (doFadeOutType) {
          var typeName = PaiGowPoker2_1.paigowUtils.typeName(cardType);
          this.doFadeOutTypeLow(typeName);
        }
        var lowCards = this.root["lowCards"].children;
        lowCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = PaiGowContext_1.getCardSprite(cards[i]);
        });
      };
      TableCard.prototype.setHighCard = function(cards, lockIt, doFadeOutType) {
        this.root["high"].active = true;
        this.root["highCards"].active = true;
        this.root["highLock"].active = lockIt;
        var cardType = PaiGowPoker2_1.paigowUtils.bitfieldCards(cards);
        cards = PaiGowPoker2_1.paigowUtils.sortCard(cardType, cards);
        if (doFadeOutType) {
          var typeName = PaiGowPoker2_1.paigowUtils.typeName(cardType);
          this.doFadeOutTypeHigh(typeName);
        }
        var highCards = this.root["highCards"].children;
        highCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = PaiGowContext_1.getCardSprite(cards[i]);
        });
      };
      TableCard.prototype.setAceHigh = function(cards, lockIt) {
        this.root["low"].active = false;
        this.root["lowCards"].active = false;
        this.root["lowLock"].active = false;
        this.root["lowCardType"].active = false;
        this.root["high"].active = false;
        this.root["highCards"].active = false;
        this.root["highLock"].active = false;
        this.root["highCardType"].active = false;
        this.root["push"].active = true;
        this.root["pushCards"].active = true;
        this.root["pushLock"].active = lockIt;
        var pushCards = this.root["pushCards"].children;
        pushCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = PaiGowContext_1.getCardSprite(cards[i]);
        });
      };
      TableCard.prototype.resetDefaultCards = function() {
        var _this = this;
        this.root["low"].active = true;
        this.root["lowCards"].active = true;
        this.root["lowLock"].active = false;
        this.root["lowCardType"].active = false;
        this.root["lowCardType"].opacity = 255;
        this.root["lowCardType"].stopAllActions();
        var lowCards = this.root["lowCards"].children;
        lowCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = _this.defaultCard;
        });
        this.root["high"].active = true;
        this.root["highCards"].active = true;
        this.root["highLock"].active = false;
        this.root["highCardType"].active = false;
        this.root["highCardType"].opacity = 255;
        this.root["highCardType"].stopAllActions();
        var highCards = this.root["highCards"].children;
        highCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = _this.defaultCard;
        });
        this.root["push"].active = false;
        this.root["pushCards"].active = false;
        this.root["pushLock"].active = false;
        var pushCards = this.root["highCards"].children;
        pushCards.forEach(function(node, i) {
          node.getComponent(cc.Sprite).spriteFrame = _this.defaultCard;
        });
      };
      TableCard.prototype.doFadeOutTypeLow = function(typeName) {
        var _this = this;
        this.root["lowCardType"].active = true;
        this.root["$lowCardType"]["#title"]["label"].string = typeName;
        this.root["lowCardType"].runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(1), cc.callFunc(function() {
          _this.root["lowCardType"].active = false;
          _this.root["lowCardType"].opacity = 255;
        })));
      };
      TableCard.prototype.doFadeOutTypeHigh = function(typeName) {
        var _this = this;
        this.root["highCardType"].active = true;
        this.root["$highCardType"]["#title"]["label"].string = typeName;
        this.root["highCardType"].runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(1), cc.callFunc(function() {
          _this.root["highCardType"].active = false;
          _this.root["highCardType"].opacity = 255;
        })));
      };
      __decorate([ property(cc.SpriteFrame) ], TableCard.prototype, "defaultCard", void 0);
      TableCard = __decorate([ ccclass ], TableCard);
      return TableCard;
    }(cc.Component);
    exports.default = TableCard;
    cc._RF.pop();
  }, {
    "../lib/CocosUtils": "CocosUtils",
    "../lib/PaiGowContext": "PaiGowContext",
    "../lib/PaiGowPoker2": "PaiGowPoker2"
  } ],
  Tree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7232cKB9MpGkaBGnjT8t6Ny", "Tree");
    cc._RF.pop();
  }, {} ],
  text: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0e6feIwcyhJZYnjBlwnsdIt", "text");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Wording = {
      GameRule: "Game Rule",
      Paytable: "Paytable",
      Telegram: "Telegram",
      BackgroundMusic: "Background Music",
      MusicEffect: "Music Effect",
      Language: "Language",
      GameRuleTab: [ "How to Play", "Way to Bet", "Hand Rank" ],
      PaytableTab: [ "Push Ace High Bet", "Fortune Bet" ],
      HowToPlayContext: "There are 53 cards (52 standard deck + a joker) used for the Open Face PaiGow Poker. Arrange two poker hands with the seven cards that are dealt: <br /> &emsp;\u2022 &emsp;A two-card \u201clow\u201d hand <br /> &emsp;\u2022 &emsp;A five-card \u201chigh\u201d hand <br />A joker may be used as an ace or a wild card to complete the five-card hand to a straight or a flush. ! If the best five-card hand the dealer can make is ace-high, then the hand is an automatic push.",
      WayToBetContext: "\ud83d\udcb0Main Bet: The player wins both hands and wins payout of 1:1.<br />\ud83d\udcb0Fortune Bet: Best hand possible among the player\u2019s seven cards.Please see Paytable for the odds. <br />\ud83d\udcb0Ace High Bet: Dealer\u2019s high hand is an Ace High Pai Gow or both player and dealer\u2019s hand Ace High Pai Gow. Please see Paytable for the odds.",
      CardHandRankContext: "The rank of each card used in Fortune Pai Gow Poker, in order of highest to lowest rank, shall be: Ace, King, Queen, Jack, Ten, 9, 8, 7, 6, 5, 4, 3, 2. All suits shall be considered equal in rank. <br />! Ace, 2, 3, 4, 5, is the lowest ranked Straight. <br /> <br /> Following is the rank of Open Face PaiGow Poker:",
      RemainWording: "! Should a player\u2019s hand rank exactly the same as the Dealer's hand, the Dealer wins. It happens more often in the low hand.",
      HandCardsList: [ {
        title: "7 Card Straight Flush (No Joker)",
        description: "A hand that consists of seven cards of the same suit in consecutive ranking that does not utilize a joker. An ace, king, queen, jack, 10, 9, and 8 is the highest ranked 7 Card Straight Flush (No Joker) hand and a 7, 6, 5, 4, 3, 2 and ace is the lowest ranked 7 Card Straight Flush (No Joker) hand."
      }, {
        title: "7Royal Flush + Royal Match",
        description: "Royal Flush (with or without joker) with the additional two cards of a King and Queen in suit, but of a different suit than the five cards comprising the Royal Flush."
      }, {
        title: "7 Card Straight Flush (With Joker)",
        description: "A hand that consists of seven cards of the same suit in consecutive ranking that utilizes a joker. An ace, king, queen, jack, 10, 9, and 8 is the highest ranked 7 Card Straight Flush (With Joker) hand, with one of those cards being substituted with a joker, and a 7, 6, 5, 4, 3, 2 and ace is the lowest ranked 7 Card Straight Flush (With Joker) hand, with one of those cards being substituted with a joker."
      }, {
        title: "Five Aces",
        description: "A hand that consists of five cards containing all aces (4 Aces + Joker)."
      }, {
        title: "Royal Flush",
        description: "A hand that consists of an ace, king, queen, jack and 10 of the same suit."
      }, {
        title: "Straight Flush",
        description: "A hand that consists of five cards of the same suit in consecutive ranking. A king, queen, jack, 10 and 9 is the highest ranked Straight Flush and a 5, 4, 3, 2 and ace is the lowest ranked Straight Flush."
      }, {
        title: "Four of a Kind",
        description: "A hand that consists of four cards of the same rank. Four aces is the highest ranked Four of a Kind and four 2\u2019s is the lowest ranked Four of a Kind."
      }, {
        title: "Full House",
        description: "A hand that consists of a Three of a Kind and a Pair. Three aces and two kings is the highest ranked Full House and three 2\u2019s and two 3\u2019s is the lowest ranked Full House."
      }, {
        title: "Flush",
        description: "A hand that consists of five cards of the same suit, but that are not in consecutive ranking. An ace, king, queen, jack and 9 is the highest ranked Flush and a 7, 6, 5, 4, 2 is the lowest ranked Flush."
      }, {
        title: "Straight",
        description: "A hand that consists of five cards that are in consecutive ranking, but that are not the same suit. An ace, king, queen, jack and 10 is the highest ranked Straight and a 5, 4, 3, 2 and Ace is the lowest ranked Straight."
      }, {
        title: "Three of a Kind",
        description: "A hand that consists of three cards of the same rank. Three aces is the highest ranked Three of a Kind and three 2\u2019s is the lowest ranked Three of a Kind."
      }, {
        title: "Two Pairs",
        description: "A hand that consists of two pairs. Two aces and two kings is the highest ranked Two Pairs and two 3\u2019s and two 2\u2019s is the lowest ranked Two Pairs."
      }, {
        title: "One Pairs",
        description: "A hand that consists of two cards of the same rank. Two aces is the highest ranked Pair and two 2\u2019s is the lowest ranked Pair."
      }, {
        title: "High Card",
        description: "A hand that consists of five cards that do not make any of the hands listed above. An ace, king, queen, jack and 9 is the highest ranked High Card hand and 7, 6, 5, 4, 2 is the lowest ranked High Card hand."
      } ],
      Pays: "Pays",
      PushAceHighContext: "Both player and dealer have ace-high pai gow: Pays 40 to 1 <br /><br />Dealer has ace-high pai gow with joker: Pays 15 to 1 <br /><br />Dealer has ace-high pai gow without joker: Pays 5 to 1 <br /><br />Neither player nor dealer has ace-high pai gow: Loss",
      FortuneBetList: [ {
        title: "7 Card Straight Flush (No Joker)",
        pays: "8000:1"
      }, {
        title: "Royal Flush + Royal Match",
        pays: "2000:1"
      }, {
        title: "7 Card Straight Flush (With Joker)",
        pays: "1000:1"
      }, {
        title: "Five Aces",
        pays: "400:1"
      }, {
        title: "Royal Flush",
        pays: "150:1"
      }, {
        title: "Straight Flush",
        pays: "50:1"
      }, {
        title: "Four of a Kind",
        pays: "25:1"
      }, {
        title: "Full House",
        pays: "5:1"
      }, {
        title: "Flush",
        pays: "4:1"
      }, {
        title: "Three of a Kind",
        pays: "3:1"
      }, {
        title: "Straight",
        pays: "2:1"
      } ]
    };
    var zhCN = {
      GameRule: "\u6e38\u620f\u89c4\u5219",
      Paytable: "\u5956\u91d1\u652f\u4ed8\u8868",
      Telegram: "\u7535\u62a5",
      BackgroundMusic: "\u80cc\u666f\u97f3\u4e50",
      MusicEffect: "\u97f3\u6548",
      Language: "\u8bed\u8a00",
      GameRuleTab: [ "\u6e38\u620f\u89c4\u5219", "\u5982\u4f55\u4e0b\u6ce8", "\u9ad8\u4e0b\u6bd4\u8f83" ],
      PaytableTab: [ "Ace\u724c\u4e5d\u6ce8", "\u5e78\u8fd0\u7ea2\u5229" ],
      HowToPlayContext: "\u644a\u5f00\u724c\u4e5d\u6251\u514b\uff08Open Face Pai Gow Poker\uff09\u8fd9\u4e2a\u6e38\u620f\u4f7f\u752853\u5f20\u724c\uff08\u5305\u62ec\u4e00\u5f20\u738b\u724cJoker\uff09\uff0c\u53c2\u4e0e\u8005\u5404\u5f977\u5f20\u724c\u3002\u73a9\u6cd5\u662f\u5c06\u4e03\u5f20\u724c\u5206\u6210\u6700\u597d\u7684\u4e94\u5f20\u53ca\u4e24\u5f20\u724c\uff1a <br /> &emsp;\u2022 &emsp;\u4e24\u5f20\u724c\u7ec4\u4e3a <strong>\u4f4e\u624b\u724c</strong><br /> &emsp;\u2022 &emsp;\u4e94\u5f20\u724c\u7ec4\u4e3a <strong>\u9ad8\u624b\u724c</strong> \u5fc5\u9808\u6bd4\u4e24\u5f20\u4f4e\u724c\u5927<br />\u738b\u724c\uff08 Joker \uff09\u53ef\u4ee5\u7528\u6765\u51d1\u6210\u987a\u5b50\uff0c\u540c\u82b1\uff0c\u6216\u987a\u5b50\u540c\u82b1\uff0c\u4e0d\u7136\u5c31\u53ea\u80fd\u5f53\u505a Ace\u3002<br /><strong>\u6ce8\u610f\uff01 \u5982\u679c\u5e84\u5bb6\u53ef\u4ee5\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f35 Ace \u5927\u724c\u724c\u4e5d\uff0c\u6b64\u5c40\u6703\u81ea\u52d5\u5224\u4e3a\u5e73\u5c40\u4ea6\u79f0\u4e3a PUSH \u3002</strong>",
      WayToBetContext: "\ud83d\udcb0<strong>\u4e3b\u8d4c\u6ce8</strong>: \u6b32\u83b7\u80dc\uff0c\u73a9\u5bb6\u624b\u4e2d\u8fd9\u4e24\u7ec4\u724c\u5fc5\u987b\u5206\u522b\u9ad8\u4e8e\u5e84\u5bb6\u7684\u4e24\u7ec4\u724c\u3002\u8d62\u94b1\u6bd4\u4f8b\u662f 1:1\u3002<br />\ud83d\udcb0<strong>\u5e78\u8fd0\u7ea2\u5229\u6ce8</strong>: \u73a9\u5bb6\u4e0b\u7684\u989d\u5916\u6ce8\uff0c 7 \u5f20\u724c\u7684\u7279\u522b\u7ec4\u5408\u53ef\u4ee5\u83b7\u5f97\u5e78\u8fd0\u7ea2\u5229\uff0c\u6700\u9ad8\u6d3e\u5f69\u7387\u53ef\u9ad8\u8fbe 8000 : 1\uff0c\u6709\u5173\u8d54\u7387\u8bf7\u53c2\u9605\u5956\u91d1\u652f\u4ed8\u8868\u3002<br />\ud83d\udcb0<strong>Ace\u724c\u4e5d\u6ce8</strong>: \u5e84\u5bb6\u53ea\u80fd\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u662fAce \u4e3a\u6700\u5927\u724c\u7684\u724c\u4e5d\uff0c\u6216\u662f\u73a9\u5bb6\u4e5f\u540c\u6837\u53ea\u80fd\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3aAce\u5927\u724c\uff0c\u6709\u5173\u8d54\u7387\u8bf7\u53c2\u9605\u5956\u91d1\u652f\u4ed8\u8868\u3002",
      CardHandRankContext: "\u644a\u5f00\u724c\u4e5d\u6251\u514b\u4e2d\u4f7f\u7528\u7684\u6bcf\u5f20\u724c\u7684\u5927\u5c0f\uff0c\u6309\u4ece\u9ad8\u5230\u4f4e\u7684\u987a\u5e8f\u6392\u5217\uff0c\u5e94\u4e3a\uff1aA \u6216 \u738b\u724c(Joker)\uff0cK\u56fd\u738b\uff0cQ \u5973\u738b\uff0cJ \u6770\u514b\uff0c10\uff0c9\uff0c8\uff0c7\uff0c6\uff0c5\uff0c4\uff0c3\uff0c2\u3002 <br /><strong>\u6ce8\u610f\uff01A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u7684\u987a\u5b50\u3002</strong><br /><br />\u724c\u4e5d\u6251\u514b\u7684\u5404\u7c7b\u724c\u578b\u7ec4\u5408\uff1a",
      RemainWording: "<strong>\u6ce8\u610f\uff01\u5e84\u548c\u73a9\u5bb6\u540c\u724c\u7684\u60c5\u51b5\u4e0b\uff0c\u5e84\u5bb6\u8d62\u3002</strong>",
      HandCardsList: [ {
        title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4e0d\u4f7f\u7528\u738b\u724c Joker)",
        description: "\u4e03\u5f20\u724c\u7686\u540c\u82b1\u7ec4\u5408\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u5e76\u65e0\u4f7f\u7528\u738b\u724c\uff08Joker\uff09\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\uff0cK\uff0cQ\uff0cJ\uff0c10\u30019\u30018 \u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\uff0c\u53e6\u59167\u30016\u30015\u30014\u30013\u30012\u3001A  \u7684\u4e03\u5f35\u540c\u82b1\u987a\u662f\u6700\u4f4e\u3002"
      }, {
        title: "\u7687\u5bb6\u540c\u82b1\u987a + \u7687\u5bb6\u914d\u5bf9",
        description: "\u4e94\u5f20\u540c\u6837\u82b1\u8272\u7684\u724c\u5206\u522b\u4e3aACE\uff08A\uff09\uff0c\u8001K\uff0c\u7687\u540e\uff08Q\uff09\uff0c\u6770\u514b\uff08J\uff09\u548c10\u4ee5ACE\uff08A\uff09\u4e3a\u9996\uff0c\u4e94\u5f20\u724c\u7686\u662f\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\uff0c\u53e6\u5916\u4e00\u5f20K\u548c\u4e00\u5f20Q\uff0c\u4f46\u4e0e\u7687\u5bb6\u540c\u82b1\u987a\u7684\u4e94\u5f20\u724c\u4e0d\u540c\u3002"
      }, {
        title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4f7f\u7528\u738b\u724c Joker)",
        description: "\u516d\u5f20\u724c\u7686\u540c\u82b1\u548c\u4e00\u5f20\u738b\u724c\uff08Joker\uff09\u7ec4\u5408\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u300110\u30019\u30018\u5176\u4e2d\u4e00\u5f20\u738b\u724c (Joker) \u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\u4e03\u5f35\u540c\u82b1\u987a\uff0c\u53e6\u59167\u30016\u30015\u30014\u30013\u30012\u3001A \u5176\u4e2d\u4e00\u5f20\u738b\u724c (Joker) \u7684\u4e03\u5f35\u540c\u82b1\u987a \u662f\u6700\u4f4e\u7684\u3002"
      }, {
        title: "\u4e94\u4e2a A",
        description: "5\u5f20Aces\u8fd9\u662f\u9ad8\u624b\u724c\u91cc\u6700\u9ad8\u7684\u7ec4\u5408\u3002\u56e0\u4e3a\u6709\u4e00\u5f20\u738b\u724c(Joker)\u6240\u4ee5\u540c\u65f6\u67095\u5f20Aces\u662f\u6700\u56f0\u96be\u7684\u3002"
      }, {
        title: "\u7687\u5bb6\u540c\u82b1\u987a",
        description: "\u4e94\u5f20\u540c\u6837\u82b1\u8272\u7684\u724c\u5206\u522b\u4e3aACE\uff08A\uff09\uff0c\u8001K\uff0c\u7687\u540e\uff08Q\uff09\uff0c\u6770\u514b\uff08J\uff09\u548c10\u4ee5ACE\uff08A\uff09\u4e3a\u9996\uff0c\u4e94\u5f20\u724c\u7686\u662f\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\u3002"
      }, {
        title: "\u540c\u82b1\u987a",
        description: "\u4e94\u5f20\u724c\u7686\u540c\u82b1\uff0c\u800c\u53f7\u7801\u4ea6\u987a\u5e8f\u6392\u5217\uff0c\u4f46\u5e76\u975e\u4ee5ACE\uff08A\uff09\u4e3a\u9996\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cK\u3001Q\u3001J\u300110\u30019\u7684\u540c\u82b1\u987a\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u5916A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u540c\u82b1\u987a\u3002"
      }, {
        title: "\u56db\u6761",
        description: "\u56db\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
      }, {
        title: "\u846b\u82a6",
        description: "\u4e09\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u548c\u53e6\u5916\u4e24\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
      }, {
        title: "\u540c\u82b1",
        description: "\u4e94\u5f35\u82b1\u8272\u76f8\u540c\u7684\u724c\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u30019\u7684\u540c\u82b1\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u59167\u30016\u30015\u30014\u30012\u662f\u6700\u4f4e\u7684\u7684\u540c\u82b1\u3002"
      }, {
        title: "\u987a\u5b50\uff08\u86c7\uff09",
        description: "\u4e94\u5f20\u53f7\u7801\u987a\u5e8f\u6392\u5217\u7684\u724c\u3002\u3014ACE\uff08A\uff09\u724c\u53ef\u7528\u4f5c\u6700\u9ad8\u6216\u6700\u4f4e\u3015\u3002\u5728\u6b64\u6e38\u620f\u4e2d\uff0cA\u3001K\u3001Q\u3001J\u300110\u7684\u987a\u5b50\u662f\u7b2c\u4e00\u9ad8\u7684\u987a\u5b50\uff0c\u53e6\u5916A\u30012\u30013\u30014\u30015\u662f\u6700\u4f4e\u7684\u7684\u987a\u5b50\u3002"
      }, {
        title: "\u4e09\u5bf9(\u4e09\u6761)",
        description: "\u4e09\u5f20\u53f7\u7801\u76f8\u540c\u7684\u724c\u3002"
      }, {
        title: "\u4e24\u5bf9",
        description: "\u4e03\u5f20\u724c\u4e2d\u5176\u4e2d\u6709\u4e24\u5bf9\u4e0d\u540c\u7684\u4e00\u5bf9\u3002"
      }, {
        title: "\u5bf9\u5b50",
        description: "\u4e03\u5f20\u724c\u4e2d\u5176\u4e2d\u6709\u4e00\u5bf9\u76f8\u540c\u7684\u724c\u3002"
      }, {
        title: "\u5927\u724c",
        description: "\u6ca1\u6709\u5bf9\u5b50\u3001\u987a\u5b50\u6216\u540c\u82b1 \u2013 \u8ba9\u6700\u5927\u7684\u724c\u4f5c\u9ad8\u624b\u724c\uff08\u4e94\u5f20\u724c\uff09\uff0c\u7b2c\u4e8c\u5927\u7684\u724c\u4f5c\u4f4e\u624b\u724c\u3002"
      } ],
      Pays: "\u6d3e\u5f69\u7387",
      PushAceHighContext: "&emsp;\u2022 &emsp;\u5e84\u5bb6\u548c\u73a9\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f20 Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 40 \u500d <br />&emsp;\u2022 &emsp;\u5e84\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u6709\u738b\u724c (Joker) \u7684\u4e03\u5f35 Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 15 \u500d <br />&emsp;\u2022 &emsp;\u5e84\u5bb6\u53ef\u6392\u51fa\u6700\u597d\u7684\u724c\u578b\u4e3a\u4e03\u5f20Ace \u5927\u724c\u724c\u4e5d\uff1a \u6d3e\u5f69\u7387 5 \u500d <br />&emsp;\u2022 &emsp;\u5e84\u5bb6\u548c\u73a9\u5bb6\u90fd\u7121Ace \u5927\u724c\u724c\u4e5d\uff1a \u7121\u6d3e\u5f69 ",
      FortuneBetList: [ {
        title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4e0d\u4f7f\u7528\u738b\u724c Joker)",
        pays: "8000:1"
      }, {
        title: "\u7687\u5bb6\u540c\u82b1\u987a + \u7687\u5bb6\u914d\u5bf9",
        pays: "2000:1"
      }, {
        title: "\u4e03\u5f20\u540c\u82b1\u987a (\u4f7f\u7528\u738b\u724c Joker)",
        pays: "1000:1"
      }, {
        title: "\u4e94\u4e2a A",
        pays: "400:1"
      }, {
        title: "\u7687\u5bb6\u540c\u82b1\u987a",
        pays: "150:1"
      }, {
        title: "\u540c\u82b1\u987a",
        pays: "50:1"
      }, {
        title: "\u56db\u6761",
        pays: "25:1"
      }, {
        title: "\u846b\u82a6",
        pays: "5:1"
      }, {
        title: "\u540c\u82b1",
        pays: "4:1"
      }, {
        title: "\u4e09\u5bf9(\u4e09\u6761)",
        pays: "3:1"
      }, {
        title: "\u987a\u5b50\uff08\u86c7\uff09",
        pays: "2:1"
      } ]
    };
    exports.Wording = Wording;
    exports.zhCN = zhCN;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Game", "Loading", "Alias", "I18N", "Tree", "Audio", "CocosUtils", "LuckPay", "PaiGowApi", "PaiGowContext", "PaiGowMessage", "PaiGowPlayer", "PaiGowPoker", "PaiGowPoker2", "PaiGowSetting", "PaiGowTableInfo", "PaiGowText", "text", "Alert", "Bet", "Cap", "Card", "Dealer", "Delete", "FortuneBetRule", "GameRule", "HandCard", "HandCardRule", "Input", "Key", "Menu", "MenuItem", "PaiGowTable", "Paytable", "Popup", "ResultEffect", "TableCard" ]);