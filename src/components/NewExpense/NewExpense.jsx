import { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseCounter, setExpenseCounter] = useState(0);

  const saveExpenseDataHandler = (inputExpenseData) => {
    const expenseData = {
      ...inputExpenseData,
      id: expenseCounter,
    };

    setExpenseCounter((prevCounter) => prevCounter + 1);

    props.onNewExpense(expenseData);
  };

  const [showNewExpenseForm, setShowNewExpenseForm] = useState(false);

  const toggleNewExpenseForm = () => {
    setShowNewExpenseForm((prev) => !prev);
  };

  return (
    <div className="new-expense">
      {showNewExpenseForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          toggleNewExpenseForm={toggleNewExpenseForm}
        />
      ) : (
        <button onClick={toggleNewExpenseForm}>Add Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
