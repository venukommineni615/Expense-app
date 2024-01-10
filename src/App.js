import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
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
      price: 60
    }
  ];
  
  return (
    <div className="App">
      {expenses.map((ele)=>{

        return (<ExpenseItems date={ele.date} expense={ele.expense} location={ele.expenseLocation} amount={ele.amount}></ExpenseItems>)
      })}
    </div>
  );
}

export default App;
