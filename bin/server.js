#!/usr/bin/env node
// Script that starts the entire project
var app = require('../app');

app.set('port', process.env.PORT || 3000);
console.log('set port to %s', app.get('port') );

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
