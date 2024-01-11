import React,{useState} from "react"
import "./ExpenseItems.css"
import ExpenseDate from "./ExpenseDate"
import ExpenseDetails from "./ExpenseDetails"
const ExpenseItems=(props)=>{
    const [price,setPrice]=useState(props.amount)
    const newPrice=()=>{
        setPrice(100)
    }
    const deleteElement=(event)=>{
        event.target.parentElement.remove()
    }
    return(
        <div className='expense-item'>

        <ExpenseDate date ={props.date} />
        
        <ExpenseDetails amount={price}  location={props.location}   title={props.title} expense={props.expense} />
        <button onClick={deleteElement}>Delete</button>
        <button onClick={newPrice}>Change Expense</button>
        
        </div>
    )
}
export default ExpenseItems