import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
function ExpenseItems(props){
    return(
        <div className='expense-item'>

        <ExpenseDate date ={props.date} />
        
        <ExpenseDetails amount={props.amount}  location={props.location}   title={props.title} expense={props.expense} />
        
        </div>
    )
}
export default ExpenseItems