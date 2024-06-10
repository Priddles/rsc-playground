import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import { delayedMessage } from "@/lib/actions";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";

export default function Page() {
  const greeting = delayedMessage("Expensive hello", 1250);
  const farewell = delayedMessage("Cheap goodbye", 250);

  return (
    <Box plain>
      <Title>Passing promises to client components</Title>
      <Suspense fallback={<Box title="Loading..." />}>
        <Foo greeting={greeting} />
      </Suspense>
      <Suspense fallback={<Box title="Loading..." />}>
        <Bar farewell={farewell} />
      </Suspense>
    </Box>
  );
}
