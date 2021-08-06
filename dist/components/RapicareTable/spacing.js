"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = spacingProps;

function spacingProps(props) {
  var allowed = ["m", "mt", "mb", "ml", "mr", "mx", "my", "p", "pt", "pb", "pl", "pr", "px", "py"];
  return Object.keys(props).filter(function (key) {
    return allowed.includes(key);
  }).reduce(function (obj, key) {
    obj[key] = props[key];
    return obj;
  }, {});
}