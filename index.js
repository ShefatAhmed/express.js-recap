const express = require("express");

const app = express();
const router = express.Router();

app.use(router)

app.get("/", (req, res) => {
  res.send("Get Method");
});

app.post("/", (req, res) => {
  res.send("Post Method");
});

app.listen(5000, ()=> {
    console.log("Server is listing on port 5000");
})