import AsyncBox from "@/components/Box/AsyncBox";
import Box from "@/components/Box/Box";
import UseClient from "./UseClient";

export default function Page() {
  return (
    <>
      <UseClient>
        <Box title="Server-Renderable Prop Child" />
        <AsyncBox title="Async Prop Child" />
      </UseClient>
    </>
  );
}
