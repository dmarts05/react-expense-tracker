import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemDescription from "./ExpenseItemDescription";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const date = props.date;
  const title = props.title;
  const amount = props.amount;

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={date} />
      <ExpenseItemDescription
        title={title}
        amount={amount}
      ></ExpenseItemDescription>
    </Card>
  );
};

export default ExpenseItem;
