import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // Destructuring of State Functions
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* Single state to handle all the values */
  // const [userinput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  // Event Listeners
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    /* While we set the state values for one event, we must take care to incorporate for all the state values, because if we care for just one value, the others will be vanished, that's why we incorporate the spread operator, that we override in the next line itself  */

    // setUserInput({
    //   ...userinput,
    //   enteredTitle: e.target.value,
    // });

    /* An alternative way is to add an arrow function to the setUserInput function, it automatically receives previous state, and this arrow function is automatically executed by react */

    // setUserInput((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, enteredTitle: e.target.value };
    // });

    console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    // setUserInput({
    //   ...userinput,
    //   enteredAmount: e.target.value,
    // });

    // setUserInput((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, enteredAmount: e.target.value };
    // });

    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userinput,
    //   enteredDate: e.target.value,
    // });
    // setUserInput((prevState) => {
    //   console.log(prevState);
    //   return { ...prevState, enteredDate: e.target.value };
    // });
    console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  // const openForm = () => {
  //   renderForm = ;
  // };
  // const renderForm = (
  //   <div className="new-expense__actions">
  //     <button onClick={openForm}>Add Expense</button>
  //   </div>
  // );

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label className="lab">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
