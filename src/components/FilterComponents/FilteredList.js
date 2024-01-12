import ExpenseItems from "../Expenses/ExpenseItems"
const FilteredList=(props)=>{
    if(props.renderList.length===0){
        return(<p style={{color:"white"}}>No expenses are found</p>)
    }
   else{
    return(
      props.renderList.map((ele)=>{
      return (<ExpenseItems key={ele.id} date={ele.date} expense={ele.expense} location={ele.expenseLocation} amount={ele.amount}></ExpenseItems>)
    }))
  }
}
export default FilteredList