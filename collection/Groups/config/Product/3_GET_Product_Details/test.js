eval(globals.postmanBDD);

describe('Product endpoint response', function() {
    it('should return a 200 response', function() {
        response.should.have.status(200);
     });
 });
