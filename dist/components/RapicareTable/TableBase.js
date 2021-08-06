"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _clsx7 = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core/");

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _styles = require("@material-ui/core/styles");

var _polished = require("polished");

var _TableExpandableRow = _interopRequireDefault(require("./TableExpandableRow"));

var _InlineLoading = _interopRequireDefault(require("../common/InlineLoading"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    checkbox: {
      color: theme.palette.primary.main
    },
    tableBody: {
      "& tr:last-child td": {
        borderBottom: "none !important"
      }
    },
    noBorder: {
      "& tr td": {
        borderBottom: "none !important"
      }
    },
    clickableCell: {
      cursor: "pointer"
    },
    clickableRow: {
      cursor: "pointer",
      "&:hover": {
        background: (0, _polished.darken)(0.01, theme.palette.primary.light)
      }
    },
    fixedColumn: {
      // position: '-webkit-sticky',
      position: "sticky",
      background: theme.palette.background.paper,
      left: 0,
      zIndex: 1
    },
    expandedButton: {
      color: "#00A4BD",
      padding: 0
    }
  };
});

function TableBase(_ref) {
  var selection = _ref.selection,
      stickyHeader = _ref.stickyHeader,
      noBorder = _ref.noBorder,
      head = _ref.head,
      handleSelectAll = _ref.handleSelectAll,
      checkbox = _ref.checkbox,
      items = _ref.items,
      keys = _ref.keys,
      handleSelection = _ref.handleSelection,
      isSelected = _ref.isSelected,
      setFieldValue = _ref.setFieldValue,
      changeOnRowClick = _ref.changeOnRowClick,
      onRowClick = _ref.onRowClick,
      actions = _ref.actions,
      confirm = _ref.confirm,
      withChildren = _ref.withChildren,
      isExpanded = _ref.isExpanded,
      highLightRow = _ref.highLightRow;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      controlItems = _useState2[0],
      setControlItems = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (items.length > 0) {
      if (isExpanded) {
        setLoading(true);
        var itemsWithControlExpanded = items.map(function (item) {
          return _objectSpread(_objectSpread({}, item), {}, {
            controlExpanded: false
          });
        });
        setControlItems(itemsWithControlExpanded);
        setLoading(false);
      } else {
        setControlItems(items);
        setLoading(false);
      }
    } else {
      setControlItems(items);
    }
  }, [isExpanded, items]);

  var handleControlExpanded = function handleControlExpanded(controlItem, index) {
    var controlArray = controlItem.map(function (item, key) {
      if (key === index) {
        return _objectSpread(_objectSpread({}, item), {}, {
          controlExpanded: !controlItem[index].controlExpanded
        });
      } else {
        return item;
      }
    });
    setControlItems(controlArray);
  };

  if (loading) {
    return /*#__PURE__*/_react["default"].createElement(_InlineLoading["default"], null);
  }

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_core.Table, {
    stickyHeader: stickyHeader,
    className: (0, _clsx7["default"])(_defineProperty({}, classes.noBorder, noBorder === true))
  }, head && /*#__PURE__*/_react["default"].createElement(_core.TableHead, null, /*#__PURE__*/_react["default"].createElement(_core.TableRow, null, checkbox && /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
    style: {
      width: 4,
      height: 4
    },
    color: "primary",
    className: classes.checkbox,
    checked: selection.length === controlItems.length,
    onClick: function onClick(e) {
      return handleSelectAll(controlItems);
    }
  })), keys === null || keys === void 0 ? void 0 : keys.map(function (key, i) {
    return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
      key: i,
      style: {
        minWidth: key.minWidth
      },
      className: (0, _clsx7["default"])(_defineProperty({}, classes.fixedColumn, key.fixed))
    }, key.label || key.mutatorLabel());
  }), typeof actions !== "undefined" && /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
    style: {
      fontWeight: "bold",
      minWidth: 70
    }
  }, "A\xE7\xF5es"))), /*#__PURE__*/_react["default"].createElement(_core.TableBody, {
    className: classes.tableBody
  }, controlItems === null || controlItems === void 0 ? void 0 : controlItems.map(function (item, index) {
    if (isExpanded) {
      return /*#__PURE__*/_react["default"].createElement(_TableExpandableRow["default"], {
        key: index,
        highLightRow: highLightRow,
        item: item,
        Items: controlItems,
        value: index + 1,
        keys: keys,
        indexItem: index,
        onRowClick: onRowClick,
        controlExpanded: controlItems[index].controlExpanded
      }, keys === null || keys === void 0 ? void 0 : keys.map(function (key, columnIndex) {
        var _clsx4;

        var value; //TODO:substituir esses ifs para uma função decente

        if (withChildren && key.field.split(".").length > 1) {
          var fields = key.field.split(".");
          value = item[fields[0]] !== null ? item[fields[0]][fields[1]] : "";
        } else {
          value = typeof item[key.field] !== "undefined" ? item[key.field] : "";
        }

        if (typeof key.mutator !== "undefined") {
          value = key.mutator(value, item, index, columnIndex, key.field, item[key.field], setFieldValue, function () {
            return handleControlExpanded(controlItems, index);
          });
        }

        if (key.expand) {
          var _clsx3;

          return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
            key: columnIndex,
            width: key.width,
            style: {
              minWidth: key.minWidth
            },
            className: (0, _clsx7["default"])((_clsx3 = {}, _defineProperty(_clsx3, classes.clickableRow, typeof onRowClick !== "undefined"), _defineProperty(_clsx3, classes.fixedColumn, key.fixed), _clsx3)),
            onClick: typeof onRowClick !== "undefined" ? function () {
              return onRowClick(item, function () {
                return handleControlExpanded(controlItems, index);
              });
            } : function () {
              return null;
            }
          }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
            display: "flex",
            alignItems: "center"
          }, value, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
            className: classes.expandedButton,
            onClick: function onClick() {
              return handleControlExpanded(controlItems, index);
            }
          }, !controlItems[index].controlExpanded ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], null) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], null))));
        }

        return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
          key: columnIndex,
          width: key.width,
          style: {
            minWidth: key.minWidth
          },
          className: (0, _clsx7["default"])((_clsx4 = {}, _defineProperty(_clsx4, classes.clickableRow, typeof onRowClick !== "undefined"), _defineProperty(_clsx4, classes.fixedColumn, key.fixed), _clsx4)),
          onClick: typeof onRowClick !== "undefined" ? function () {
            return onRowClick(item, function () {
              return handleControlExpanded(controlItems, index);
            });
          } : function () {
            return null;
          }
        }, value);
      }));
    } else {
      return /*#__PURE__*/_react["default"].createElement(_core.TableRow, {
        key: index,
        className: (0, _clsx7["default"])(_defineProperty({}, classes.clickableRow, typeof onRowClick !== "undefined"))
      }, checkbox && /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
        onClick: function onClick(e) {
          return handleSelection(item);
        }
      }, /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
        style: {
          width: 4,
          height: 4
        },
        checked: isSelected(item),
        color: "primary",
        className: classes.checkbox
      })), keys === null || keys === void 0 ? void 0 : keys.map(function (key, columnIndex) {
        var _clsx6;

        var value; //TODO:substituir esses ifs para uma função decente

        if (withChildren && key.field.split(".").length > 1) {
          var fields = key.field.split(".");
          value = item[fields[0]] !== null ? item[fields[0]][fields[1]] : "";
        } else {
          value = typeof item[key.field] !== "undefined" ? item[key.field] : "";
        }

        if (typeof key.mutator !== "undefined") {
          value = key.mutator(value, item, index, columnIndex, key.field, item[key.field], setFieldValue, function () {
            return console.log("teste");
          });
        }

        return /*#__PURE__*/_react["default"].createElement(_core.TableCell, {
          key: columnIndex,
          width: key.width,
          style: {
            minWidth: key.minWidth
          },
          className: (0, _clsx7["default"])((_clsx6 = {}, _defineProperty(_clsx6, classes.clickableRow, typeof onRowClick !== "undefined"), _defineProperty(_clsx6, classes.fixedColumn, key.fixed), _clsx6)),
          onClick: typeof onRowClick !== "undefined" ? function () {
            return onRowClick(item);
          } : function () {
            return null;
          }
        }, value);
      }), typeof actions !== "undefined" && /*#__PURE__*/_react["default"].createElement(_core.TableCell, null, actions === null || actions === void 0 ? void 0 : actions.map(function (action, i) {
        var handleConfirmationItem = function handleConfirmationItem() {
          return action.onClick(item, index);
        };

        return /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          size: "small",
          color: action.variant ? action.variant : "primary",
          key: i,
          disabled: typeof action.disabled === "undefined" ? false : action.disabled(item, action, index),
          onClick: action.confirmation === true ? confirm(handleConfirmationItem) : function () {
            return action.onClick(item, index);
          }
        }, action.label);
      })));
    }
  }))));
}

TableBase.propTypes = {
  actions: _propTypes["default"].array,
  changeOnRowClick: _propTypes["default"].func,
  checkbox: _propTypes["default"].any,
  confirm: _propTypes["default"].func,
  handleSelectAll: _propTypes["default"].func,
  handleSelection: _propTypes["default"].func,
  head: _propTypes["default"].any,
  isSelected: _propTypes["default"].func,
  items: _propTypes["default"].array,
  keys: _propTypes["default"].array,
  noBorder: _propTypes["default"].bool,
  onRowClick: _propTypes["default"].func,
  selection: _propTypes["default"].array,
  setFieldValue: _propTypes["default"].any,
  stickyHeader: _propTypes["default"].any
};
var _default = TableBase;
exports["default"] = _default;