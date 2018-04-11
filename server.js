const express = require('express')
const next = require('next')
const app = next({dev: process.env.NODE_ENV !== 'production'})
// const app = next({dev: false})
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000
const verifyPhone = require('./lib/twilio/VerifyPhone')
const bodyParser = require('body-parser')
const the411 = require('./lib/the411ng/apiPlugin')

app.prepare().then(() => {
  const server = express();


  server.use(bodyParser.json()); // support json encoded bodies
  server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  server.get('/', (req, res) => {
    return app.render(req, res, '/')
  })

  server.get('/country/:state', (req, res) => {
    return app.render(req, res, '/state', { state: req.params.state });
  })

  server.get('/policy/:policy/:image', (req, res) => {
    return app.render(req, res, '/policy', { policy: req.params.policy , imageSrc: req.params.image});
  })

  // server.post('/policy', (req, res) => {
  //     var policyTitle = req.body.policyTitle
  //  })

  server.get('/poll-verification/start', async (req, res) => {
    let phone = req.query.phone;
    //console.log(phone);
    try {
      const response = await verifyPhone.sendCode(phone);
      // console.log(response);
      res.json(response);
    } catch (e) {
      res.json(e);
    }
  })

  server.get('/poll-verification/verify', async (req, res) => {
    let phone = req.query.phone,
        code = req.query.code;
    // console.log(code);
    try {
      const response = await verifyPhone.verifyCode (phone, code);
      // console.log(response);
      // res.json(response);
    } catch (e) {
      res.json(e);
    }
  })

  server.get('/fetch-breaking-articles', async (req, res) => {
    console.log('fetching breaking');
    try {
      const articles = await the411.getBreakingArticles();
      res.json(articles);
    } catch (e) {
      res.json(e);
    }
  })

  /*server.get('/fetch-articles', async (req, res) => {
    console.log('fetching articles list');
    try {
      const articles = await the411.getArticles();
      res.json(articles);
    } catch (e) {
      res.json(e);
    }
  })*/

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
