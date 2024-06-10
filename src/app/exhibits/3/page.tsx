import Box from "@/components/Box/Box";
import ClientBox from "@/components/Box/ClientBox";
import Title from "@/components/Title/Title";
import { delayedMessage } from "@/lib/actions";
import { Suspense } from "react";

async function Exhibit() {
  const msg = await delayedMessage("hello", 500);

  return <ClientBox title={msg} />;
}

export default async function Page() {
  return (
    <>
      <Title>Async server components can render client components</Title>
      <Suspense fallback={<Box title="Loading..." />}>
        <Exhibit />
      </Suspense>
    </>
  );
}
