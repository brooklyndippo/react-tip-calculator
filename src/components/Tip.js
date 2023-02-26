export default function Tip({calc: {bill, tipPercent, split, splitNum}}) {

    let tip = bill * tipPercent;

    if (split) {
        tip = tip / splitNum;
    }

    return (
      <div>
        <p>Tip: ${tip.toFixed(2)}</p>
      </div>
    )
}
