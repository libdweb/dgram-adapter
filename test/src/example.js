// @noflow

const dgram = require("../../")(browser)
const { Buffer } = require("buffer")

const serve = port => {
  const server = dgram.createSocket("udp4")

  server.on("error", err => {
    console.log(`server error:\n${err.stack}`)
    server.close()
  })

  server.on("message", (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
    server.close()
  })

  server.on("close", () => {
    console.log("server closed")
  })

  server.on("listening", () => {
    const address = server.address()
    console.log(`server listening ${address.address}:${address.port}`)
  })

  server.bind(port)
  return server
}

const PORT = 41234
serve(PORT).on("listening", () => {
  const message = Buffer.from("Some bytes")
  const client = dgram.createSocket("udp4")
  client.send(message, PORT, "localhost", error => {
    console.log("message was send")
    client.close()
  })
  client.on("close", () => {
    console.log("client closed")
  })
})
