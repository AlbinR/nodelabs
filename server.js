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
  const random = Math.floor(Math.random() * 1023);
  res.json({ number: random });
});

// Custom random function
app.get("/api/custom_random/:num", function (req, res) {
  let num = req.params.num;

  const customRandom = Math.floor(Math.random() * num);

  res.json({ number: customRandom });
});

// Lab 2
//--------------------------------------------------
// Get amount
app.get("/api/show", function (req, res) {
  fs.readFile("./data/counter.txt", function (err, data) {
    if (err) {
      console.log(err);
    }
    const countAmount = Number(data);
    res.json({ counter: countAmount });
  });
});

// Add 1 to amount
app.get("/api/add", function (req, res) {
  fs.readFile("./data/counter.txt", function (err, data) {
    if (err) {
      console.log(err);
    }
    const currentCount = Number(data);
    countIncreased = (Number(data) + 1).toString();

    fs.writeFile("./data/counter.txt", countIncreased, function () {
      res.json({ oldcount: currentCount, newcount: Number(countIncreased) });
    });
  });
});

// App is listening to the webserver
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
