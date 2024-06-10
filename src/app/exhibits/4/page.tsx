import Box from "@/components/Box/Box";
import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { Suspense } from "react";
import Greeting from "./Greeting";

async function expensiveHello() {
  const factor = randomInt(2);
  return delayedMessage("Expensive Hello", 500 + (1 + factor) * 250);
}

export default function Page() {
  const greeting = expensiveHello();

  return (
    <Suspense fallback={<Box title="Loading..." />}>
      <Greeting greeting={greeting} />
    </Suspense>
  );
}
