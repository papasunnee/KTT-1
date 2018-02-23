const express = require('express')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
//const app = next({dev: false})
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
const verifyPhone = require('./lib/VerifyPhone');

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

  server.get('/poll-verification/start', async (req, res) => {
    let phone = req.query.phone;
    //console.log(phone);
    try {
      const response = await verifyPhone.sendCode(phone);
      console.log(response);
      res.json(response);
    } catch (e) {
      res.json(response);
    }
  })

  server.get('/poll-verification/verify', async (req, res) => {
    let phone = req.query.phone,
        code = req.query.code;
    console.log(code);
    try {
      const response = await verifyPhone.verifyCode (phone, code);
      console.log(response);
      res.json(response);
    } catch (e) {
      res.json(response);
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
