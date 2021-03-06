const express = require('express');
const app = express();

app.use(express.json());

app.use('/planner/tours', require('./routes/tours'));
app.use('/planner/stops', require('./routes/stops'));
app.use(require('./middleware/notfound'));
app.use(require('./middleware/error'));

app.get('/', (req, res) => {
  res.end('Connected, no response');
});

module.exports = app;
