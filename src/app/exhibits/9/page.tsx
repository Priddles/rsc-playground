import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Bar from "./Bar";
import Foo from "./Foo";
import { revalidateMessages } from "./actions";

interface PageProps {
  searchParams: {
    revalidate?: string;
  };
}

export default function Page({ searchParams }: PageProps) {
  if (searchParams.revalidate) {
    revalidateMessages();
    redirect(`/exhibits/9`);
  }

  return (
    <Box plain>
      <Title>Cache within & across requests</Title>
      <Suspense fallback={<div>Loading foo...</div>}>
        <Foo />
      </Suspense>
      <Suspense fallback={<div>Loading bar...</div>}>
        <Bar />
      </Suspense>
      <Link href={{ query: { revalidate: "1" } }} prefetch={false}>
        Revalidate
      </Link>
    </Box>
  );
}
