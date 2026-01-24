import { useState } from "react";

export default function Pessoa() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");

  const idadeNum = Number(idade);
  const isValida = idade !== "" && !Number.isNaN(idadeNum) && idadeNum >= 0;
  const status = isValida ? (idadeNum >= 18 ? "Maior de idade" : "Menor de idade") : "";

  return (
    <div className="card p-3 mb-3">
      <h2>Pessoa</h2>

      <div className="mb-2">
        <label className="form-label">Nome</label>
        <input className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className="mb-2">
        <label className="form-label">Sobrenome</label>
        <input
          className="form-control"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Idade</label>
        <input
          className="form-control"
          type="number"
          min="0"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>

      <p>
        <strong>Nome completo:</strong> {nome} {sobrenome}
      </p>
      <p>
        <strong>Status:</strong> {status || "Preencha a idade"}
      </p>
    </div>
  );
}
