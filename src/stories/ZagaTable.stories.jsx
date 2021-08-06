import React from "react";

import ZagaTable from "../ZagaTable";
const data = [
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
const Template = (args) => {
  console.log({ args });
  return (
    <ZagaTable
      {...args}
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
  );
};

export const WithCheckBox = Template.bind({});
WithCheckBox.args = {
  items: data,
  pagination: { pageSize: 9 },
  checkbox: true,
  stickyHeader: true,
};

export const WithoutCheckBox = Template.bind({});
WithoutCheckBox.args = {
  items: data,
  pagination: { pageSize: 9 },
  checkbox: false,
  stickyHeader: true,
};

export default {
  title: "Example/ZagaTable",
  component: ZagaTable,
};
