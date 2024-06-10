import Box from "@/components/Box/Box";

interface BarProps {
  farewell: string;
}

export default function Bar({ farewell }: BarProps) {
  return <Box title={farewell} />;
}
