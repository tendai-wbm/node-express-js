import http from 'http';

const PORT = 5000
const server = http.createServer((req,res) => {
	res.setHeader('Content-Type','text/plain');
	res.statusCode = 404;
	res.end("<h3>This is NodeJS</h3>");
});

server.listen(PORT, () => { console.log(`SERVER RUNNING ON ${PORT}`); });
