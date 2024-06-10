import Box from "@/components/Box/Box";
import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";

export async function expensiveMessage(msg: string) {
  console.log(`Computing: ${msg}`);
  const factor = randomInt(3);
  return delayedMessage(msg, (1 + factor) * 250);
}

export default function Page() {
  return (
    <Box title="">
      <Suspense fallback={<span>Loading foo...</span>}>
        <Foo />
      </Suspense>
      <Suspense fallback={<span>Loading bar...</span>}>
        <Bar />
      </Suspense>
    </Box>
  );
}
