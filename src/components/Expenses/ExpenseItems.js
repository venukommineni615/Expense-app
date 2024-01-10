import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
const ExpenseItems=(props)=>{
    const deleteElement=(event)=>{
        event.target.parentElement.remove()
    }
    return(
        <div className='expense-item'>

        <ExpenseDate date ={props.date} />
        
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} expense={props.expense} />
        <button onClick={deleteElement}>Delete</button>
        
        </div>
    )
}
export default ExpenseItems