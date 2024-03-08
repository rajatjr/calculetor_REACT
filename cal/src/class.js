import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    };
  }

inputDigit = (digit) => {
  const { displayValue, waitingForNewValue } = this.state;

  if (waitingForNewValue) {
       this.setState({
        displayValue: String(digit),
        waitingForNewValue: false
      });

} else {
  this.setState({
      displayValue: displayValue === '0' ? String(digit) : displayValue + digit
    });
  }
}

  inputDecimal = () => {
    const { displayValue, waitingForNewValue } = this.state;

    if (waitingForNewValue) {
      this.setState({
        displayValue: '.',
        waitingForNewValue: false
      });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForNewValue: false
      });
    }
  }

  clearDisplay = () => {
    this.setState({
      displayValue: '0',
      previousValue: null,
      operation: null,
      waitingForNewValue: false
    });
  }

  performOperation = (nextOperation) => {
    const { displayValue, operation, previousValue } = this.state;
    const inputValue = parseFloat(displayValue);

    if (previousValue === null) {
      this.setState({
        previousValue: inputValue,
        operation: nextOperation,
        waitingForNewValue: true
      });
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = this.calculate(currentValue, inputValue, operation);

      this.setState({
        displayValue: String(newValue),
        previousValue: newValue,
        operation: nextOperation,
        waitingForNewValue: true
      });
    }
  }

  calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      default:
        return secondValue;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
  }

render() {
  const { displayValue } = this.state;

return (
  <div>
     <input type="text" className="calculator-screen" value={displayValue}  />

      <div className="calculator-keys">

      <button className="operator btn-clear" onClick={() => this.clearDisplay()}>AC</button> &nbsp;
      <button className="operator" onClick={() => this.performOperation('*')}> * </button> &nbsp;
      <button className="operator" onClick={() => this.performOperation('/')}> / </button> &nbsp;
      <button className="operator" onClick={() => this.performOperation('+')}> + </button> &nbsp;
      <br/><br/>

      <button className="operator" onClick={() => this.performOperation('-')}> - </button> &nbsp;
      <button className="operator" onClick={() => this.performOperation('=')}> = </button> &nbsp;
          

      <button onClick={() => this.inputDigit(7)}>7</button> &nbsp;
      <button onClick={() => this.inputDigit(8)}>8</button> &nbsp;
      <br/><br/>                                                                                              

      <button onClick={() => this.inputDigit(9)}>9</button> &nbsp;
      <button onClick={() => this.inputDigit(4)}>4</button> &nbsp;
      <button onClick={() => this.inputDigit(5)}>5</button> &nbsp;
      <button onClick={() => this.inputDigit(6)}>6</button> &nbsp;
      <br/><br/>
         

      <button onClick={() => this.inputDigit(1)}>1</button> &nbsp;
      <button onClick={() => this.inputDigit(2)}>2</button> &nbsp;
      <button onClick={() => this.inputDigit(3)}>3</button> &nbsp;
      <button onClick={() => this.inputDigit(0)}>0</button> &nbsp;

        
</div>
</div>
    );
  }
}

export default Calculator;