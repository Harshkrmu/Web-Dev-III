// const os = require('os')

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.version())
// console.log(os.uptime())
// console.log(os.totalmem()/1024/1024/1024 + ' GB')
// console.log(os.freemem()/1024/1024/1024 + ' GB')
// console.log(os.cpus().length)

const fs = require('fs')

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

const data = {name: 'John', age: 30, city: 'New York'}

fs.writeFile('db.json', JSON.stringify(data,["name","city"], 2), (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('File Written')
    }
})