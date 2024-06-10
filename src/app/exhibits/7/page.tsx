import Box from "@/components/Box/Box";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";

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
