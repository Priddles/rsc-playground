export default function ServerComponent() {
  return (
    <div
      style={{
        border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        width: "fit-content",
      }}
    >
      <h2 style={{ color: "blue" }}>Server Component</h2>
      <span>
        <strong>typeof window:</strong> <q>{typeof window}</q>
      </span>
      <span>
        <strong>process.env.NEXT_RUNTIME:</strong>{" "}
        <q>{process.env.NEXT_RUNTIME}</q>
      </span>
    </div>
  );
}
