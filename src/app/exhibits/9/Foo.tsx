import ClientBox from "@/components/Box/ClientBox";
import { doubleCachedExpensiveMessage } from "./actions";

interface FooProps {
  greeting: Promise<string>;
}

export default async function Foo() {
  const title = await doubleCachedExpensiveMessage("hello");

  return <ClientBox title={title} />;
}
