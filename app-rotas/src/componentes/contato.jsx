import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const contato = { nome, email, fone };

    fetch("http://localhost:3000/contacts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contato),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao salvar contato");
        navigate("/listaContatos");
      })
      .catch((err) => {
        console.log(err);
        alert("Não foi possível salvar. Verifique se o json-server está rodando.");
      });

    // limpa campos (pode deixar aqui ou colocar depois do navigate)
    setNome("");
    setEmail("");
    setFone("");
  }

  return (
    <>
      <h2 className="textcenter">Novo Contato</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ana"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-control mt-3"
          required
        />

        <input
          type="email"
          placeholder="ana@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mt-3"
          required
        />

        <input
          type="tel"
          placeholder="(11) 9999-9999"
          value={fone}
          onChange={(e) => setFone(e.target.value)}
          className="form-control mt-3"
          required
        />

        <button className="btn btn-primary">Gravar</button>
      </form>
    </>
  );
}