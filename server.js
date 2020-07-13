const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || '8080';
app.set('port', port);

app.use('/', routes);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server running on localhost:${port}`));
