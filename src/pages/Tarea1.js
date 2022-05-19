import { useState } from "react"
import InsertText from "../components/InsertText"

const Tarea1 = () => {

    const [number, setNumber] = useState("");
    const [res, setRes] = useState(0);
    
    const calcular = (event) => {
        event.preventDefault();
        setRes(number + " Milla(s) = " + (number * 1.60934) + " Km");
        setNumber('')
    }

    return (
        <>
            <div className="text-center">
                <h1>Conversor de unidades</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="input-group mb-3 w-25">
                    <span className="input-group-text">Millas</span>
                    <input className="form-control" placeholder="" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                </div>
                <div>
                    <button type="button" className="btn btn-success" onClick={calcular}>Calcular</button>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <InsertText result={res} ></InsertText>
            </div>
        </>
    )
}

export default Tarea1   