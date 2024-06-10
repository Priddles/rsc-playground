"use client";

import Box from "@/components/Box/Box";
import ClientBox from "@/components/Box/ClientBox";
import { PropsWithChildren } from "react";

export default function UseClient({ children }: PropsWithChildren) {
  return (
    <ClientBox>
      <Box title="Server-Renderable but 'Named' Child" />
      {children}
    </ClientBox>
  );
}
