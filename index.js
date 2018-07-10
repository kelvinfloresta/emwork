const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;

express()
  .use(express.static(path.join(__dirname, "build")))
  .get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  })
  .use(errorHandler)
  .listen(PORT, () => console.log("Listening on port =>", PORT));

function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send("An error occurred!");
}
