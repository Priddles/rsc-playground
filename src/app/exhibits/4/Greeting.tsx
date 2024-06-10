"use client";

import ClientBox from "@/components/Box/ClientBox";
import { use } from "react";

interface GreetingProps {
  greeting: Promise<string>;
}

export default function Greeting({ greeting }: GreetingProps) {
  const title = use(greeting);

  return <ClientBox title={title} />;
}
