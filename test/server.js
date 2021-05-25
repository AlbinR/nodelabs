var expect = require("chai").expect;
var request = require("request");
const fs = require("fs");

// Labb 1 random
describe("Random", function () {
  let url = "http://localhost:3000/api/random";

  it("returns status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("generates a random number between 0 and 1023", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(response.body).number).to.be.within(0, 1023);
      done();
    });
  });
});

// Labb 1 custom random
describe("Custom random", function () {
  let url = "http://localhost:3000/api/custom_random/10000";
  it("returns status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("generates a random number between 0 and num", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(response.body).number).to.be.within(0, 10000);
      done();
    });
  });
});

//Labb 2 Show

// These tests are not done. They should check for a number not an object
describe("Show", function () {
  let url = "http://localhost:3000/api/show";

  it("returns status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("shows stored number", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(response.body)).to.be.a("object");
      done();
    });
  });
});

// Labb 2 Add
describe("Add", function () {
  let url = "http://localhost:3000/api/add";

  it("returns status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("shows stored number and the increase", function (done) {
    request(url, function (error, response, body) {
      expect(JSON.parse(response.body)).to.be.a("object");
      done();
    });
  });
});

// Sources:
/*
https://mochajs.org/  
https://github.com/juiceghost/mocha-test
https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
*/
