import './App.css';
import React, {useState} from "react"
import AddExpense from './components/Expenses/AddExpenses';
import ExpenseItems from './components/Expenses/ExpenseItems';
import ExpenseFilter from './components/FilterComponents/ExpenseFilter';

const App=()=>{
 
  const expenses = [
    {
      id:Math.random(),
      date:new Date('2020-01-01'),
      expense: 'Groceries',
      expenseLocation: 'Supermarket',
      amount: 50
    },
    {
      id:Math.random(),
      date:new Date('2022-02-15'),
      expense: 'Dinner',
      expenseLocation: 'Restaurant',
      amount: 30
    },
    {
      id:Math.random(),
      date: new Date('2021-03-10'),
      expense: 'Transportation',
      expenseLocation: 'Gas Station',
      amount: 40
    },
    {
      id:Math.random(),
      date: new Date('2020-04-22'),
      expense: 'Entertainment',
      expenseLocation: 'Movie Theatre',
      amount: 25
    },
    {
      id:Math.random(),
      date: new Date('2020-05-05'),
      expense: 'Healthcare',
      expenseLocation: 'Pharmacy',
      amount: 60
    }
  ];
  
  let [myexpenses, setMyexpenses]=useState(expenses)
   const appendExpense=(newExpense)=>{
      setMyexpenses((prevExpenses)=>{
        return [newExpense, ...prevExpenses]
      })
   }
   const [filterYear,setFilterYear]=useState('2020')
   const dropdownYear=(selectedYear)=>{
    setFilterYear(selectedYear)
   }
   let filterExpenseList=expenses.filter((ele)=>{
      return ele.date.getFullYear().toString() === filterYear;
  })
  let expenseUI=<p style={{color:"white"}}>No expenses are found</p>
  if(filterExpenseList.length>0){

    expenseUI=filterExpenseList.map((ele)=>{

      return (<ExpenseItems key={ele.id} date={ele.date} expense={ele.expense} location={ele.expenseLocation} amount={ele.amount}></ExpenseItems>)
    })
  }
  console.log(filterExpenseList)
  return (
    <div className="App">
      <AddExpense newExpense={appendExpense}></AddExpense>
      <ExpenseFilter selected={filterYear} changeFilter={dropdownYear}></ExpenseFilter>
      
      {expenseUI}
      {filterExpenseList.length===1 && <p style={{color:"white"}}>Only single Expense here. Please add more...</p>}
    </div>
  );
}

export default App;
