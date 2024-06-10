import Box from "@/components/Box/Box";
import Title from "@/components/Title/Title";
import Bar from "./Bar";
import Foo from "./Foo";
import MyProvider from "./MyContext";

export default function Page() {
  return (
    <Box plain>
      <Title>Use a context</Title>
      <MyProvider value={123}>
        <Foo />
        <Bar />
      </MyProvider>
    </Box>
  );
}
