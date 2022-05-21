import Tabla from "../components/TablaMultiplicar"

const Tarea3 = () => {

    const number = 12;

    return (
        <>
            <div className="text-center">
                <h1>Tablas de multiplicar</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-2 align-self-center">
                    <Tabla numero={number} ></Tabla>
                </div>
            </div>
        </>
    )
}

export default Tarea3