const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const apiRouter = require("./routes/api.js"); // Import the api.js file
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

// Specify the directory for views

app.use(bodyParser.json());
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
