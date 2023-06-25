const http = require('http')
const students = require('./data')

const server = http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    const roll_no = req.url.slice(1)

    const result = students.find((item) => {
        return item.roll_number === parseInt(roll_no)
    })

    if(result){
        res.end(JSON.stringify(result))
    } else {
        res.end(JSON.stringify({}))
    }
})

server.listen(3030, () => {
    console.log('Server is running');
})