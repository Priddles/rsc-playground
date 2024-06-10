import Box from "@/components/Box/Box";
import { delayedMessage } from "@/lib/actions";
import { doubleCachedExpensiveMessage } from "./actions";

export default async function Bar() {
  const [hi, bye] = await Promise.all([
    doubleCachedExpensiveMessage("hello"),
    delayedMessage("bye", 1000),
  ]);

  return (
    <Box title="">
      <Box title={hi} />
      <Box title={bye} />
    </Box>
  );
}
