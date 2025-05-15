const express = require("express");

const app = express();

app.set("view engine", "ejs");

app
  .route("/about/mission")
  .get((req, res) => {
    res.render("pages/about");
  })
  .post((req, res) => {
    res.send("Welcome to application home post");
  })
  .put((req, res) => {
    res.send("Welcome to application home put");
  });


app.listen(5000, () => {
  console.log("Server is listing on port 5000");
});
