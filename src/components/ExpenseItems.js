import "./ExpenseItems.css"
function ExpenseItems(){
    const expenseDate=new Date(2024,0,10);
    const expenseTitle="Car Insurance";
    const expensePrice=999
    const LocationOfExpenditure="Hyderabad"
    return(
        <div className="expense-item">
            <div>
                {expenseDate.toDateString()}
            </div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">{expensePrice}</div>
                <p>{LocationOfExpenditure}</p>
            </div>
        </div>
    )
}
export default ExpenseItems