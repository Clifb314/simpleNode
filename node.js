const url = require('url')
const fs = require('fs/promises')

const http = require('http')



http.createServer(async (req, res) => {
    const myURL = url.parse(req.url)
    console.log(myURL)

    const filePath = `.${myURL.pathname}.html`
    console.log(filePath)

    try {
        const page = await fs.readFile(filePath)
        console.log(page)
        res.writeHead(200, {'Content-Type' : 'text/html'})
        res.write(page)
        return res.end()
    } catch {
        const page = await fs.readFile('./404.html')
        res.writeHead(404, {'Content-Type' : 'text/html'})
        res.write(page)
        return res.end()
    }

}).listen(8080)
