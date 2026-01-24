import { useState } from "react";

export default function Saudacao() {
  const [nome, setNome] = useState("Maria");
  const [msg, setMsg] = useState("");

  function handleNome(e) {
    setNome(e.target.value);
  }

  return (
    <>
      <h2>Boas Vindas</h2>

      <form>
        <label>Informe seu nome</label>
        <input
          id="nome"
          type="text"
          className="form-control"
          value={nome}
          onChange={handleNome}
        />
        </form>

      <p>Olá, {nome}</p>
      <p>{msg !== "" ? `${nome}` : ""}</p>
    </>
  );
}
