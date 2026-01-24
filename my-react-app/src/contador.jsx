import { useState } from "react"

export default function Contador() {
    const[count, setCount] = useState(0)

    function aumentar(){
        setCount(count => count + 1)
    }
    
    function diminuir(){
        setCount(count => count - 1)
    }
    return(
        <>
            <h2>Contador</h2>
            <button className="btn btn-primary me-2" onClick={aumentar}>+</button>
            <button className="btn btn-primary mt-3" onClick={diminuir}>-</button>
            <h3 className="mt-3">Valor: 1 </h3>
        </>
    )
}