const express = require('express');
const cors = require('cors');
const students = require('./students');
const resources = require('./resources');
let homeworks = require('./homeworks');

const { PORT = 4000 } = process.env;

const run = async () => {
  const app = express();
  app.use(express.json());
  app.use('/public', express.static('resources'));
  // enable cors
  app.use(cors());
  app.options('*', cors());

  /* Application */
  const router = express.Router();
  router.get('/resources', (req, res) => {
    res.json({ resources });
  });

  router.get('/students', (req, res) => {
    res.json({ students });
  });

  router.get('/homeworks', (req, res) => {
    homeworks = homeworks.filter((homework) => {
      return homework.available;
    });
    res.json({ homeworks });
  });

  /**
   * POST body to save an assignment
   * The body should look like this
   * {
   *   "name": "My First Assignment",
   *   "date": "1617719851333", - This is a unix time stamp. You can use `new Date().getTime()` to get this
   *   "resources": [2,3],
   *   "students": ["5bd9e9fbecef8d003e003001", "5bd9e9fbecef8d003e003003"]
   * }
   */
  router.post('/assignment', (req, res) => {
    const messages = [];

    if (!req.body.name) messages.push('Please add an assignment name');
    if (!req.body.date) messages.push('Please add an assignment due date');
    if (!req.body.resources)
      messages.push('Please add a least 1 resource for the assignment');
    if (!req.body.students)
      messages.push('Please provide a list of students assigned to the task');

    if (messages.length > 0) return res.status(400).json({ messages });
    return res
      .status(201)
      .json({ message: 'Accepted assignment response successfully' });
  });

  app.use('/', router);

  const server = app.listen(PORT, () => {
    const { address, port } = server.address();
    console.log(`Listening: http://${address}:${port}`);
  });
};

run().then(() => {
  console.log('Started server');
});
