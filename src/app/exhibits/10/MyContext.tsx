"use client";

import { PropsWithChildren, createContext, useContext } from "react";

export const MyContext = createContext<number | undefined>(undefined);

export function useMyContext() {
  const value = useContext(MyContext);

  if (value === undefined) {
    throw new Error("must be rendered within MyProvider");
  }

  return value;
}

interface MyProviderProps {
  value: number;
}

export default function MyProvider({
  children,
  value,
}: PropsWithChildren<MyProviderProps>) {
  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
