import './TipPercent.css'

export default function TipPercent(props) {
    
    // function handleChange(e) {
    //     setCalc(calc => ({
    //         ...calc,
    //         tipPercent: e.target.value
    //       }))
    // }
    
    // function handleCustomTip(e) {
    //     setCalc(calc => ({
    //         ...calc,
    //         tipPercent: (e.target.value/100)
    //       }))
    // }

    const customTip = document.getElementById('custom-tip');

    return (
        <form>
        <fieldset>
            <legend>Tip Percentage:</legend>

            {/* Default Increments */}
            
            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-15"
            value="0.15"
            onChange={() => props.updateTip(.15)}
            defaultChecked
            />
            <label htmlFor="tip-percent-15" className="default-tip" >
            {`15% \n Good`}</label>

            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-20"
            value="0.20"
            onChange={() => props.updateTip(.20)}
            />
            <label htmlFor="tip-percent-20" className="default-tip">
            {`20% \n Great`}</label>

            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-25"
            value="0.25"
            onChange={() => props.updateTip(.25)}
            />
            <label htmlFor="tip-percent-25" className="default-tip">
            {`25% \n Amazing`}</label>

            {/* Custom Tip */}
            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-custom"
            onChange={() => props.updateTip(customTip.value/100)}
            />
            <label htmlFor="tip-percent-custom" className="default-tip">
            Custom Tip %</label>
            <input
            type="number"
            name="custom-tip"
            id="custom-tip"
            defaultValue={20}
            onChange={(e) => props.updateTip(e.target.value/100)}
            />
        </fieldset>
        </form>
    );
}