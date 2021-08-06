import PropTypes from "prop-types";
import React, { useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import pt from "date-fns/locale/pt-BR";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
const isWeekDay = (date) =>
  date.getDay() === 6 || date.getDay() === 0 ? false : true;

function DatePicker({
  changeDate,
  initialDate,
  minDate,
  maxDate,
  label = "adicionar label",
  classe,
  className,
  minDateMessage = "Data fora do prazo de entrega, favor mudar!",
  invalidDateMessage = "Selecione uma data",
  variant = "inline",
  format = "dd/MM/yyyy",
  id = "picker",
}) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    changeDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={pt}>
      <KeyboardDatePicker
        autoOk
        disableToolbar
        margin="normal"
        variant={variant}
        format={format}
        id={`date-picker-${id}`}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        style={{ margin: 0 }}
        label={label}
        locale={pt}
        inputVariant="outlined"
        minDate={minDate}
        maxDate={maxDate}
        minDateMessage={minDateMessage}
        invalidDateMessage={invalidDateMessage}
        value={selectedDate}
        onChange={handleDateChange}
        classe={classe}
        className={className}
        renderDay={(day, selectedDate, dayInCurrentMonth, dayComponent) => {
          if (isWeekDay(day)) {
            return <>{dayComponent}</>;
          } else {
            return null;
          }
        }}
      />
    </MuiPickersUtilsProvider>
  );
}

DatePicker.propTypes = {
  changeDate: PropTypes.func,
  initialDate: PropTypes.object,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
};

export default DatePicker;
