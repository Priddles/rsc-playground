import ClientBox from "@/components/Box/ClientBox";
import { cachedExpensiveMessage } from "./actions";

export default async function Foo() {
  const title = await cachedExpensiveMessage("hello");

  return <ClientBox title={title} />;
}
