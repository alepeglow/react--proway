import { Link } from "react-router-dom";

export default function CardContato({ contato }) {
  if (!contato) return null;

  const { id, nome, email, fone } = contato;

  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>

        <p className="card-text mb-1">
          <strong>Email:</strong> {email}
        </p>

        <p className="card-text">
          <strong>Fone:</strong> {fone}
        </p>

        <Link to={`/detalhes/${id}`} className="btn btn-primary">
          Detalhes
        </Link>
      </div>
    </div>
  );
}