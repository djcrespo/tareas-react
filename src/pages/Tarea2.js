import TablaMultiplicar from "../components/TablaMultiplicar"

const Tarea2 = () => {

    const number = 12;

    return (
        <>
            <div className="text-center">
                <h1>Tablas de multiplicar</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-2 align-self-center">
                    <TablaMultiplicar numero={number} ></TablaMultiplicar>
                </div>
            </div>
        </>
    )
}

export default Tarea2