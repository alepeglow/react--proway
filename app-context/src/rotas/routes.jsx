import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import Componente1 from "../componentes/componente1"
import Componente2 from "../componentes/componente2"
import LoginContext from "../contexts/LoginContext"
import Menu from "../componentes/menu"



export default function Rotas(){
    const [nome, setNome] = useState('')

    useEffect(()=>{
        const userLogado = localStorage.getItem('login')
        setNome(userLogado)
    },[])
    return(
        <LoginContext.Provider value={nome}>
        <Routes>
            <Route path="/comp1" element={<Componente1/>}/>
            <Route path="/comp2" element={<Componente2/>}/>
        </Routes>
    </LoginContext.Provider>
    )
}