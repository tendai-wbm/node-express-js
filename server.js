import http from 'http';

const PORT = 5000
const server = http.createServer((req,res) => {
	res.setHeader('Content-Type','text/html');
	res.statusCode = 404;
	res.end("Page not found.");
});

server.listen(PORT, () => { console.log(`SERVER RUNNING ON ${PORT}`); });
