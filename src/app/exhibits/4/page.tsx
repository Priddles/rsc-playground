import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import { delayedMessage } from "@/lib/actions";
import Bar from "./Bar";
import Foo from "./Foo";

export default async function Page() {
  const [greeting, farewell] = await Promise.all([
    delayedMessage("Expensive hello", 1250),
    delayedMessage("Cheap goodbye", 250),
  ]);

  /**
   * @fixme Refactor children to be async so that they can suspend individually.
   */
  return (
    <>
      <Title>Await promises in parent</Title>
      <Box title="">
        <Foo greeting={greeting} />
        <Bar farewell={farewell} />
      </Box>
    </>
  );
}
