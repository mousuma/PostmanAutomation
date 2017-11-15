var fs = require('fs');
var Collection = require('postman-collection').Collection;
var ItemGroup = require('postman-collection').ItemGroup;
var folders = require('./collection/groups/config');

var myCollection = new Collection({
    info: {
        name: "my Collection",
        description: "This is my first postman collection"
    }
});

for (key in folders) {
    if (folders.hasOwnProperty(key)) {
        myCollection.items.add(folders[key]);
    }
}

fs.writeFileSync(
    'out/myCollection.postman_collection.json',
    JSON.stringify(myCollection.toJSON(), null, ' '),
    'utf-8'
);
