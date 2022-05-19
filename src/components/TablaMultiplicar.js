import { React, Component } from "react";

class TablaMultiplicar extends Component {
    render() {

        let number = [];

        for(let i=0; i<10; i++) {
            number.push(this.props.numero * (i+1))
        }

        return (
            <>
                <table className="table">
                    <thead>
                        {number.map((x, i) => 
                        <tr>
                            <td>{this.props.numero} x {i+1} =</td>
                            <td>{x}</td>
                        </tr>
                        )}
                    </thead>
                </table>
            </>
        )
    }
}

export default TablaMultiplicar