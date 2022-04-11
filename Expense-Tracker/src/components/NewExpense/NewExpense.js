import React from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const toggleNewExpenseHandler = () => {
    props.onToggleNewExpenseHandler();
  };

  if (!props.isNewExpenseVisible) {
    return (
      <div className="new-expense">
        <button onClick={toggleNewExpenseHandler}>Add New Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCloseNewExpense={toggleNewExpenseHandler}
      />
    </div>
  );
};

export default NewExpense;
