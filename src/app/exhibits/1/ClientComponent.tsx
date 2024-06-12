"use client";

import { useRef, useState } from "react";

interface Props {
  useHooks?: boolean;
}

export default function ClientComponent({ useHooks }: Props) {
  const twRef = useRef(typeof window);
  const [twState] = useState(typeof window);

  return (
    <div
      style={{
        border: "1px solid red",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "1rem",
        width: "fit-content",
      }}
    >
      <h2 style={{ color: "red" }}>Client Component</h2>
      <span>
        <strong>typeof window:</strong> <q>{typeof window}</q>
      </span>
      <span>
        <strong>process.env.NEXT_RUNTIME:</strong>{" "}
        <q>{process.env.NEXT_RUNTIME}</q>
      </span>
      {useHooks && (
        <>
          <br />
          <span>
            <strong>typeof window (ref):</strong> <q>{twRef.current}</q>
          </span>
          <span>
            <strong>typeof window (state):</strong> <q>{twState}</q>
          </span>
        </>
      )}
    </div>
  );
}
