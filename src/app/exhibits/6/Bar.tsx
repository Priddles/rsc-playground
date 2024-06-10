import Box from "@/components/Box/Box";
import { expensiveMessage } from "./page";

export default async function Bar() {
  const hi = await expensiveMessage("hello");
  const bye = await Promise.resolve("goodbye");

  return (
    <Box title="">
      <Box title={hi} />
      <Box title={bye} />
    </Box>
  );
}
