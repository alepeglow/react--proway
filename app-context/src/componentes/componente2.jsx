import { useContext } from "react"
import LoginContext from "../contexts/LoginContext"
import { Link } from "react-router-dom"

export default function Componente2() {
    const nome = useContext(LoginContext)
    return (
        <>
            <h1>Ola2: {nome}</h1>
            <hr />
            <Link to = "/">Home</Link>
       </> 
    )
}