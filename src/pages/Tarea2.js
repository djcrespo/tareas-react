import { useState } from "react";
import List from "../components/List";


const Tarea2 = () => {

    const [list, setList] = useState([]);
    const [name, setName] = useState("");

    const añadir = async (event) => {
        event.preventDefault();
        setList(list => [name, ...list])
        setName('')
        console.log(list)
    }

    return (
        <>
            <div className="text-center">
                <h1>Invitados</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <span className="input-group-text">Nombre del invitado</span>
                    <input className="form-control" placeholder="" value={name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-success" onClick={añadir}>Agregar invitado</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <List list={list}></List>
            </div>
        </>
    )
}

export default Tarea2