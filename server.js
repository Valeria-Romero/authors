const express = require('express');
const app = express();
app.use( express.urlencoded({extended:true}) );
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const {AuthorsRouter} = require( './server/routes/authorsRouter.js' );
const cors = require('cors');

app.use(express.static(__dirname + "/static"));
app.use( cors());

require( './server/config/database.js' );

app.use('/',AuthorsRouter);


app.listen(8080, function (){
	console.log("the user server is running in port 8080");
});
