import './App.css';
import ExpenseItems from './components/ExpenseItems';

function App() {
  const expenses = [
    {
      date: '2023-01-01',
      expense: 'Groceries',
      expenseLocation: 'Supermarket',
      price: 50
    },
    {
      date: '2023-02-15',
      expense: 'Dinner',
      expenseLocation: 'Restaurant',
      price: 30
    },
    {
      date: '2023-03-10',
      expense: 'Transportation',
      expenseLocation: 'Gas Station',
      price: 40
    },
    {
      date: '2023-04-22',
      expense: 'Entertainment',
      expenseLocation: 'Movie Theatre',
      price: 25
    },
    {
      date: '2023-05-05',
      expense: 'Healthcare',
      expenseLocation: 'Pharmacy',
      price: 60
    }
  ];
  
  return (
    <div className="App">
      {expenses.map((ele)=>{

        return (<ExpenseItems date={ele.date} expense={ele.expense} location={ele.expenseLocation} price={ele.price}></ExpenseItems>)
      })}
    </div>
  );
}

export default App;
