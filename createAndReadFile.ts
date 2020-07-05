const encoder = new TextEncoder();
const text = encoder.encode("Write to File Test");
await Deno.writeFile("text.txt", text);

let file = await Deno.open("./text.txt");
await Deno.copy(file, Deno.stdout);
file.close;

await Deno.remove("text.txt")