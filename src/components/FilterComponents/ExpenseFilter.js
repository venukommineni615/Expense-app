import React from "react"
import './ExpenseFilter.css'
const ExpenseFilter=(props)=>{
    const dropdownChange=(event)=>{
        props.changeFilter(event.target.value)
    }
    return (
        <div className="filterContainer">
            <label className="filterLabel">Filter by year</label>
            <select className="filter" value={props.selected} onChange={dropdownChange}>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    )
}
export default ExpenseFilter