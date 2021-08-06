import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import clsx from "clsx";
import {
  Box,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core/";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "polished";
import TableExpandableRow from "./TableExpandableRow";
import InlineLoading from "../common/InlineLoading";
const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: theme.palette.primary.main,
  },
  tableBody: {
    "& tr:last-child td": {
      borderBottom: "none !important",
    },
  },
  noBorder: {
    "& tr td": {
      borderBottom: "none !important",
    },
  },
  clickableCell: {
    cursor: "pointer",
  },
  clickableRow: {
    cursor: "pointer",
    "&:hover": {
      background: darken(0.01, theme.palette.primary.light),
    },
  },
  fixedColumn: {
    // position: '-webkit-sticky',
    position: "sticky",
    background: theme.palette.background.paper,
    left: 0,
    zIndex: 1,
  },
  expandedButton: {
    color: "#00A4BD",
    padding: 0,
  },
}));

function TableBase({
  selection,
  stickyHeader,
  noBorder,
  head,
  handleSelectAll,
  checkbox,
  items,
  keys,
  handleSelection,
  isSelected,
  setFieldValue,
  changeOnRowClick,
  onRowClick,
  actions,
  confirm,
  withChildren,
  isExpanded,
  highLightRow,
}) {
  const [controlItems, setControlItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    if (items.length > 0) {
      if (isExpanded) {
        setLoading(true);
        const itemsWithControlExpanded = items.map((item) => ({
          ...item,
          controlExpanded: false,
        }));
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

  const handleControlExpanded = (controlItem, index) => {
    const controlArray = controlItem.map((item, key) => {
      if (key === index) {
        return {
          ...item,
          controlExpanded: !controlItem[index].controlExpanded,
        };
      } else {
        return item;
      }
    });
    setControlItems(controlArray);
  };
  if (loading) {
    return <InlineLoading />;
  }
  return (
    <div>
      <Table
        stickyHeader={stickyHeader}
        className={clsx({ [classes.noBorder]: noBorder === true })}
      >
        {head && (
          <TableHead>
            <TableRow>
              {checkbox && (
                <TableCell>
                  <Checkbox
                    style={{ width: 4, height: 4 }}
                    color="primary"
                    className={classes.checkbox}
                    checked={selection.length === controlItems.length}
                    onClick={(e) => handleSelectAll(controlItems)}
                  />
                </TableCell>
              )}
              {keys?.map((key, i) => {
                return (
                  <TableCell
                    key={i}
                    style={{ minWidth: key.minWidth }}
                    className={clsx({
                      [classes.fixedColumn]: key.fixed,
                    })}
                  >
                    {key.label || key.mutatorLabel()}
                  </TableCell>
                );
              })}
              {typeof actions !== "undefined" && (
                <TableCell style={{ fontWeight: "bold", minWidth: 70 }}>
                  Ações
                </TableCell>
              )}
            </TableRow>
          </TableHead>
        )}

        <TableBody className={classes.tableBody}>
          {controlItems?.map((item, index) => {
            if (isExpanded) {
              return (
                <TableExpandableRow
                  key={index}
                  highLightRow={highLightRow}
                  item={item}
                  Items={controlItems}
                  value={index + 1}
                  keys={keys}
                  indexItem={index}
                  onRowClick={onRowClick}
                  controlExpanded={controlItems[index].controlExpanded}
                >
                  {keys?.map((key, columnIndex) => {
                    let value;
                    //TODO:substituir esses ifs para uma função decente
                    if (withChildren && key.field.split(".").length > 1) {
                      let fields = key.field.split(".");
                      value =
                        item[fields[0]] !== null
                          ? item[fields[0]][fields[1]]
                          : "";
                    } else {
                      value =
                        typeof item[key.field] !== "undefined"
                          ? item[key.field]
                          : "";
                    }
                    if (typeof key.mutator !== "undefined") {
                      value = key.mutator(
                        value,
                        item,
                        index,
                        columnIndex,
                        key.field,
                        item[key.field],
                        setFieldValue,
                        () => handleControlExpanded(controlItems, index)
                      );
                    }
                    if (key.expand) {
                      return (
                        <TableCell
                          key={columnIndex}
                          width={key.width}
                          style={{ minWidth: key.minWidth }}
                          className={clsx({
                            [classes.clickableRow]:
                              typeof onRowClick !== "undefined",
                            [classes.fixedColumn]: key.fixed,
                          })}
                          onClick={
                            typeof onRowClick !== "undefined"
                              ? () =>
                                  onRowClick(item, () =>
                                    handleControlExpanded(controlItems, index)
                                  )
                              : () => null
                          }
                        >
                          <Box display="flex" alignItems="center">
                            {value}
                            <IconButton
                              className={classes.expandedButton}
                              onClick={() =>
                                handleControlExpanded(controlItems, index)
                              }
                            >
                              {!controlItems[index].controlExpanded ? (
                                <KeyboardArrowDownIcon />
                              ) : (
                                <KeyboardArrowUpIcon />
                              )}
                            </IconButton>
                          </Box>
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell
                        key={columnIndex}
                        width={key.width}
                        style={{ minWidth: key.minWidth }}
                        className={clsx({
                          [classes.clickableRow]:
                            typeof onRowClick !== "undefined",
                          [classes.fixedColumn]: key.fixed,
                        })}
                        onClick={
                          typeof onRowClick !== "undefined"
                            ? () =>
                                onRowClick(item, () =>
                                  handleControlExpanded(controlItems, index)
                                )
                            : () => null
                        }
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableExpandableRow>
              );
            } else {
              return (
                <TableRow
                  key={index}
                  className={clsx({
                    [classes.clickableRow]: typeof onRowClick !== "undefined",
                  })}
                >
                  {checkbox && (
                    <TableCell onClick={(e) => handleSelection(item)}>
                      <Checkbox
                        style={{ width: 4, height: 4 }}
                        checked={isSelected(item)}
                        color="primary"
                        className={classes.checkbox}
                      />
                    </TableCell>
                  )}
                  {keys?.map((key, columnIndex) => {
                    let value;
                    //TODO:substituir esses ifs para uma função decente
                    if (withChildren && key.field.split(".").length > 1) {
                      let fields = key.field.split(".");
                      value =
                        item[fields[0]] !== null
                          ? item[fields[0]][fields[1]]
                          : "";
                    } else {
                      value =
                        typeof item[key.field] !== "undefined"
                          ? item[key.field]
                          : "";
                    }
                    if (typeof key.mutator !== "undefined") {
                      value = key.mutator(
                        value,
                        item,
                        index,
                        columnIndex,
                        key.field,
                        item[key.field],
                        setFieldValue,
                        () => console.log("teste")
                      );
                    }
                    return (
                      <TableCell
                        key={columnIndex}
                        width={key.width}
                        style={{ minWidth: key.minWidth }}
                        className={clsx({
                          [classes.clickableRow]:
                            typeof onRowClick !== "undefined",
                          [classes.fixedColumn]: key.fixed,
                        })}
                        onClick={
                          typeof onRowClick !== "undefined"
                            ? () => onRowClick(item)
                            : () => null
                        }
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                  {typeof actions !== "undefined" && (
                    <TableCell>
                      {actions?.map((action, i) => {
                        const handleConfirmationItem = () =>
                          action.onClick(item, index);
                        return (
                          <IconButton
                            size="small"
                            color={action.variant ? action.variant : "primary"}
                            key={i}
                            disabled={
                              typeof action.disabled === "undefined"
                                ? false
                                : action.disabled(item, action, index)
                            }
                            onClick={
                              action.confirmation === true
                                ? confirm(handleConfirmationItem)
                                : () => action.onClick(item, index)
                            }
                          >
                            {action.label}
                          </IconButton>
                        );
                      })}
                    </TableCell>
                  )}
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
}

TableBase.propTypes = {
  actions: PropTypes.array,
  changeOnRowClick: PropTypes.func,
  checkbox: PropTypes.any,
  confirm: PropTypes.func,
  handleSelectAll: PropTypes.func,
  handleSelection: PropTypes.func,
  head: PropTypes.any,
  isSelected: PropTypes.func,
  items: PropTypes.array,
  keys: PropTypes.array,
  noBorder: PropTypes.bool,
  onRowClick: PropTypes.func,
  selection: PropTypes.array,
  setFieldValue: PropTypes.any,
  stickyHeader: PropTypes.any,
};

export default TableBase;
