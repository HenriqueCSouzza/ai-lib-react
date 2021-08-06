"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core/");

var _Button = _interopRequireDefault(require("./Button"));

var _Select = require("./Select");

var _BodyText = _interopRequireDefault(require("./BodyText"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

var _TablePaginationStyled = _interopRequireDefault(require("./TablePaginationStyled"));

var _TableBase = _interopRequireDefault(require("./TableBase"));

var _DataTableSkeleton = _interopRequireDefault(require("./DataTableSkeleton"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function DataTable(_ref) {
  var keys = _ref.keys,
      items = _ref.items,
      allItems = _ref.allItems,
      actions = _ref.actions,
      checkbox = _ref.checkbox,
      meta = _ref.meta,
      onPaginationChange = _ref.onPaginationChange,
      showPagination = _ref.showPagination,
      massActions = _ref.massActions,
      showNavNumbers = _ref.showNavNumbers,
      stickyHeader = _ref.stickyHeader,
      _ref$head = _ref.head,
      head = _ref$head === void 0 ? true : _ref$head,
      onRowClick = _ref.onRowClick,
      noBorder = _ref.noBorder,
      onSelect = _ref.onSelect,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "small" : _ref$size,
      _ref$toolBar = _ref.toolBar,
      toolBar = _ref$toolBar === void 0 ? true : _ref$toolBar,
      confirm = _ref.confirm,
      setFieldValue = _ref.setFieldValue,
      loading = _ref.loading,
      withChildren = _ref.withChildren,
      maxHeight = _ref.maxHeight,
      isExpanded = _ref.isExpanded,
      highLightRow = _ref.highLightRow,
      limitSelection = _ref.limitSelection,
      limitSelectionEvent = _ref.limitSelectionEvent;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      selection = _useState2[0],
      setSelection = _useState2[1];

  var _useState3 = (0, _react.useState)(""),
      _useState4 = _slicedToArray(_useState3, 2),
      massAction = _useState4[0],
      setMassAction = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      selectItems = _useState6[0],
      setSelectItem = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      statusSelection = _useState8[0],
      setStatusSelection = _useState8[1];

  (0, _react.useEffect)(function () {
    setMassAction([]);
    typeof allItems !== "undefined" && setSelectItem(allItems);
  }, [selection, selectItems, allItems]);
  (0, _react.useEffect)(function () {
    if (statusSelection) {
      onSelect && onSelect(selectItems.map(function (i) {
        return {
          id: i
        };
      }));
    } else {
      onSelect && onSelect(selection);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [selection, selectItems, statusSelection]);

  function changeOnRowClick(onRowClick, classes) {
    if (typeof onRowClick !== "undefined") {
      return classes.clickableRow;
    } else {
      return null;
    }
  }

  var handleSelection = function handleSelection(item) {
    var itemExists = selection.filter(function (i) {
      return i.id === item.id;
    }).length;

    if (itemExists > 0) {
      var deletedItem = selection.filter(function (i) {
        return i.id !== item.id;
      });
      setSelection(deletedItem);
    } else {
      if (limitSelection) {
        if (selection.length <= limitSelection - 1) {
          var newItem = [].concat(_toConsumableArray(selection), [item]);
          setSelection(newItem);
        } else {
          limitSelectionEvent && limitSelectionEvent({
            msg: "Chegou no limite de itens selecionados",
            error: true
          });
        }
      } else {
        var _newItem = [].concat(_toConsumableArray(selection), [item]);

        setSelection(_newItem);
      }
    }
  };

  var handleSelectAll = function handleSelectAll(items) {
    if (selection.length === items.length) {
      setSelection([]);
      setStatusSelection(false);
    } else {
      setSelection(items);
    }
  };

  var handleMassActionSubmission = function handleMassActionSubmission() {
    var mass = massActions.filter(function (i) {
      return i.key === massAction;
    });

    if (mass.length > 0) {
      if (statusSelection) {
        var selectionAllItems = [];
        selectItems.map(function (i) {
          return selectionAllItems.push({
            id: i
          });
        });
        massActions.filter(function (i) {
          return i.key === massAction;
        })[0].action(selectionAllItems);
      } else {
        massActions.filter(function (i) {
          return i.key === massAction;
        })[0].action(selection);
      }
    }
  };

  var handleClearSelection = function handleClearSelection(item) {
    handleSelectAll(item);
    setSelection([]);
    setStatusSelection(false);
  };

  var availableMassActions = typeof massActions !== "undefined" && massActions.filter(function (massAction) {
    return massAction.isAvailable(selection);
  });

  var isSelected = function isSelected(item) {
    return selection.filter(function (i) {
      return i.id === item.id;
    }).length > 0 ? true : false;
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Paper, null, toolBar && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    px: 2
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    justify: "space-between",
    alignItems: "center",
    style: {
      height: 50
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, typeof massActions !== "undefined" && massActions.length > 0 && selection.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Select.SelectOutlined, {
    onChange: function onChange(e) {
      return setMassAction(e.target.value);
    },
    value: massAction
  }, /*#__PURE__*/_react["default"].createElement("option", null, "A\xE7\xF5es em massa"), availableMassActions.map(function (massAction, key) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: key,
      value: massAction.key
    }, massAction.label);
  })), " ", /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    size: size,
    color: "default",
    variant: "outlined",
    onClick: function onClick() {
      return handleMassActionSubmission();
    }
  }, "Aplicar"))), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, typeof massActions !== "undefined" && availableMassActions.length > 0 && selectItems.length > 0 && selection.length >= meta.limit && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, statusSelection ? /*#__PURE__*/_react["default"].createElement(_core.Box, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    size: "lg"
  }, "Todos os ", selectItems.length, " foram selecionados."), availableMassActions.length > 0 && /*#__PURE__*/_react["default"].createElement(_core.Link, {
    component: "button",
    color: "primary",
    variant: "body1",
    underline: "none",
    onClick: function onClick() {
      return handleClearSelection(selectItems);
    }
  }, "Limpar sele\xE7\xE3o")) : /*#__PURE__*/_react["default"].createElement(_core.Box, {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/_react["default"].createElement(_BodyText["default"], {
    size: "lg"
  }, selection.length, " itens selecionados."), availableMassActions.length > 0 && /*#__PURE__*/_react["default"].createElement(_core.Link, {
    component: "button",
    color: "primary",
    variant: "body1",
    underline: "none",
    onClick: function onClick() {
      return setStatusSelection(true);
    }
  }, "Selecionar todos os ", selectItems.length)))), showNavNumbers && /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_PaginationMeta["default"], {
    meta: meta
  })))), loading ? /*#__PURE__*/_react["default"].createElement(_DataTableSkeleton["default"], null) : /*#__PURE__*/_react["default"].createElement(_core.TableContainer, {
    style: {
      maxHeight: maxHeight
    }
  }, /*#__PURE__*/_react["default"].createElement(_TableBase["default"], {
    highLightRow: highLightRow,
    selection: selection,
    stickyHeader: stickyHeader,
    noBorder: noBorder,
    head: head,
    handleSelectAll: handleSelectAll,
    checkbox: checkbox,
    items: items,
    keys: keys,
    handleSelection: handleSelection,
    isSelected: isSelected,
    limitSelection: limitSelection,
    setFieldValue: setFieldValue,
    changeOnRowClick: changeOnRowClick,
    onRowClick: onRowClick,
    actions: actions,
    confirm: confirm,
    withChildren: withChildren,
    isExpanded: isExpanded
  })), showPagination && meta.totalPages > 1 && /*#__PURE__*/_react["default"].createElement(_TablePaginationStyled["default"], {
    component: "div",
    onChangePage: onPaginationChange,
    meta: meta,
    rowsPerPage: meta.perPage,
    rowsPerPageOptions: []
  }));
}

DataTable.propTypes = {
  actions: _propTypes["default"].array,
  allItems: _propTypes["default"].any,
  checkbox: _propTypes["default"].any,
  confirm: _propTypes["default"].func,
  items: _propTypes["default"].any,
  keys: _propTypes["default"].any,
  massActions: _propTypes["default"].any,
  meta: _propTypes["default"].shape({
    limit: _propTypes["default"].any,
    page: _propTypes["default"].number,
    perPage: _propTypes["default"].any,
    totalPages: _propTypes["default"].number,
    totalResults: _propTypes["default"].any
  }),
  noBorder: _propTypes["default"].bool,
  onPaginationChange: _propTypes["default"].any,
  onRowClick: _propTypes["default"].func,
  onSelect: _propTypes["default"].func,
  showNavNumbers: _propTypes["default"].any,
  showPagination: _propTypes["default"].any,
  stickyHeader: _propTypes["default"].any,
  toolBar: _propTypes["default"].bool
};
var _default = DataTable;
exports["default"] = _default;