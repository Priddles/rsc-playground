import ClientBox from "@/components/Box/ClientBox";
import { expensiveMessage } from "./page";

export default async function Foo() {
  const title = await expensiveMessage("hello");

  return <ClientBox title={title} />;
}
