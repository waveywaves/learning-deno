# Learning Deno

## Install Deno

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

## Learning by Example

Some of the examples have been picked up from the [Deno Crash Course](https://www.youtube.com/watch?v=NHHhiqwcfRM&t=1s).

### createAndReadFile
To run this example we need to pass the flags `--allow-write --allow-read` as Deno is secure by default.
```
deno run --allow-write --allow-read createAndReadFile.ts
```
This will create a file, write data to it, read from it and send it to stdout and then delete the file.

### subprocesses
Running this example needs the `--allow-run` flag which allows running subprocesses.
```
deno run --allow-run subprocesses.ts 
```
