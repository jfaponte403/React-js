import './App.css';
import logo from './img/logo.png';
import Button from "./components/Button";
import Screen from "./components/Screen";
import ButtonClear from "./components/ButtonClear";
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };
  
  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Digit a value to calculate.")
    }
  };

  return (
    <div className='App'>
      <div className='container-logo'>
        <img
        src={logo}
        className='logo'
        alt='logo from app' />
      </div>
      <div className='container-calculator'>
        <Screen
        input={input}
        />
        <div className='fila'>
          <Button manageClick={addInput}> 1 </Button>
          <Button manageClick={addInput}> 2 </Button>
          <Button manageClick={addInput}> 3 </Button>
          <Button manageClick={addInput}> + </Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}> 4 </Button>
          <Button manageClick={addInput}> 5 </Button>
          <Button manageClick={addInput}> 6 </Button>
          <Button manageClick={addInput}> - </Button>
        </div>
        <div className='fila'>
          <Button manageClick={addInput}> 7 </Button>
          <Button manageClick={addInput}> 8 </Button>
          <Button manageClick={addInput}> 9 </Button>
          <Button manageClick={addInput}> * </Button>
        </div>
        <div className='fila'>
          <Button manageClick={calculateResult}> = </Button>
          <Button manageClick={addInput}> 0 </Button>
          <Button manageClick={addInput}> , </Button>
          <Button manageClick={addInput}> / </Button>
        </div>
        <div className='fila'>
          <ButtonClear
            manageClick={() => setInput('')}> CLEAR </ButtonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
