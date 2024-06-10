"use client";

import { PropsWithChildren, useTransition } from "react";

interface ButtonProps {
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
}: PropsWithChildren<ButtonProps>) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => onClick?.())}
      style={{ width: "fit-content" }}
    >
      {children}
    </button>
  );
}
