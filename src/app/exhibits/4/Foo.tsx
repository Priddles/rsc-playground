import Box from "@/components/Box/Box";

interface FooProps {
  greeting: string;
}

export default function Foo({ greeting }: FooProps) {
  return <Box title={greeting} />;
}
