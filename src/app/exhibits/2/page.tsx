import AsyncBox from "@/components/Box/AsyncBox";
import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import UseClient from "./UseClient";

export default function Page() {
  return (
    <>
      <Title>
        Children and <q>use client</q> &ndash; same file vs as props
      </Title>
      <UseClient>
        <Box title="Server-Renderable Prop Child" />
        <AsyncBox title="Async Prop Child" />
      </UseClient>
    </>
  );
}
