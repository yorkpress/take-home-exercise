const express = require('express');
const students = require('./students');
const resources = require('./resources');

const {
  PORT = 3000,
  SERVER_TIMEOUT = 65000,
} = process.env

const run = async () => {

  const app = express()
  app.use(express.json())
  app.use('/public', express.static('resources'));

  /* Application */
  const router = express.Router();
  router.get('/resources', (req, res) => {
    res.json({resources});
  });

  router.get('/students', (req, res) => {
    res.json({students})
  });

  router.post('/assignment', (req, res) => {
    const messages = [];

    if (req.body.name) messages.push("Please add an assignment name")
    if (req.body.date) messages.push("Please add an assignment due date")
    if (req.body.resources) messages.push("Please add a least 1 resource for the assignment")
    if (req.body.students) message.push("Please provide some students that ")

    if (messages) return res.status(400).json({messages});
    return res.status(201).json({message: "Accepted assignment response successfully"});
  })

  app.use('/', router);

  const server = app.listen(PORT, () => {
    const { address, port } = server.address()
    console.log(`Listening: http://${address}:${port}`)
  })

  server.timeout = parseInt(SERVER_TIMEOUT)
  server.keepAliveTimeout = 65000
  server.headersTimeout = 66000
}

run().then(() => {
  console.log('Started server')
});
