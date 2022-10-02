import React, { useState } from "react";

import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(selectedYear)
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={yearChangeHandler}
        selectedYear={selectedYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
