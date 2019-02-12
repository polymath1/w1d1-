var https = require('https');

function getAndPrintHTMLChunks() {
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
var emptyVariable = " ";
  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      emptyVariable = data;
      });
      console.log(emptyVariable);



  response.on('end', function() {
    console.log(emptyVariable);
    });
  });

};


getAndPrintHTMLChunks();