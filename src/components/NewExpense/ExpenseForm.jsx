import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Alternative way of creating states with objects

  // const [userInput, setUserInput] = useState({
  //   inputTitle: "",
  //   inputAmount: "",
  //   inputDate: "",
  // });

  // const titleChangeHandler = (e) => {
  //   setUserInput((prevUserInput) => {
  //     return { ...prevUserInput, inputTitle: e.target.value };
  //   });
  // };

  // const amountChangeHandler = (e) => {
  //   setUserInput((prevUserInput) => {
  //     return { ...prevUserInput, inputAmount: e.target.value };
  //   });
  // };

  // const dateChangeHandler = (e) => {
  //   setUserInput((prevUserInput) => {
  //     return { ...prevUserInput, inputDate: e.target.value };
  //   });
  // };

  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const titleChangeHandler = (e) => {
    setInputTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setInputDate(e.target.value);
  };

  const submitExpenseHandler = (e) => {
    // Prevent form from reloading the page
    e.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: Number.parseFloat(inputAmount),
      date: new Date(inputDate),
    };

    // Reset form after gathering data
    setInputTitle("");
    setInputAmount("");
    setInputDate("");

    props.onSaveExpenseData(expenseData);
  };

  return (
    <form onSubmit={submitExpenseHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            onChange={titleChangeHandler}
            name="title"
            value={inputTitle}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            required
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            required
            type="date"
            name="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
