import './TipPercent.css'
import { useState } from 'react';

export default function TipPercent(props) {

    const [showCustomTip, setShowCustomTip] = useState(false);

    const customTipInput = showCustomTip ? (
        <input
        type="number"
        name="custom-tip"
        id="custom-tip"
        defaultValue={20}
        onChange={(e) => props.updateTip(e.target.value/100)}
        />
    ) : null;
    
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
            onChange={() => {props.updateTip(.15); setShowCustomTip(false);}}
            defaultChecked
            />
            <label htmlFor="tip-percent-15" className="default-tip" >
            {`15% \n Good`}</label>

            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-20"
            value="0.20"
            onChange={() => {props.updateTip(.20); setShowCustomTip(false);}}
            />
            <label htmlFor="tip-percent-20" className="default-tip">
            {`20% \n Great`}</label>

            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-25"
            value="0.25"
            onChange={() => {props.updateTip(.25); setShowCustomTip(false);}}
            />
            <label htmlFor="tip-percent-25" className="default-tip">
            {`25% \n Amazing`}</label>

            {/* Custom Tip */}
            <input
            type="radio"
            name="tip-percent"
            id="tip-percent-custom"
            onChange={() => {props.updateTip(.20); setShowCustomTip(true);}}
            />
            <label htmlFor="tip-percent-custom" className="default-tip">
            Custom Tip %</label>
            
            {customTipInput}

        </fieldset>
        </form>
    );
}