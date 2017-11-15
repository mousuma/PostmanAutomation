
var ItemGroup = require('postman-collection').ItemGroup;
var tests = require('./Product');

var ItemFolder = new ItemGroup({
    name: "This is API test folder",
    description: "This is my second postman Folder"
});

var testCollection = [];

for(var test in tests) {
    if (tests.hasOwnProperty(test)) {
        var item = tests[test];

        for(var key in item) {
            var result = item[key];

            for (var r in result ) {
                if (result.hasOwnProperty(r)) {
                    testCollection.push(result[r]);
                }
            }
        }
    }
}

for(var o in testCollection) {
    if (testCollection.hasOwnProperty(o)) {
        ItemFolder.items.add(testCollection[o]);
    }
}

exports.ItemFolder = ItemFolder;