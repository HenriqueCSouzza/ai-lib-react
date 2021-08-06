import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Box, Grid, Link, Paper, TableContainer } from "@material-ui/core/";
import Button from "./Button";
import { SelectOutlined } from "./Select";
import BodyText from "./BodyText";
import PaginationMeta from "./PaginationMeta";
import TablePaginationStyled from "./TablePaginationStyled";
import TableBase from "./TableBase";
import DataTableSkeleton from "./DataTableSkeleton";

function DataTable({
  keys,
  items,
  allItems,
  actions,
  checkbox,
  meta,
  onPaginationChange,
  showPagination,
  massActions,
  showNavNumbers,
  stickyHeader,
  head = true,
  onRowClick,
  noBorder,
  onSelect,
  size = "small",
  toolBar = true,
  confirm,
  setFieldValue,
  loading,
  withChildren,
  maxHeight,
  isExpanded,
  highLightRow,
  limitSelection,
  limitSelectionEvent,
}) {
  const [selection, setSelection] = useState([]);
  const [massAction, setMassAction] = useState("");
  const [selectItems, setSelectItem] = useState([]);
  const [statusSelection, setStatusSelection] = useState(false);
  useEffect(() => {
    setMassAction([]);
    typeof allItems !== "undefined" && setSelectItem(allItems);
  }, [selection, selectItems, allItems]);

  useEffect(() => {
    if (statusSelection) {
      onSelect && onSelect(selectItems.map((i) => ({ id: i })));
    } else {
      onSelect && onSelect(selection);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection, selectItems, statusSelection]);

  function changeOnRowClick(onRowClick, classes) {
    if (typeof onRowClick !== "undefined") {
      return classes.clickableRow;
    } else {
      return null;
    }
  }

  const handleSelection = (item) => {
    const itemExists = selection.filter((i) => i.id === item.id).length;
    if (itemExists > 0) {
      const deletedItem = selection.filter((i) => i.id !== item.id);
      setSelection(deletedItem);
    } else {
      if (limitSelection) {
        if (selection.length <= limitSelection - 1) {
          const newItem = [...selection, item];
          setSelection(newItem);
        } else {
          limitSelectionEvent &&
            limitSelectionEvent({
              msg: "Chegou no limite de itens selecionados",
              error: true,
            });
        }
      } else {
        const newItem = [...selection, item];
        setSelection(newItem);
      }
    }
  };

  const handleSelectAll = (items) => {
    if (selection.length === items.length) {
      setSelection([]);
      setStatusSelection(false);
    } else {
      setSelection(items);
    }
  };

  const handleMassActionSubmission = () => {
    const mass = massActions.filter((i) => i.key === massAction);
    if (mass.length > 0) {
      if (statusSelection) {
        let selectionAllItems = [];
        selectItems.map((i) => selectionAllItems.push({ id: i }));
        massActions
          .filter((i) => i.key === massAction)[0]
          .action(selectionAllItems);
      } else {
        massActions.filter((i) => i.key === massAction)[0].action(selection);
      }
    }
  };

  const handleClearSelection = (item) => {
    handleSelectAll(item);
    setSelection([]);
    setStatusSelection(false);
  };

  const availableMassActions =
    typeof massActions !== "undefined" &&
    massActions.filter((massAction) => massAction.isAvailable(selection));

  const isSelected = (item) => {
    return selection.filter((i) => i.id === item.id).length > 0 ? true : false;
  };

  return (
    <Paper>
      {toolBar && (
        <Box px={2}>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            style={{ height: 50 }}
          >
            <Grid item>
              {typeof massActions !== "undefined" &&
                massActions.length > 0 &&
                selection.length > 0 && (
                  <>
                    <SelectOutlined
                      onChange={(e) => setMassAction(e.target.value)}
                      value={massAction}
                    >
                      <option>Ações em massa</option>
                      {availableMassActions.map((massAction, key) => {
                        return (
                          <option key={key} value={massAction.key}>
                            {massAction.label}
                          </option>
                        );
                      })}
                    </SelectOutlined>{" "}
                    <Button
                      size={size}
                      color="default"
                      variant="outlined"
                      onClick={() => handleMassActionSubmission()}
                    >
                      Aplicar
                    </Button>
                  </>
                )}
            </Grid>
            <Grid item>
              {typeof massActions !== "undefined" &&
                availableMassActions.length > 0 &&
                selectItems.length > 0 &&
                selection.length >= meta.limit && (
                  <>
                    {statusSelection ? (
                      <Box style={{ display: "flex" }}>
                        <BodyText size="lg">
                          Todos os {selectItems.length} foram selecionados.
                        </BodyText>
                        {availableMassActions.length > 0 && (
                          <Link
                            component="button"
                            color="primary"
                            variant="body1"
                            underline="none"
                            onClick={() => handleClearSelection(selectItems)}
                          >
                            Limpar seleção
                          </Link>
                        )}
                      </Box>
                    ) : (
                      <Box style={{ display: "flex" }}>
                        <BodyText size="lg">
                          {selection.length} itens selecionados.
                        </BodyText>
                        {availableMassActions.length > 0 && (
                          <Link
                            component="button"
                            color="primary"
                            variant="body1"
                            underline="none"
                            onClick={() => setStatusSelection(true)}
                          >
                            Selecionar todos os {selectItems.length}
                          </Link>
                        )}
                      </Box>
                    )}
                  </>
                )}
            </Grid>
            {showNavNumbers && (
              <Grid item>
                <PaginationMeta meta={meta} />
              </Grid>
            )}
          </Grid>
        </Box>
      )}
      {loading ? (
        <DataTableSkeleton />
      ) : (
        <TableContainer style={{ maxHeight: maxHeight }}>
          <TableBase
            highLightRow={highLightRow}
            selection={selection}
            stickyHeader={stickyHeader}
            noBorder={noBorder}
            head={head}
            handleSelectAll={handleSelectAll}
            checkbox={checkbox}
            items={items}
            keys={keys}
            handleSelection={handleSelection}
            isSelected={isSelected}
            limitSelection={limitSelection}
            setFieldValue={setFieldValue}
            changeOnRowClick={changeOnRowClick}
            onRowClick={onRowClick}
            actions={actions}
            confirm={confirm}
            withChildren={withChildren}
            isExpanded={isExpanded}
          />
        </TableContainer>
      )}
      {showPagination && meta.totalPages > 1 && (
        <TablePaginationStyled
          component="div"
          onChangePage={onPaginationChange}
          meta={meta}
          rowsPerPage={meta.perPage}
          rowsPerPageOptions={[]}
        />
      )}
    </Paper>
  );
}

DataTable.propTypes = {
  actions: PropTypes.array,
  allItems: PropTypes.any,
  checkbox: PropTypes.any,
  confirm: PropTypes.func,
  items: PropTypes.any,
  keys: PropTypes.any,
  massActions: PropTypes.any,
  meta: PropTypes.shape({
    limit: PropTypes.any,
    page: PropTypes.number,
    perPage: PropTypes.any,
    totalPages: PropTypes.number,
    totalResults: PropTypes.any,
  }),
  noBorder: PropTypes.bool,
  onPaginationChange: PropTypes.any,
  onRowClick: PropTypes.func,
  onSelect: PropTypes.func,
  showNavNumbers: PropTypes.any,
  showPagination: PropTypes.any,
  stickyHeader: PropTypes.any,
  toolBar: PropTypes.bool,
};

export default DataTable;
