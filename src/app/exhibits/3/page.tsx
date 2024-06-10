import Box from "@/components/Box/Box";
import ClientBox from "@/components/Box/ClientBox";
import { delayedMessage } from "@/lib/actions";
import { Suspense } from "react";

async function Exhibit() {
  const msg = await delayedMessage("hello", 500);

  return <ClientBox title={msg} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<Box title="Loading..." />}>
      <Exhibit />
    </Suspense>
  );
}
