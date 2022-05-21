import { React, Component } from "react";

class List extends Component {
    render() {
        return (
            <div className="col-4 align-self-center">
                <table className="table">
                    <thead>
                        {this.props.list.map (x => 
                            <tr>
                                <td>{x}</td>
                            </tr>    
                        )}
                    </thead>
                </table>
            </div>
        )
    }
}

export default List