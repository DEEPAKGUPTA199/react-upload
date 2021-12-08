import React,{useState} from "react";
import "./Style.css";
import * as Math from "mathjs";

import Button from './Components/Button/index'
import ClearButton from './Components/ClearButton/index'
import Input from './Components/Input/index'


function App() {
    const [input ,setInput] = useState("")

    function addToInput(val){
        setInput(input+val);
        
    }
    function handleEqual(){
        setInput(parseFloat(Math.evaluate(input)).toFixed(2));
    }
    return (
        <div className="app">
            <div className="calcWrapper">
                <Input input={input} id="inputstyle" />
              <div className="row">
                <ClearButton handleClear={() => setInput("")}>AC</ClearButton>
                <Button handleClick={addToInput}>%</Button>
                <Button handleClick={addToInput}>/</Button>
             </div>
             <div className="row">
                <Button handleClick={addToInput}>7</Button>
                <Button handleClick={addToInput}>8</Button>
                <Button handleClick={addToInput}>9</Button>
                <Button handleClick={addToInput}>*</Button>
             </div>
             <div className="row">
                <Button handleClick={addToInput}>4</Button>
                <Button handleClick={addToInput}>5</Button>
                <Button handleClick={addToInput}>6</Button>
                <Button handleClick={addToInput}>-</Button>
             </div>
             <div className="row">
                <Button handleClick={addToInput}>1</Button>
                <Button handleClick={addToInput}>2</Button>
                <Button handleClick={addToInput}>3</Button>
                <Button handleClick={addToInput}>+</Button>
             </div>
             <div className="row">
                <Button handleClick={addToInput}>0</Button>
                <Button handleClick={addToInput}>.</Button>
                <Button id="equalButton" handleClick={handleEqual}>=</Button>
                
             </div>
           </div>
        </div>
    )
}

export default App
