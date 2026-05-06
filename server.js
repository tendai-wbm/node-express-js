import http from "http";

const PORT = 5000;
const server = http.createServer((req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "json" });
        res.end(JSON.stringify({ appName: "Tora Mari UTD" }));
      } else if (req.url === "/about") {
        res.writeHead(404, { "Content-Type": "json" });
        res.end(JSON.stringify({ motto: "Mari Hairambwe" }));
      } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page Not Found");
      }
    } else {
      throw new Error("Method not allowed.");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error");
  }
});

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
