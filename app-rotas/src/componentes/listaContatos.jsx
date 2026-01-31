import { useEffect, useState } from "react";
import CardContato from "./cardContato";

export default function ListaContatos() {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((r) => r.json())
      .then((data) => setContatos(data))
      .catch((err) => console.log("Erro ao buscar contatos:", err));
  }, []);

  return (
    <div>
      <h1>Contatos</h1>

      {contatos.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        <div className="d-flex flex-wrap">
          {contatos.map((c) => (
            <CardContato key={c.id} contato={c} />
          ))}
        </div>
      )}
    </div>
  );
}