import './InputStyling.css';

export default function Bill(props) {
   
    return (
      <form>
        <fieldset >
          <legend>Bill:</legend>
          <span>$</span><input type="text" name="bill" id="bill" onChange={(e) => props.updateBill(e.target.value)} defaultValue={29.99}/>
        </fieldset>
      </form>
    )
}