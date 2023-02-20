const http = require("http");
const port = 1245;
const host = "localhost"

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    if (req.url === "/") {
        res.write("Hello Holberton School!")
    }
    if (req.url === "/students") {
        res.write("This is the list of our students\n")
    }
})

app.listen(port, host, () => {
    console.log(`server running at http://${host}:${port}`)
})