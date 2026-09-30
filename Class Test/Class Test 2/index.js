const fs = require('fs')

fs.writeFile('Dummy.txt', 'This is dummy.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File written successfully')
    }
})

fs.readFile('Dummy.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log(res)
    }
})

fs.appendFile('Dummy.txt', ' \nThis is appended text.', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Data appended successfully')
    }
})

fs.unlink('Dummy.txt', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File deleted successfully')
    }
})