const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("깃허브 액션");
  res.send("깃허브 액션!!");
});

app.listen(3003, () => {
  console.log("서버 열림dd");
});
