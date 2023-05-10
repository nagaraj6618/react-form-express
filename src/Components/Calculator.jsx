import React from 'react'
import './calculator.css'
function Calculator() {
  function display(e){
    document.getElementById('result').innerHTML+=e
  }
  function equalFuntion(){
    const y=document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML=eval(y)
  }

  function clearFuntion(){
    document.getElementById('result').innerHTML=''
  }
  function deleteFunction(){
    var result=document.getElementById('result').innerHTML;
    var lengthOfResult=result.length;
    result=result.substring(0,lengthOfResult-1);
    document.getElementById('result').innerHTML=result;
  }
  return (
    <div className='App-container'>
       <div>
        <p  id='result'></p>
      </div>
      <div>
        <button onClick={()=>display('7')} id='numberButton'>7</button>
        <button onClick={()=>display('8')} id='numberButton'>8</button>
        <button onClick={()=>display('9')} id='numberButton'>9</button>
        <button onClick={()=>display('/')} id='operatorButton'>/</button>
      </div>
      <div>
        <button onClick={()=>display('4')} id='numberButton'>4</button>
        <button onClick={()=>display('5')} id='numberButton'>5</button>
        <button onClick={()=>display('6')} id='numberButton'>6</button>
        <button onClick={()=>display('*')} id='operatorButton'>*</button>
      </div>
      <div>
        <button onClick={()=>display('1')} id='numberButton'>1</button>
        <button onClick={()=>display('2')} id='numberButton'>2</button>
        <button onClick={()=>display('3')} id='numberButton'>3</button>
        <button onClick={()=>display('+')} id='operatorButton'>+</button>
      </div>
      <div>
        <button onClick={()=>display('0')} id='numberButton'>0</button>
        <button onClick={()=>display('.')} id='numberButton'>.</button>
        <button onClick={()=>equalFuntion()} id='EqualButton'>=</button>
        <button onClick={()=>display('-')} id='operatorButton'>-</button>
      </div>
        <button onClick={()=>deleteFunction()} id='deleteButton'>Del</button>
        <button onClick={()=>clearFuntion()} id='clearButton'>Clear</button>  
    </div>
  )
}

export default Calculator