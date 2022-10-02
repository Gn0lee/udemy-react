import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpesnse = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const saveExpenseHandler = (expenseData) => {
    const data = { ...expenseData, id: Math.random().toString() };

    props.onAddExpense(data);
  };

  const addNewExpenseClickHandler = () => {
    setIsEdit(true);
  };

  const cancelClickHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="new-expense">
      {!isEdit && (
        <button type="button" onClick={addNewExpenseClickHandler}>
          Add New Expense
        </button>
      )}
      {isEdit && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          onCancelClick={cancelClickHandler}
        />
      )}
    </div>
  );
};

export default NewExpesnse;
