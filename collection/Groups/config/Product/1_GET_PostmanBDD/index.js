var fs = require('fs');
var Item = require('postman-collection').Item;

const EXEC = fs.readFileSync(`${__dirname}/test.js`, 'utf8').split("\n");

var bdd = new Item({
    name: "Postman BDD",
    description: "Install Postman BDD",
    request: {
        url: "http://bigstickcarpet.com/postman-bdd/dist/postman-bdd.min.js",
        method: "GET",
    }
});

bdd.events.add({
     listen: 'test',
     script: {
         exec: EXEC,
     }
 });

exports.bdd = bdd;
