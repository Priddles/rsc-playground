import ClientBox from "@/components/Box/ClientBox";
import { use } from "react";

interface FooProps {
  greeting: Promise<string>;
}

export default function Foo({ greeting }: FooProps) {
  const title = use(greeting);

  return <ClientBox title={title} />;
}
