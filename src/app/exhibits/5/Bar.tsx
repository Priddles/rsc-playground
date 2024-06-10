import Box from "@/components/Box/Box";

interface BarProps {
  greeting: Promise<string>;
  farewell: Promise<string>;
}

export default async function Bar({ greeting, farewell }: BarProps) {
  const hi = await greeting;
  const bye = await farewell;

  return (
    <>
      <Box title={hi} />
      <Box title={bye} />
    </>
  );
}
