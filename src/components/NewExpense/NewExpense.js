import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  // To get data from a child component, we create a function in the parent file, add that function as a prop to the parent component. We call the same function in child file like this:

  // props.functionName(data)

  // Which then passes the data to the parent file as an argument to the function and then we are able to process that data.

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // enteredExpenseData is received from the child element, which we then store into expenseData variable below
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // Forwarding the data to AppJs
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
