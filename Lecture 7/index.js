// const http = require('http')

// const server = http.createServer((req, res) => {  // req = forntend--->backend, res = backend--->frontend
//     // res.write("<h1>Hello World</h1>")
//     // res.write("<h2>Hello World</h2>")
//     // res.write("<p>This is my first server</p>")
//     // res.write("<span>This is a span tag</span>")
//     // res.end()
    
//     // console.log(req.url)

//     if(req.url === "/"){
//         res.write("<h1>Home Page</h1>")
//         res.end()
//     }

//     if(req.url === "/about"){
//         res.write("<h1>About Page</h1>")
//         res.end()
//     }
//     res.end() // if not ended keep the server running and it will keep on loading
// })

// server.listen(3000, () => {
//     console.log("Server is running on PORT 3000")
// })

const http = require('http');

const server = http.createServer((req, res) => {

  // if (req.method === 'GET') {
  //   res.write("<h1>GET Request</h1>");
  // }
  
  // if (req.method === 'POST') {
  //   res.write("<h1>POST Request</h1>");
  // }

  // if (req.method === 'PUT') {
  //   res.write("<h1>PUT Request</h1>");
  // }

  // if (req.method === 'DELETE') {
  //   res.write("<h1>DELETE Request</h1>");
  // }

  // console.log(req.method)
  // res.end()

  // if (req.url === "/user" && req.method === "GET") {
  //   res.write("<h1>Data Retrieved</h1>")
  //   res.end()
  // }

  // if (req.url === "/user" && req.method === "POST") {
  //   res.write("<h1>Data Created</h1>")
  //   res.end()
  // }

  // console.log(req.headers.token)
  
  let body = "Hello World!!!!"

  req.on("data", (chunk) => {
    body += chunk
  })

  req.on("end", () => {
    console.log(body)
  })
  res.end()

})

server.listen(3000, () => {
  console.log('Server is running on PORT 3000')
})
