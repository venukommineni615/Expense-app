import './FormOpener.css'
const FormOpener=(props)=>{
    return(
        <div className="form-opener">
            <button type="button" onClick={props.open}>Add Expense</button>
        </div>
    )
}
export default FormOpener