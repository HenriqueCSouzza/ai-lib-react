import React, { useRef, useEffect } from "react";
import clsx from "clsx";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";
import { darken } from "polished";
const useStyles = makeStyles((theme) => ({
  root: {
    "& td": {
      backgroundColor: "#F5F8FA",
    },
  },
  highLightRow: {
    backgroundColor: "#eaf0f6d1",
  },
  clickableRow: {
    cursor: "pointer",
    "&:hover": {
      background: darken(0.01, theme.palette.primary.light),
    },
  },
}));

function changedValue(item, key) {
  if (key.expandedRowList) {
    return typeof item[key.expandedRowList] !== "undefined"
      ? item[key.expandedRowList]
      : [];
  }
}

const TableExpandableRow = ({
  children,
  indexItem,
  controlExpanded,
  keys,
  item,
  Items,
  highLightRow,
  onRowClick,
  ...otherProps
}) => {
  const itsMe = useRef(null);
  const classes = useStyles();

  const createRows = (keysCreate, itemCreate, parentIndex) => {
    const selectExpandedRowList = keysCreate?.map(
      (key) => Items[parentIndex][key.expandedRowList]
    );

    const listCells = keysCreate?.map((key, columnIndex) => {
      if (key.expandedRowList) {
        const fieldSelected = changedValue(itemCreate, key);
        const createdCells = fieldSelected.map((expandedMap, expandedIndex) => {
          let valueExpanded;
          valueExpanded =
            typeof expandedMap[key.expandedFieldList] !== "undefined"
              ? expandedMap[key.expandedFieldList]
              : "";
          if (typeof key.mutatorExpanded !== "undefined") {
            valueExpanded = key.mutatorExpanded(
              valueExpanded,
              expandedMap,
              expandedIndex,
              parentIndex,
              fieldSelected
            );
          }

          return (
            <TableCell
              key={columnIndex}
              width={key.width}
              style={{ minWidth: key.minWidth }}
            >
              {valueExpanded}
            </TableCell>
          );
        });
        return createdCells;
      } else {
        return null;
      }
    });

    if (
      typeof selectExpandedRowList[0] !== "undefined" &&
      selectExpandedRowList[0].length > 0
    ) {
      return selectExpandedRowList[0].map((row, index) => {
        return (
          <TableRow className={classes.root} key={index}>
            {listCells.map((cell) => {
              return cell[index];
            })}
          </TableRow>
        );
      });
    }
  };

  const executeScroll = () => itsMe.current.scrollIntoView();

  useEffect(() => {
    if (item.id === highLightRow) {
      executeScroll();
    }
  }, [item.id, highLightRow]);

  return (
    <>
      <TableRow
        ref={itsMe}
        className={clsx({
          [classes.clickableRow]: typeof onRowClick !== "undefined",
          [classes.highLightRow]: item.id === highLightRow,
        })}
      >
        {children}
      </TableRow>
      {controlExpanded && createRows(keys, item, indexItem)}
    </>
  );
};

export default TableExpandableRow;
