import { useState } from "react";
import "./App.css";

import Lista from "./lista";
import Contador from "./contador";
import Saudacao from "./saudacao";
import Pessoa from "./pessoa";
import IMC from "./imc";
import Carro from "./carro";

function App() {
  const [carroForm, setCarroForm] = useState({
    placa: "",
    modelo: "",
    foto: "",
  });

  const [carros, setCarros] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;
    setCarroForm((prev) => ({ ...prev, [name]: value }));
  }

  function cadastrarCarro(e) {
    e.preventDefault();

    if (!carroForm.placa.trim() || !carroForm.modelo.trim()) {
      alert("Preencha placa e modelo!");
      return;
    }

    setCarros((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        placa: carroForm.placa.trim(),
        modelo: carroForm.modelo.trim(),
        foto: carroForm.foto.trim(),
      },
    ]);

    setCarroForm({ placa: "", modelo: "", foto: "" });
  }

  function removerCarro(id) {
    setCarros((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <div className="container py-3">
      <button className="btn btn-primary mb-3">Gravar</button>

      <h1>Hello World</h1>

      {/* teus componentes antigos */}
      <div className="mb-4">
        <Contador />
        <Saudacao />
        <Pessoa />
        <IMC />
        <Lista />
      </div>

      <hr />

      {/* cadastro de carros */}
      <h1>Cadastro de Carros</h1>

      <form onSubmit={cadastrarCarro} className="card p-3 mb-3">
        <div className="mb-2">
          <label className="form-label">Placa</label>
          <input
            name="placa"
            className="form-control"
            value={carroForm.placa}
            onChange={handleChange}
            placeholder="ABC-1234"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Modelo</label>
          <input
            name="modelo"
            className="form-control"
            value={carroForm.modelo}
            onChange={handleChange}
            placeholder="Fiat Uno"
          />
        </div>

        <div className="mb-2">
          <label className="form-label">Foto (URL ou base64) - opcional</label>
          <input
            name="foto"
            className="form-control"
            value={carroForm.foto}
            onChange={handleChange}
            placeholder="https://... ou data:image/..."
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Cadastrar
        </button>
      </form>

      <h2>Carros cadastrados ({carros.length})</h2>

      {carros.length === 0 ? (
        <p>Nenhum carro cadastrado ainda.</p>
      ) : (
        carros.map((c) => (
          <div key={c.id} className="d-flex gap-2 align-items-start mb-2">
            <div style={{ flex: 1 }}>
              <Carro placa={c.placa} modelo={c.modelo} foto={c.foto} />
            </div>

            <button className="btn btn-danger" onClick={() => removerCarro(c.id)}>
              Remover
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
