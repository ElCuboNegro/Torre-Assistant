const { environment } = require('./lib/config/config');
const app = require('./server');

app.listen(environment.PORT);
