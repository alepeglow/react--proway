import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./componentes/home";
import About from "./componentes/about";
import Contact from "./componentes/contato";
import Info from "./componentes/info";
import Products from "./componentes/produtos";
import CarProducts from "./componentes/cardProducts";
import BikeProducts from "./componentes/cardBike";
import ListaContatos from "./componentes/listaContatos";
import DetalheContato from "./componentes/detalheContato";
export default function App() {
  return (
    <BrowserRouter>
      <nav >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Consulta Contatos</Link>
        <Link to="/info/John">John</Link>  
        <Link to="/info/Maria">Maria</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listaContatos" element={<ListaContatos />} />
        <Route path="/detalhes/:id" element={<DetalheContato />} />

        <Route path="/info/:firstname" element={<Info />} />
        <Route path="/products" element={<Products />} >
        <Route path="/products/car" element={<CarProducts />} />
        <Route path="/products/bike" element={<BikeProducts />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}