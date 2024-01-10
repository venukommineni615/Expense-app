import "./ExpenseItems.css"
function ExpenseItems(props){
    return(
        <div className="expense-item">
            <div>
                {props.date}
            </div>
            <div className="expense-item__description">
                <h2>{props.expense}</h2>
                <p>{props.location}</p>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div>
    )
}
export default ExpenseItems