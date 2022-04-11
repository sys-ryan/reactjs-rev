import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpenses = props.filteredExpenses;

  if (filteredExpenses.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return filteredExpenses.map((expense) => (
    <li className="expenses-list" key={expense.id}>
      <ExpenseItem
        // key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    </li>
  ));
};

export default ExpensesList;
