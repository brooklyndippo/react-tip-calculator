import {useState} from 'react';
import './App.css';
import Bill from './components/Bill';
import Split from './components/Split';
import TipPercent from './components/TipPercent';
import Tip from './components/Tip';

function App() {

  const defaultValues = {
    bill: 20,
    tipPercent: 0.15,
    split: false,
    splitNum: 2
  };
  const [calc, setCalc] = useState(defaultValues);

  return (
    <div className="App">
          <Bill 
            updateBill = {newBill  => setCalc(calc => ({...calc, bill: newBill}))}
          />
          <TipPercent 
            updateTip = {newTip  => setCalc(calc => ({...calc, tipPercent: newTip}))}
          />
          <Split 
            split = {calc.split}
            setSplit = {splitBill => setCalc(calc => ({...calc, split: splitBill}))}
            setSplitNum = {splitNum => setCalc(calc => ({...calc, splitNum: splitNum}))}
          />
          <Tip calc={calc} />
    </div>
  );
}

export default App;
