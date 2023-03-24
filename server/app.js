const express = require("express");
const dotenv = require("dotenv").config();

const usersRouter = require("./routes/usersRoutes");
const errorHandler = require("./middleware/errorHandler");
const connectDb = require("./config/dbConnection")

connectDb();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/users", usersRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
