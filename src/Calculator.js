import React from 'react';
import './Calculator.css';
import Keypad from './components/keypadComponent'
import Result from './components/resultComponent'

class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ' '
    }
  }

  onClick (value) {
    if (value === '=') {
      this.evaluate()
    } else if (value === 'CE') {
      this.backspace()
    } else if (value === 'C') {
      this.clear()
    } else {
      var val = this.state.value
      val = val + value
      this.setState({value: val})
    }
  }

  evaluate () {
    try {
      this.setState({value: eval(this.state.value)})
    } catch (e) {
      this.setState({value: ''})
    }
  }

  backspace () {
    this.setState({value: this.state.value.slice(0, -1)})
  }

  clear () {
    this.setState({value: ''})
  }

  render () {
    return ( 
      <div className="calculator-container">
        <Result value={this.state.value}/>
        <Keypad onClick={this.onClick.bind(this)}/>
      </div>
    )
  }
}

export default Calculator;
