import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";

export default function Page() {
  return (
    <Box plain>
      <Title>
        Enter <code>React.cache</code>!
      </Title>
      <Suspense fallback={<div>Loading foo...</div>}>
        <Foo />
      </Suspense>
      <Suspense fallback={<div>Loading bar...</div>}>
        <Bar />
      </Suspense>
    </Box>
  );
}
