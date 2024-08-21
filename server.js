const { createServer } = require("http");
const PORT = process.env.PORT || 3000;

const magicConchShellAnswers = [
  "Maybe someday",
  "Nothing",
  "Neither",
  "I don't think so",
  "No",
  "Yes",
  "Try asking again",
  "You cannot get to the top by sitting on your bottom",
  "I see a new sauce in your future",
  "Ask next time",
  "Follow the seahorse",
];

const server = createServer((req, res) => {
  if (req.url.match(/\/advice/) && req.method === "GET") {
    Math.floor(Math.random() * magicConchShellAnswers.length);

    const advice =
      magicConchShellAnswers[
        Math.floor(Math.random() * magicConchShellAnswers.length)
      ];

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        data: advice,
      })
    );
    res.end();
  } else if (req.url.match(/\/health/) && req.method === "GET") {
    res.writeHead(200);
    res.end();
  } else if (req.url.match(/\/live/) && req.method === "GET") {
    res.writeHead(200);
    res.end();
  }
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
