const express = require('express'); 
const app = express();
const external = require("./info");

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/videos', (request, response) => {
    response.send(external.videos);
});

app.get('/videos/:id', (request, response) => {
    response.send(external.videos[request.params.id])
});

app.get('/comedians/:id', (request, response) => {
	//let index = request.url.match(/.+\/(\d+)/);
	//response.send(external.comedians[index[1]]);
	response.send(external.comedians[request.params.id])
});

app.get('/comedians/:id/videos', (request, response) => {
    response.send(external.videos)
});

app.get('/comedians/:id/videos/:id', (request, response) => {
    response.send(external.videos[request.params.id])
});

app.listen(3000, () => {
    console.log("I am listening");
});

// Challenge 2
// Make a whole new resource. Whatever you want!

// Create an array of objects representing that resource
// Create the route to return the collection of that resource
// Create the route to return one resource from that collection by ID

app.get('/diets', (request, response) => {
    response.send(external.diets)
});

app.get('/diets/:id', (request, response) => {
    response.send(external.diets[request.params.id])
});

app.get('/diets/:id/nonos', (request, response) => {
    response.send(external.diets[request.params.id].nonos)
});


//BONUS

//using postman & body-parser
var food;

app.post('/api/diets', function(request, response) {
    food = request.body.food;

    response.send(food);
});

app.get('/api/diets', (request, response) => {
    response.send(food);
});










