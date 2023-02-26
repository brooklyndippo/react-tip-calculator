export default function Split(props) {
    
    //create a display that only shows if the box is checked
    const splitInto = props.split ? (
      <label>
      How many ways?
      <input type="number" name="split" id="split-tip" defaultValue='2' onChange={(e)=>props.setSplitNum(e.target.value)}/>
      </label>
    ) : null;

    return (
      <form>
        <label>
          Split Tip?
          <input type="checkbox" name="split-between" id="split-between" onChange={()=>props.setSplit(!props.split)}/>
        </label>
        {splitInto}
      </form>
    )
}
