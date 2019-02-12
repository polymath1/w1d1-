var https = require('https');

function getAndPrintHTML(options) {
console.log(options)
var emptyVariable = ('');
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data){
      emptyVariable += data;
      });
      console.log(  emptyVariable);



  response.on('end', function() {
    console.log("end" + emptyVariable);
    });
  });


};

var options = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

getAndPrintHTML(options);