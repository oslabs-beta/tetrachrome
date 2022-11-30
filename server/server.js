const express = require('express');
const path = require('path');
const cors = require('cors');
// const helmet = require('helmet');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

// serve index.html
app.use('/', express.static(path.join(__dirname, '../client/')));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page not found'));

// error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' }
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return JSON.stringify(errorObj.status, errorObj.message);
});

// Express app will use port 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;