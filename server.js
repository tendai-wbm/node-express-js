import http from 'http';

const PORT = 5000
const server = http.createServer((req,res) => {
	res.writeHead(200, { 'Content-Type': 'json' });
	res.end(JSON.stringify({"appName": "Tora Mari UTD" }));
});

server.listen(PORT, () => { console.log(`SERVER RUNNING ON ${PORT}`); });
