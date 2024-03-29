let express = require('express');
let router = require('./router');
let bodyParser = require('body-parser');

let app = express();

app.use('/node_modules/', express.static('./node_modules/'));
app.use('/public/', express.static('./public/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('html', require('express-art-template'));

app.use(router);

app.listen(3000, function () {
	console.log('server is running');
});
