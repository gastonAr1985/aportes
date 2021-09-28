const express = require('express');

const port = 3000;
const app = express();

app.use(express.static('./'));
app.get(
	'/',
	function (req, res) {
		res.send('lalala');
	}
);

const server = app.listen(
	port,
	() => {
		console.log('Accepting connections on port ' + port + '.. hit ctrl+c to exit');
	}
);
