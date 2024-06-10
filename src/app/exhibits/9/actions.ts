"use server";

import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { revalidateTag, unstable_cache } from "next/cache";
import { cache } from "react";

export const doubleCachedExpensiveMessage = cache(unstable_cache(async (msg: string) => {
  console.log(`Computing: ${msg}`);
  const factor = randomInt(3);
  return delayedMessage(msg, (1 + factor) * 250);
}, ["message"], {tags: ["message"]}));

export async function revalidateMessages() {
  revalidateTag("message");
}
