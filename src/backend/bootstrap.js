const { environment } = require('./src/config/config');
const app = require('./src/server');

app.listen(environment.PORT);
