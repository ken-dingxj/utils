/**
 * djUtils v1.0.2
 * (c) 2020-2020 dxj https://github.com/ken-ding/utils
 * Licensed under MIT
 * Released on: Apr 25, 2020
 */

System.register('dt', [], function (exports) {
  'use strict';
  return {
    execute: function () {

      var dt = /** @class */ (function () {
          function dt() {
          }
          /**
           * trim 字符串去除空格
           * @param str {String} 需要处理的字符串
           * @param type {Boolean} 是否去除所有空格
           */
          dt.prototype.trim = function (str, type) {
              return type ? str.replace(/\s+/g, "") : str.replace(/^\s+|\s+$/g, "");
          };
          /**
           * uuid 随机生成uuid
           */
          dt.prototype.uuid = function () {
              var s = [];
              var hexDigits = "0123456789abcdef";
              for (var i = 0; i < 36; i++) {
                  s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
              }
              s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
              s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
              s[8] = s[13] = s[18] = s[23] = "-";
              var uuid = s.join("");
              return uuid;
          };
          /**
           * 获取本机ip
           */
          dt.prototype.getIp = function () {
              var os = require("os");
              var needHost = ""; // 打开的host
              try {
                  // 获得网络接口列表
                  var network = os.networkInterfaces();
                  for (var dev in network) {
                      var iface = network[dev];
                      for (var i = 0; i < iface.length; i++) {
                          var alias = iface[i];
                          if (alias.family === "IPv4" &&
                              alias.address !== "127.0.0.1" &&
                              !alias.internal) {
                              needHost = alias.address;
                          }
                      }
                  }
              }
              catch (e) {
                  needHost = "localhost";
              }
              return needHost;
          };
          return dt;
      }());
      var index = exports('default', new dt());

    }
  };
});
