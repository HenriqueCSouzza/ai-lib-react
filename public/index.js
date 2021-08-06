import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ErrorComponent, ZagaTable } from "../src";
import theme from "../src/theme";

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  {
    id: 8,
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    parents: [
      { id: 1, lastName: "Frances", firstName: "Jon", age: 15 },
      { id: 2, lastName: "Frances", firstName: "Cersei", age: 15 },
    ],
  },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const App = () => (
  <MuiThemeProvider theme={theme}>
    <ZagaTable
      pagination={{ pageSize: rows.length }}
      items={rows}
      checkbox
      stickyHeader
      keys={[
        {
          label: "Sobrenome",
          field: "lastName",
          key: "lastName",
          expand: false,
        },
        {
          label: "Nome",
          field: "firstName",
          key: "firstName",
          expand: false,
        },
        {
          label: "Idade",
          field: "age",
          key: "age",
          expand: false,
        },
      ]}
    />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
