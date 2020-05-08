import React from "react"
import "./index.css"

class Keypad extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                    <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                    <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                    <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button>
                </div>
                <div className="row">
                    <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                    <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                    <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                    <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
                </div>
                <div className="row">
                    <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                    <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                    <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                    <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
                </div>
                <div className="row">
                    <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                    <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                    <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                    <button name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
                </div>
                <div className="row">
                    <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                    <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                    <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                    <button name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
                </div>
            </div>
        )
    }
}

export default Keypad;