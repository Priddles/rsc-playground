import Box from "@/components/Box/Box";
import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";

async function expensiveMessage(msg: string) {
  console.log(`Computing: ${msg}`);
  const factor = randomInt(2);
  return delayedMessage(msg, 500 + (1 + factor) * 250);
}

export default function Page() {
  const greeting = expensiveMessage("Expensive Hello");
  const farewell = Promise.resolve("Cheap Goodbye");

  return (
    <Box title="">
      <Suspense fallback={<Box title="Loading..." />}>
        <Foo greeting={greeting} />
        <Bar greeting={greeting} farewell={farewell} />
      </Suspense>
    </Box>
  );
}
