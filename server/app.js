const express = require('express');
const dotenv = require('dotenv').config();

const usersRouter = require("./routes/usersRoutes")

const app = express()
const port = process.env.PORT || 5000;
 
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})