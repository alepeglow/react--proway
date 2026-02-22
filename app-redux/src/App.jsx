import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementar,
  decrementar,
  adicionar,
  login,
  logout,
} from "./store/actions";

function App() {
  // Estado GLOBAL (Redux)
  const valor = useSelector((state) => state.valor);
  const usuarioLogado = useSelector((state) => state.usuarioLogado);

  // Estado LOCAL (React) para input
  const [nome, setNome] = useState("");

  // Função que dispara ACTIONS
  const dispatch = useDispatch();

  function handleLogin() {
    const nomeLimpo = nome.trim();

    if (!nomeLimpo) {
      alert("Digite um nome para logar.");
      return;
    }

    dispatch(login(nomeLimpo));
    setNome("");
  }

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Redux Clássico (sem Toolkit)</h1>

      {/* PARTE 1 - CONTADOR (código da aula) */}
      <div style={styles.card}>
        <h2 style={styles.subtitulo}>Contador (Aula)</h2>
        <h3 style={styles.textoNormal}>Valor atual: {valor}</h3>
        <div style={styles.botoesLinha}>
          <button style={styles.botao} onClick={() => dispatch(incrementar())}>
            +
          </button>

          <button style={styles.botao} onClick={() => dispatch(decrementar())}>
            -
          </button>

          <button
            style={styles.botaoSecundario}
            onClick={() => dispatch(adicionar(5))}
          >
            Adicionar 5
          </button>
        </div>
      </div>

      {/* PARTE 2 - LOGIN / LOGOUT (atividade) */}
      <div style={styles.card}>
        <h2 style={styles.subtitulo}>Login / Logout (Atividade)</h2>

        {!usuarioLogado ? (
          <>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              style={styles.input}
            />

            <button style={styles.botao} onClick={handleLogin}>
              Login
            </button>
          </>
        ) : (
          <>
            <p style={styles.textoNormal}>
              Usuário logado:{" "}
              <strong style={styles.textoDestaque}>{usuarioLogado}</strong>
            </p>

            <button style={styles.botaoSecundario} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f5f3ff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  titulo: {
    marginBottom: "8px",
    color: "#4c1d95",
  },
  subtitulo: {
    marginTop: 0,
    marginBottom: "12px",
    color: "#6d28d9",
  },
  card: {
    width: "100%",
    maxWidth: "480px",
    background: "#ffffff",
    borderRadius: "12px",
    padding: "18px",
    boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  botoesLinha: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d8b4fe",
    outline: "none",
  },
  botao: {
    background: "#7c3aed",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 14px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  botaoSecundario: {
    background: "#ede9fe",
    color: "#4c1d95",
    border: "1px solid #c4b5fd",
    borderRadius: "8px",
    padding: "10px 14px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  textoNormal: {
  color: '#2d1b4e',
  margin: 0,
},

textoDestaque: {
  color: '#4c1d95',
}
};

export default App;
