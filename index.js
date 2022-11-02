const server = require('./server')

server.get('/', async (req, res) => {
    return {
        root: 'get'
    }
})
server.post('/', async (req, res) => {
    return {
        root: 'post'
    }
})