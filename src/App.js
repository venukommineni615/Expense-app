import './App.css';
import React, {useState} from "react"
import AddExpense from './components/Expenses/AddExpenses';
import FilteredList from './components/FilterComponents/FilteredList';
import ExpenseFilter from './components/FilterComponents/ExpenseFilter';

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
const App=()=>{
  const [myexpenses, setMyexpenses]=useState(expenses)
  const appendExpense=(newExpense)=>{
      setMyexpenses((prevExpenses)=>{
        return [newExpense, ...prevExpenses]
      })
   }
   const [filterYear,setFilterYear]=useState('2020')
   const dropdownYear=(selectedYear)=>{
    setFilterYear(selectedYear)
   }
   let filterExpenseList=myexpenses.filter((ele)=>{
      return ele.date.getFullYear().toString() === filterYear;
  })
  
  return (
    <div className="App">
      <AddExpense newExpense={appendExpense}></AddExpense>
      <ExpenseFilter selected={filterYear} changeFilter={dropdownYear}></ExpenseFilter>
      <FilteredList renderList={filterExpenseList}></FilteredList>
      {filterExpenseList.length===1 && <p style={{color:"white"}}>Only single Expense here. Please add more...</p>}
    </div>
  );
}

export default App;
