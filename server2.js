import { createServer } from "http";

const PORT = 5000;

const users = [
  { id: 1, name: "Jasper" },
  { id: 2, name: "Jannis" },
  { id: 3, name: "Joram" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/)) {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));

    if (user) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.setHeader("Content-Type", "text/plain");
      res.write("User not found.");
      res.statusCode = 404;
      res.end();
    }
  }
});

server.listen(PORT, () => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`);
});
