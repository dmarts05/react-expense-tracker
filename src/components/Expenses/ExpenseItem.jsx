import Card from "../UI/Card";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemDescription from "./ExpenseItemDescription";

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <ExpenseItemDescription
        title={props.title}
        amount={props.amount}
      ></ExpenseItemDescription>
    </Card>
  );
};

export default ExpenseItem;
