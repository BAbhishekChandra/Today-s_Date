const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const todays_date = new Date();
  response.send(
    `${todays_date.getDate()}-${
      todays_date.getMonth() + 1
    }-${todays_date.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
