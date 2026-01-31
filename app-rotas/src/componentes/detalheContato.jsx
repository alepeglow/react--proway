import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function DetalheContato() {
  const { id } = useParams();
  const [contato, setContato] = useState(null);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setErro("");

    fetch(`http://localhost:3000/contacts/${id}`)
      .then((r) => {
        if (!r.ok) throw new Error("Contato não encontrado");
        return r.json();
      })
      .then((data) => setContato(data))
      .catch((e) => setErro(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Carregando...</p>;
  if (erro) return <p>Erro: {erro}</p>;
  if (!contato) return <p>Contato vazio.</p>;

  return (
    <div className="card p-3" style={{ maxWidth: 520 }}>
      <h2>Detalhes do Contato</h2>

      <p>
        <strong>Nome:</strong> {contato.nome}
      </p>
      <p>
        <strong>Email:</strong> {contato.email}
      </p>
      <p>
        <strong>Telefone:</strong> {contato.fone}
      </p>

      <Link to="/listaContatos" className="btn btn-secondary">
        Voltar
      </Link>
    </div>
  );
}