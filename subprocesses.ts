const sp = Deno.run({
    cmd: ["echo", "hello"],
});

await console.log(sp.status());