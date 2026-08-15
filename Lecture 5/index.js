// const os = require('os')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.version())
// console.log(os.uptime())
// console.log(os.totalmem()/1024/1024/1024 + ' GB')
// console.log(os.freemem()/1024/1024/1024 + ' GB')
// console.log(os.cpus().length)

// const fs = require('fs')

// fs.writeFile("data.txt",'Hello Ji', (err,res) => {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log('File created successfully')
//     }
// })

// fs.readFile('data.txt', 'utf-8', (err, res) => {
//     if (err) {
//         console.log(err)    
//     }
//     else {
//         console.log(res)
//     }
// })

// fs.appendFile('data.txt', ' How are you?', (err, res) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('Data Updated')
//     }
// })

// fs.unlink('data.txt', (err, res) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('File Deleted')
//     }
// })

const fs = require('fs')

// const data = {name: 'John', age: 30, city: 'New York'}

// fs.writeFile('db.json', JSON.stringify(data,null, 2), (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('File Written')
//     }
// })

// fs.writeFile('db.json', JSON.stringify(data,["name","city"], 2), (err) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log('File Written')
//     }
// })

// let newData = {name: 'Jane', age: 25, city: 'Los Angeles'}

// fs.readFile('db.json', 'utf-8', (err, res) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         let temp = JSON.parse(res)
//         temp.push(newData)
//         fs.writeFile('db.json', JSON.stringify(temp, null, 2), (err) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 console.log('Data Updated')
//             }
//         })
//     }
// })

// const path = require('path')

// const file = path.join("Home","Data","User.json")
// console.log(file)

// console.log(path.dirname("home/user/data/File.txt"))

// console.log(path.basename("home/user/data/File.txt"))

// console.log(path.extname("home/user/data/File.txt"))

// const filePath = path.join("Home","Data","User","File.txt")
// console.log(filePath)

// fs.mkdir(path.dirname(filePath), {recursive:true}, (err) => {
//     if (err)
//         console.log(err)
//     else{
//         fs.writeFile(filePath,"", (err) => {
//             if (err)
//                 console.log(err)
//             else{
//                 console.log('File Created')
//             }
//     })
//    }
// })

// const crypto = require('crypto')

// let password1 = 'myPassword123'
// let password2 = 'myPassword123'

// let encrypt1 = crypto.createHash("sha256").update(password1).digest("hex")
// let encrypt2 = crypto.createHash("sha256").update(password2).digest("hex")

// console.log(encrypt1)
// console.log(encrypt2)

// const dns = require('dns')

// dns.lookup('www.google.com',{family: 4} ,(err, address, family) => {
//     console.log(address)
//     console.log(family)
// })

