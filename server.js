var express = require('express'),
app = express();
app.use(express.static('www'));
app.set('port', process.env.PORT || 5000);

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
})
.listen(app.get('port'), function () {
    console.log('express server listening on port ' + app.get('port'));
});