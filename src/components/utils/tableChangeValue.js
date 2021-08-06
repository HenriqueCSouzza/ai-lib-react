export default function tableChangeValue({
  key,
  item,
  columnIndex,
  index,
  withChildren,
  setFieldValue,
}) {
  let value;

  if (withChildren && key.field.split(".").length > 1) {
    let fields = key.field.split(".");
    return item[fields[0]] !== null ? item[fields[0]][fields[1]] : "";
  } else if (typeof key.mutator !== "undefined") {
    return key.mutator(
      value,
      item,
      index,
      columnIndex,
      key.field,
      item[key.field],
      setFieldValue
    );
  } else {
    return typeof item[key.field] !== "undefined" ? item[key.field] : "";
  }
}
