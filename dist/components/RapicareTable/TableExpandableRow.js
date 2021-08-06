"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _styles = require("@material-ui/core/styles");

var _polished = require("polished");

var _excluded = ["children", "indexItem", "controlExpanded", "keys", "item", "Items", "highLightRow", "onRowClick"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      "& td": {
        backgroundColor: "#F5F8FA"
      }
    },
    highLightRow: {
      backgroundColor: "#eaf0f6d1"
    },
    clickableRow: {
      cursor: "pointer",
      "&:hover": {
        background: (0, _polished.darken)(0.01, theme.palette.primary.light)
      }
    }
  };
});

function changedValue(item, key) {
  if (key.expandedRowList) {
    return typeof item[key.expandedRowList] !== "undefined" ? item[key.expandedRowList] : [];
  }
}

var TableExpandableRow = function TableExpandableRow(_ref) {
  var _clsx;

  var children = _ref.children,
      indexItem = _ref.indexItem,
      controlExpanded = _ref.controlExpanded,
      keys = _ref.keys,
      item = _ref.item,
      Items = _ref.Items,
      highLightRow = _ref.highLightRow,
      onRowClick = _ref.onRowClick,
      otherProps = _objectWithoutProperties(_ref, _excluded);

  var itsMe = (0, _react.useRef)(null);
  var classes = useStyles();

  var createRows = function createRows(keysCreate, itemCreate, parentIndex) {
    var selectExpandedRowList = keysCreate === null || keysCreate === void 0 ? void 0 : keysCreate.map(function (key) {
      return Items[parentIndex][key.expandedRowList];
    });
    var listCells = keysCreate === null || keysCreate === void 0 ? void 0 : keysCreate.map(function (key, columnIndex) {
      if (key.expandedRowList) {
        var fieldSelected = changedValue(itemCreate, key);
        var createdCells = fieldSelected.map(function (expandedMap, expandedIndex) {
          var valueExpanded;
          valueExpanded = typeof expandedMap[key.expandedFieldList] !== "undefined" ? expandedMap[key.expandedFieldList] : "";

          if (typeof key.mutatorExpanded !== "undefined") {
            valueExpanded = key.mutatorExpanded(valueExpanded, expandedMap, expandedIndex, parentIndex, fieldSelected);
          }

          return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
            key: columnIndex,
            width: key.width,
            style: {
              minWidth: key.minWidth
            }
          }, valueExpanded);
        });
        return createdCells;
      } else {
        return null;
      }
    });

    if (typeof selectExpandedRowList[0] !== "undefined" && selectExpandedRowList[0].length > 0) {
      return selectExpandedRowList[0].map(function (row, index) {
        return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
          className: classes.root,
          key: index
        }, listCells.map(function (cell) {
          return cell[index];
        }));
      });
    }
  };

  var executeScroll = function executeScroll() {
    return itsMe.current.scrollIntoView();
  };

  (0, _react.useEffect)(function () {
    if (item.id === highLightRow) {
      executeScroll();
    }
  }, [item.id, highLightRow]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], {
    ref: itsMe,
    className: (0, _clsx2["default"])((_clsx = {}, _defineProperty(_clsx, classes.clickableRow, typeof onRowClick !== "undefined"), _defineProperty(_clsx, classes.highLightRow, item.id === highLightRow), _clsx))
  }, children), controlExpanded && createRows(keys, item, indexItem));
};

var _default = TableExpandableRow;
exports["default"] = _default;