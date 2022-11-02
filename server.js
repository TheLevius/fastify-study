const fastify = require('fastify')

const server = fastify({
    logger: true
})

const start = async () => {
    try {
        await server.listen({
            port: 3100
        })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start()

module.exports = server