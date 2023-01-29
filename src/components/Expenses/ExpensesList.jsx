import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <p>No expenses found.</p>;

  if (props.filteredExpenses.length > 0) {
    expensesContent = props.filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ));
  }

  return <div>{expensesContent}</div>;
};

export default ExpensesList;
