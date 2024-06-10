"use server";

import { PropsWithChildren } from "react";
import Box, { BoxProps } from "./Box";

export default async function AsyncBox({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) {
  return <Box {...boxProps}>{children}</Box>;
}
