"use server";

import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { cache } from "react";

export const cachedExpensiveMessage = cache(async (msg: string) => {
  console.log(`Computing: ${msg}`);
  const factor = randomInt(3);
  return delayedMessage(msg, (1 + factor) * 250);
});
