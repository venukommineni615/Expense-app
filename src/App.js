import './App.css';
import React, {useState} from "react"
import AddExpense from './components/Expenses/AddExpenses';
import ExpenseItems from './components/Expenses/ExpenseItems';
import ExpenseFilter from './components/FilterComponents/ExpenseFilter';

const App=()=>{
 
  const expenses = [
    {
      date:new Date('2023-01-01'),
      expense: 'Groceries',
      expenseLocation: 'Supermarket',
      amount: 50
    },
    {
      date:new Date('2023-02-15'),
      expense: 'Dinner',
      expenseLocation: 'Restaurant',
      amount: 30
    },
    {
      date: new Date('2023-03-10'),
      expense: 'Transportation',
      expenseLocation: 'Gas Station',
      amount: 40
    },
    {
      date: new Date('2023-04-22'),
      expense: 'Entertainment',
      expenseLocation: 'Movie Theatre',
      amount: 25
    },
    {
      date: new Date('2023-05-05'),
      expense: 'Healthcare',
      expenseLocation: 'Pharmacy',
      amount: 60
    }
  ];
  let [myexpenses, setMyexpenses]=useState(expenses)
   const appendExpense=(newExpense)=>{
      expenses.push(newExpense)
      setMyexpenses((prevExpenses)=>{
        return [...prevExpenses,newExpense]
      })
   }
   const [filterYear,setFilterYear]=useState('2020')
   const dropdownYear=(selectedYear)=>{
    setFilterYear(selectedYear)
   }
   
  return (
    <div className="App">
      <AddExpense newExpense={appendExpense}></AddExpense>
      <ExpenseFilter selected={filterYear} changeFilter={dropdownYear}></ExpenseFilter>
      {myexpenses.map((ele)=>{

        return (<ExpenseItems date={ele.date} expense={ele.expense} location={ele.expenseLocation} amount={ele.amount}></ExpenseItems>)
      })}
    </div>
  );
}

export default App;
