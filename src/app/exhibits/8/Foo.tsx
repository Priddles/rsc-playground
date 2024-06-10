import ClientBox from "@/components/Box/ClientBox";
import { cachedExpensiveMessage } from "./actions";

interface FooProps {
  greeting: Promise<string>;
}

export default async function Foo() {
  const title = await cachedExpensiveMessage("hello");

  return <ClientBox title={title} />;
}
