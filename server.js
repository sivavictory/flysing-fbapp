var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
})

var Client = require('node-rest-client').Client;
 
var client = new Client();

// set content-type header and data as json in args parameter 
var args = {
    data: { test: "hello" },
    headers: { "Content-Type": "application/json" }
};

app.get('/listUsers', function (req, res) {
   // direct way 
client.get("https://airport.api.aero/airport/match/Amst?user_key=3035d833bb6e531654a3cce03e6b1fde", args,function (data, response) {
    // parsed response body as js object 
    console.log(data);
    // raw response 
    console.log(response);
}).on('error', function (err) {
    console.log('something went wrong on the request', err.request.options);
});

})



.listen(app.get('port'), function () {
    console.log('express server listening on port ' + app.get('port'));
});