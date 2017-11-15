var fs = require('fs');
var Collection = require('postman-collection').Collection;
var ItemGroup = require('postman-collection').ItemGroup;

var myCollection = new Collection({
    info: {
        name: "my Collection",
        description: "This is my first postman collection"
    }
});

var myItemF = require('./Groups/config');

for(key in myItemF) {
    myCollection.items.add(myItemF[key]);
}


fs.writeFileSync('myCollection.postman_collection.json', JSON.stringify(myCollection.toJSON(),null,' '),'utf-8');
