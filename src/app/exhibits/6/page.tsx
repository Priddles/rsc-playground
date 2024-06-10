import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
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
    <Box plain>
      <Title>What if you can&apos;t know what promises you need?</Title>
      <Suspense fallback={<div>Loading foo...</div>}>
        <Foo />
      </Suspense>
      <Suspense fallback={<div>Loading bar...</div>}>
        <Bar />
      </Suspense>
    </Box>
  );
}
