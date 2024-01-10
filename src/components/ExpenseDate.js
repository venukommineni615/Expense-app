import "./ExpenseDate.css"

function ExpenseDate(props){
    const month=props.date.toLocaleString("en-US",{month:"short"})
    const date=props.date.toLocaleString("en-US",{day:"numeric"})
    const year=props.date.getFullYear()
    return(
        <div className="calendar">
            <div className="month">{month}</div>
            <div className="year">{year}</div>
            <div className="date">{date}</div>
        </div>
    )
}
export default ExpenseDate