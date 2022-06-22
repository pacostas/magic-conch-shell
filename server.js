const { createServer } = require("http");
const PORT = process.env.PORT || 3000;

const server = createServer((req, res) => {
  if (req.url.match(/\/hello\/node/) && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: "hello",
      })
    );
  } else if (req.url.match(/\/health/) && req.method === "GET") {
    res.writeHead(200);
    res.end();
  } else if (req.url.match(/\/live/) && req.method === "GET") {
    res.writeHead(200);
    res.end();
  }
});
server.listen(PORT, () => console.log(`Server running on port:  ${PORT}`));
