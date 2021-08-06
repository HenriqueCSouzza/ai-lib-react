"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = tableChangeValue;

function tableChangeValue(_ref) {
  var key = _ref.key,
      item = _ref.item,
      columnIndex = _ref.columnIndex,
      index = _ref.index,
      withChildren = _ref.withChildren,
      setFieldValue = _ref.setFieldValue;
  var value;

  if (withChildren && key.field.split(".").length > 1) {
    var fields = key.field.split(".");
    return item[fields[0]] !== null ? item[fields[0]][fields[1]] : "";
  } else if (typeof key.mutator !== "undefined") {
    return key.mutator(value, item, index, columnIndex, key.field, item[key.field], setFieldValue);
  } else {
    return typeof item[key.field] !== "undefined" ? item[key.field] : "";
  }
}