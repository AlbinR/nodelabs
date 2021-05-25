// Packages
const express = require("express");
const app = express();
const fs = require("fs");
// Set the port
const port = 3000;

// Serve static files in public
app.use(express.static("public"));

// Lab 1
//--------------------------------------------------
// Random function

app.get("/api/random", function (req, res) {
  // The math needed to generate a random number between 0 and 1023
  const random = Math.floor(Math.random() * 1023);
  // The random number in json response
  res.json({ number: random });
});

// Custom random function
app.get("/api/custom_random/:num", function (req, res) {
  // Put the input in a variable
  let num = req.params.num;
  // The math to generate a random number between 0 and num
  const customRandom = Math.floor(Math.random() * num);
  //The random number in json response
  res.json({ number: customRandom });
});

// Lab 2
//--------------------------------------------------
// Show function
// Function shows how many calls have been made
app.get("/api/show", function (req, res) {
  //Read the counter.txt file in the data folder
  fs.readFile("./data/counter.txt", function (err, data) {
    // Console log errors and is nesesary for some reason
    if (err) {
      console.log(err);
    }
    // Put the data from counter.txt in countAmount
    const countAmount = Number(data);
    // Respond with the counter amount in json format
    res.json({ counter: countAmount });
  });
});

// Add 1 to amount
// Function adds +1 to counter.txt file for every call and displays old amount and new amount
app.get("/api/add", function (req, res) {
  //Read the counter.txt file in the data folder
  fs.readFile("./data/counter.txt", function (err, data) {
    // Console log errors and is nesesary for some reason
    if (err) {
      console.log(err);
    }
    // Put the data from counter.txt in countAmount
    const currentCount = Number(data);
    // Add +1 to the counter.txt file and changes to string
    countIncreased = (Number(data) + 1).toString();
    // Edits the counter.txt file by adding +1
    fs.writeFile("./data/counter.txt", countIncreased, function () {
      res.json({ oldcount: currentCount, newcount: Number(countIncreased) });
    });
  });
});

// App is listening to the webserver port
app.listen(port, function () {
  console.log("app listening to port", port);
});

/* 
Sources: 
https://expressjs.com/
https://github.com/juiceghost/express-trainer

First attempt:
----------------------------------------------

const http = require("http");

const fs = require("fs");

const port = 3000;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error: file Not Found");
    } else {
      res.write(data);
    }
    res.end();
  });
  res.write("Hello Node");
});

server.listen(port, function (error) {
  if (error) {
    console.log("Something went wrong", error);
  } else {
    console.log("server is listening on port ", port);
  }
});


*/
