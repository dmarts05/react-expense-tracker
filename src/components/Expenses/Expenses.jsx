import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [expensesYear, setExpensesYear] = useState("2022");

  const expensesYearChangeHandler = (newExpensesYear) => {
    setExpensesYear(newExpensesYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() == expensesYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        currentFilteredYear={expensesYear}
        onFilteredYearChange={expensesYearChangeHandler}
      />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
