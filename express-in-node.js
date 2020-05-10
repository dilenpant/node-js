const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('<div>Hello</div>')
})

app.get('/new', function(req, res){
    const id = req.query.id;
    const name = req.query.name;
    res.send('<div>Hello '+name+ ' '+id+'</div>')
})


app.listen(9000, function (req, res){
console.log('Running ......')

})