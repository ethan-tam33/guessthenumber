import OpenAI from "openai";

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Is 1+1=2? Answer only with just yes or no." }],
    model: "gpt-3.5-turbo",
  });
  const output = completion.choices[0]
  console.log(output);
  console.log(output.message.content)
}

main();