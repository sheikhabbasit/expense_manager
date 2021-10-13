import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseBlock.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseBlock(props) {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filterYear = (receivedYear) => {
    // console.log(receivedYear, "ExpenseBlock");
    setSelectedYear(receivedYear);
    console.log(selectedYear, "selected year");
  };
  const filtered = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  // console.log(filtered);
  // const dateYear = props.date.toLocaleString("en-GB", { year: "numeric" });
  // console.log(dateYear);

  return (
    <Card className="expenses">
      <ExpensesFilter presetYear={selectedYear} setYear={filterYear} />
      <ExpensesChart expenses={filtered} />
      <ExpensesList items={filtered} />
    </Card>
  );
}
export default ExpenseBlock;
