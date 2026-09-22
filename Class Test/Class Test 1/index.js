const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method);
    console.log(req.url);
    console.log(req.headers);

    if (req.url === '/'){
        res.write("Home Page");
        res.end();
    }

    if (req.url === '/about'){
        res.write("About Page");
        res.end();
    }

    if (req.url === '/contact'){
        res.write("Contact Page");
        res.end();
    }

    res.end();

});
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});