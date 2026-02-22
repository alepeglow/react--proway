import { useSelector, useDispatch } from 'react-redux'
import { incrementar,decrementar, adicionar } from './slices/contadorSlice'
import './App.css'

function App() {
  
  const valor = useSelector((state) => state.contador.valor);
  const dispatch = useDispatch();

  return (
    <>
     <p>{valor}</p>
     <button onClick={() => dispatch(incrementar())}>+</button>
     <button onClick={() => dispatch(decrementar())}>-</button>
     <button onClick={() => dispatch(adicionar(10))}>+10</button>
    </>
  )
}

export default App
