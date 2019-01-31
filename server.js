var express = require('express');
//var cors = require('cors');
var bodyParser = require('body-parser');
const path = require('path');
const port = 4003;


var app = express();

const api = require('./routes/api'); 

//app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/conFusion')));
//require('./config/passport')(passport);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/*app.use(session({
    secret:'thesecret',
    saveUninitialized:false,
    resave:false
}));*/

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Expose-Headers', 'Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//app.use(passport.initialize());
//app.use(passport.session());
app.use('/api',api);

app.get('*', (req, res) => {
    res.sendfile(path.join(__dirname, 'dist/conFusion'))
});

app.listen(port, () => console.log("server is running PORT: " + port));