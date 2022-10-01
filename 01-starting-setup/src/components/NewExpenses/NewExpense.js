import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpesnse = (props) => {
  const saveExpenseHandler = (expenseData) => {
    const data = { ...expenseData, id: Math.random().toString() };

    props.onAddExpense(data);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler} />
    </div>
  );
};

export default NewExpesnse;
