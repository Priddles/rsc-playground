import ClientBox from "@/components/Box/ClientBox";
import { doubleCachedExpensiveRandomMessage } from "./actions";

export default async function Foo() {
  const title = await doubleCachedExpensiveRandomMessage();

  return <ClientBox title={title} />;
}
