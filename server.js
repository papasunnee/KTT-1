const express = require('express')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
//const app = next({dev: false})
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express();

  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/country/:state', (req, res) => {
    return app.render(req, res, '/state', { state: req.params.state });
  })

  server.get('/policy/:policy', (req, res) => {
    return app.render(req, res, '/policy', { policy: req.params.policy });
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
