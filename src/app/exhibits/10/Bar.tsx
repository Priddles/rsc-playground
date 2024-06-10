"use client";

import ClientBox from "@/components/Box/ClientBox";
import { useMyContext } from "./MyContext";

export default function Bar() {
  const value = useMyContext();

  return <ClientBox title={`"Old" way: ${value}`} />;
}
