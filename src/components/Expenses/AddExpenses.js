import React, {useState} from "react"
import "./AddExpense.css"
const AddExpense=()=>{
    const [price,setPrice]=useState(0)
    const [location,setLocation]=useState("")
    const [date,setDate]=useState("")
    const [title,setTitle]=useState("")
    const [expense,setExpense]=useState("")
    const dataSubmitted=(event)=>{
        setTitle(event.target.title.value)
        setDate(event.target.date.value)
        setExpense(event.target.expense.value)
        setLocation(event.target.location.value)
        setPrice(event.target.price.value)
    }
    const printValue=(event)=>{
        console.log(event.target.value)
    }
    return(
        <form>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" onChange={printValue}required></input>
            <label htmlFor="expense">Expense:</label>
            <input type="text" id="expense" name="expense" onChange={printValue} required></input>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name='location' onChange={printValue} required></input>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" onChange={printValue} required></input>
            <button type="submit" onSubmit={dataSubmitted}>Submit</button>

        </form>
    )
}
export default AddExpense