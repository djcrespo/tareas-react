import { React, Component } from "react";

class InsertText extends Component {
    render() {
        if(this.props.result === 0) {
            return (
                <div>
                    <p>Hola 1</p>
                </div>
            );
        } else {
            return (
                <div>
                    <p>{this.props.result}</p>
                </div>
            );
        }
    }
}

export default InsertText