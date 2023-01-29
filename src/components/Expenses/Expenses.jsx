import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [expensesYear, setExpensesYear] = useState("2022");

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() == expensesYear
  );

  const expensesYearChangeHandler = (newExpensesYear) => {
    setExpensesYear(newExpensesYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentFilteredYear={expensesYear}
        onFilteredYearChange={expensesYearChangeHandler}
      />
      {filteredExpenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
