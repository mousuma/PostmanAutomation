eval(globals.postmanBDD);

describe('Get /Health response', function() {
    it('should return a 200 response', function() {
        response.should.have.status(200);
     });
 });

