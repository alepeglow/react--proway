export default function Carro({ placa, modelo, foto }) {
  return (
    <div className="card p-2 mb-2">
      <p className="m-0">
        <strong>Placa:</strong> {placa} — <strong>Modelo:</strong> {modelo}
      </p>

      {foto ? (
        <img
          src={foto}
          width="120"
          height="80"
          style={{ objectFit: "cover" }}
          alt={`Carro ${modelo}`}
        />
      ) : (
        <p className="text-muted m-0">Sem foto</p>
      )}
    </div>
  );
}
