export async function delayedMessage(message: string, delay?: number, ) {
  if (delay) {
    await new Promise((resolve) => {
      setTimeout(resolve, delay);
    });
  }

  return message;
}
