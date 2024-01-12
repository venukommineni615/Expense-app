const FormOpener=(props)=>{
    return(
        <div className="form-opener">
            <button type="click" onClick={props.open}>Add Expense</button>
        </div>
    )
}
export default FormOpener