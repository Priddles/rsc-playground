"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import Box, { BoxProps } from "./Box";

export default function ClientBox({
  children,
  title,
}: PropsWithChildren<BoxProps>) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true);
  }, []);

  if (!shouldRender) {
    return null;
  }

  return <Box title={title ?? "Force-Client Box"}>{children}</Box>;
}
