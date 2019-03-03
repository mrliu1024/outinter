var express = require("express");
var app = express();
app.use(express.static('.'));
app.listen(8080, () => console.log("server start: http://127.0.0.1:8080/"));
