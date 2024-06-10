"use client";

import ClientBox from "@/components/Box/ClientBox";
import { use } from "react";
import { MyContext } from "./MyContext";

export default function Foo() {
  const value = use(MyContext);

  return <ClientBox title={`"New" way: ${JSON.stringify(value)}`} />;
}
