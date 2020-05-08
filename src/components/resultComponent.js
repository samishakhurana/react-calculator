import React from "react"
import "./index.css"

class Result extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="result-conatiner">
                <p>{this.props.value}</p>
            </div>
        )
    }
}

export default Result;