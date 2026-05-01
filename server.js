import http from 'http';

const PORT = 5000
const server = http.createServer((req,res) => {
	if (req.url === "/") {
		res.writeHead(200, { 'Content-Type': 'json' });
		res.end(JSON.stringify({"appName": "Tora Mari UTD" }));
	}

	else if (req.url === "/about") {
		res.writeHead(404, { 'Content-Type': 'json' });
		res.end(JSON.stringify({"motto": "Mari Hairambwe" }));
	}

	else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end("Page Not Found");
	}
});

server.listen(PORT, () => { console.log(`SERVER RUNNING ON ${PORT}`); });
