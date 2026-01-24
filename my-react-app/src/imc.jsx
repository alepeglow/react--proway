import { useState } from "react";

export default function IMC() {
  const [nome, setNome] = useState("");
  const [sexo, setSexo] = useState("F"); // "F" ou "M"
  const [altura, setAltura] = useState(""); // em metros (ex: 1.70)
  const [peso, setPeso] = useState(""); // em kg (ex: 65)

  const h = Number(altura);
  const p = Number(peso);

  const dadosValidos = h > 0 && p > 0 && !Number.isNaN(h) && !Number.isNaN(p);
  const imc = dadosValidos ? p / (h * h) : null;

  function classificacao(valor) {
    if (valor < 18.5) return "Abaixo do peso";
    if (valor < 25) return "Peso normal";
    if (valor < 30) return "Sobrepeso";
    if (valor < 35) return "Obesidade I";
    if (valor < 40) return "Obesidade II";
    return "Obesidade III";
  }

  return (
    <div className="card p-3 mb-3">
      <h2>Calculadora de IMC</h2>

      <div className="mb-2">
        <label className="form-label">Nome</label>
        <input className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
      </div>

      <div className="mb-2">
        <label className="form-label">Sexo</label>
        <select className="form-select" value={sexo} onChange={(e) => setSexo(e.target.value)}>
          <option value="F">Feminino</option>
          <option value="M">Masculino</option>
        </select>
      </div>

      <div className="mb-2">
        <label className="form-label">Altura (m)</label>
        <input
          className="form-control"
          type="number"
          step="0.01"
          placeholder="Ex: 1.70"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="form-label">Peso (kg)</label>
        <input
          className="form-control"
          type="number"
          step="0.1"
          placeholder="Ex: 65"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>

      <hr />

      {!dadosValidos ? (
        <p>Preencha altura e peso para calcular.</p>
      ) : (
        <>
          <p>
            <strong>{nome || "Pessoa"}</strong> ({sexo}) — IMC: <strong>{imc.toFixed(2)}</strong>
          </p>
          <p>
            <strong>Classificação:</strong> {classificacao(imc)}
          </p>
        </>
      )}
    </div>
  );
}
