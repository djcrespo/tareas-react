import { useState } from "react"

const Tarea1 = () => {

    const [number, setNumber] = useState("")
    
    const calcular = (event) => {
        event.preventDefault();
        const res = number * 1.60934
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
                    <button type="button" className="btn btn-success" onClick={(e) => calcular(e)}>Calcular</button>
                </div>
            </div>
        </>
    )
}

export default Tarea1   