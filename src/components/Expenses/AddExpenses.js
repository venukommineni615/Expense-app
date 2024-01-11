import "./AddExpense.css"
const AddExpense=()=>{
    const printValue=(event)=>{
        console.log(event.target.value)
    }
    return(
        <form>
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" onChange={printValue}></input>
            <label htmlFor="expense">Expense:</label>
            <input type="text" id="expense" name="expense" onChange={printValue}></input>
            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name='location' onChange={printValue}></input>
            <label htmlFor="price">Price:</label>
            <input type="number" id="price" name="price" onChange={printValue}></input>
            <button type="submit">Submit</button>

        </form>
    )
}
export default AddExpense