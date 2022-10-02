import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === Number(selectedYear)
  );

  let expenseItems = <p>No Items</p>;

  if (filteredExpenses.length > 0) {
    expenseItems = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeYear={yearChangeHandler}
        selectedYear={selectedYear}
      />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
