import React, {useState} from "react"
import "./AddExpense.css"
const AddExpense=(props)=>{
    const [price,setPrice]=useState("")
    const [location,setLocation]=useState("")
    const [date,setDate]=useState("")
    const [expense,setExpense]=useState("")
    const dataSubmitted=(event)=>{
        event.preventDefault()
        props.open()
        props.newExpense({
            id:Math.random(),
            date:new Date(event.target.date.value),
            expense: event.target.expense.value,
            expenseLocation: event.target.location.value,
            amount: event.target.price.value
        })
        setDate("")
        setExpense("")
        setLocation("")
        setPrice("")
        

    }
    const printDate=(event)=>{
        setDate(event.target.value)
    }
    const printExpense=(event)=>{
        setExpense(event.target.value)
    }
    const printLocation=(event)=>{
        setLocation(event.target.value)
    }
    const printPrice=(event)=>{
        setPrice(event.target.value)
    }
    return(
       
        <form onSubmit={dataSubmitted}>
        <div class="form-row">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="mydate" onChange={printDate} required value={date} min="2019-01-01" max="2022-12-31"></input>
        </div>
        <div class="form-row">
          <label htmlFor="expense">Expense:</label>
          <input type="text" id="expense" name="expense" onChange={printExpense} value={expense} required></input>
        </div>
        <div class="form-row">
          <label htmlFor="location">Location:</label>
          <input type="text" id="location" name='location' onChange={printLocation} value={location} required></input>
        </div>
        <div class="form-row">
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" onChange={printPrice} value={price} required min="1"></input>
        </div>
        <button type="submit">Submit</button>
      </form>
      
    )
}
export default AddExpense