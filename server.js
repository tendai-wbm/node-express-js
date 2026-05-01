import http from 'http';

const PORT = 5000
const server = http.createServer((req,res) => {
	res.setHeader('Content-Type','text/html');
	res.statusCode = 404;
	res.end("<h2>This is NodeJS</h2>");
});

server.listen(PORT, () => { console.log(`SERVER RUNNING ON ${PORT}`); });
