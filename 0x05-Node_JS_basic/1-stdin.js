console.log("Welcome to Holberton School, what is your name?\n");
process.stdin.setEncoding('utf8');
process.stdin.on("readable", () => {
    let INPUT = process.stdin.read();
    if (INPUT) {
        console.log(`Your name is: ${INPUT}`);
    };
});

process.stdin.on("end", () => {
    process.stdout.write("This important software is now closing\n");
});
