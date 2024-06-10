import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import { Suspense } from "react";
import Bar from "./Bar";
import Button from "./Button";
import Foo from "./Foo";
import { revalidateMessages } from "./actions";

interface PageProps {
  searchParams: {
    revalidate?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  return (
    <Box plain>
      <Title>Cache within & across requests</Title>
      <Suspense fallback={<div>Loading foo...</div>}>
        <Foo />
      </Suspense>
      <Suspense fallback={<div>Loading bar...</div>}>
        <Bar />
      </Suspense>
      <Button onClick={revalidateMessages}>Revalidate</Button>
    </Box>
  );
}
