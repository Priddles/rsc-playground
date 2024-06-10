"use server";

import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { revalidateTag, unstable_cache } from "next/cache";

export const cachedExpensiveMessage = unstable_cache(async (msg: string) => {
  console.log(`Computing: ${msg}`);
  const factor = randomInt(3);
  return delayedMessage(msg, (1 + factor) * 250);
}, ["exhibit-8"], {tags: ["exhibit-8"]});

export async function revalidateMessages() {
  revalidateTag("exhibit-8");
}
