const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const pokemonRouter = require("./routes/pokemonRoutes.js"); // Import the api.js file
const cors = require("cors");
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/pokemon", pokemonRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
