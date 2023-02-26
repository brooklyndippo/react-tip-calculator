export default function Bill(props) {
   
    return (
      <form>
        <label>
          Bill
          <input type="text" name="bill" id="bill" onChange={(e) => props.updateBill(e.target.value)} defaultValue={20.00}/>
        </label>
      </form>
    )
}