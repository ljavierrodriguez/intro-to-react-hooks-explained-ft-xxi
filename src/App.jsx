import React, { useEffect, useState } from 'react';


const Button = ({ className, onClick, children }) => {
    return (
        <button className={className}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

const App = () => {

    const [counter, setCounter] = useState(4) // [0, function(){}]
    const [show, setShow] = useState(true);
    const [names, setNames] = useState(["Genesis", "Fernanda", "Eduardo", "Jermain"])
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    
    const agregarNombre = name => {
        console.log(name);
        // names.push(name); // mal/bad

        /* let newNames = names.concat(name);
        setNames(newNames); */

        //setNames([...names, name]);

        /* setNames((prevNames) => {
            return prevNames.concat(name);
        }) */

        setNames((prevNames) => {
            return [...prevNames, name];
        })
    }

    useEffect(() => {
        console.log("Componente Cargado")
    }, [])

    useEffect(() => {
        setCounter(names.length);
    }, [names])

    return (
        <>
            <h1>Counter: {counter}</h1>

            <Button className="btn btn-primary"
                onClick={() => setCounter(counter + 1)}
            >
                Incrementar
            </Button>
            <Button className="btn btn-danger"
                onClick={() => setCounter(counter - 1)}
            >
                Decrementar
            </Button>

            <div className="d-flex flex-column w-50 mx-auto d-grid">
                <button className='btn btn-success mb-2' onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
                <p className={show ? "d-block" : "d-none"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, provident repellat nobis debitis tenetur hic, eum amet ipsa aliquid quas nisi. Distinctio enim omnis molestiae. Molestias accusantium eum quam facere.</p>
            </div>

            <button onClick={() => agregarNombre("Alexis")}>Agregar Nombre</button>
            <ul className="list-group">
                {
                    names.map((name, i) => <li key={i} className="list-group-item">{name}</li>)
                }
            </ul>

            <p>Name: {name}</p>
            <input type="text" onChange={(e) => setName(e.target.value)} />

            <p>Direccion: {address}</p>
            <textarea cols="30" rows="10" onChange={(e) => setAddress(e.target.value)}></textarea>
        </>
    )
}

export default App;