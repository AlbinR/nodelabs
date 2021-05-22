const express = require("express");
const app = express();
const port = 3000;

// Serve static files in public
app.use(express.static("public"));

// Random function
app.get("/api/random", function (req, res) {
  const random = Math.floor(Math.random() * 1023);
  res.json({ number: random });
});

// Custom random function

// App is listening to the webserver
app.listen(port, function () {
  console.log("server listening to port", port);
});

/* 
Sources: 
https://expressjs.com/
*/
