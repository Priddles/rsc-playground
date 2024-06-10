"use server";

import { delayedMessage } from "@/lib/actions";
import { randomInt } from "crypto";
import { revalidateTag, unstable_cache } from "next/cache";
import { cache } from "react";

const messages = [
  "hello",
  "bye",
  "React",
  "NextJS",
  "Kablamo",
];

export const doubleCachedExpensiveRandomMessage = cache(unstable_cache(async () => {
  console.log(`Computing random message`);

  const msg = messages[randomInt(messages.length - 1)];
  const factor = randomInt(3);

  return delayedMessage(msg, (1 + factor) * 250);
}, ["exhibit-9"], {tags: ["exhibit-9"]}));

export async function revalidateMessages() {
  revalidateTag("exhibit-9");
}
