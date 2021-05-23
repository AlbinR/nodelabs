var expect = require("chai").expect;
var request = require("request");

describe("random", function () {
  var url = "localhost:3000/api/random";

  it("Should show an integer 0 - 1023", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(response.body).number).to.be.within(0, 1023);
      done();
    });
  });
});
