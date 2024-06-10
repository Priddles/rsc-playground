import Box from "@/components/Box/Box";

interface BarProps {
  farewell: Promise<string>;
}

export default async function Bar({ farewell }: BarProps) {
  const bye = await farewell;

  return <Box title={bye} />;
}
