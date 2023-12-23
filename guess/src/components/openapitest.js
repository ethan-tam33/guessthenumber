import OpenAI from "openai";

const openai = new OpenAI({apiKey: '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'});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();