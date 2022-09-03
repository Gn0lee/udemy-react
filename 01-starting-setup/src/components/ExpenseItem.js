import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2022, 9, 3);
  const expenseTitle = "보험비";
  const expesnseAmount = 200;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expesnseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
