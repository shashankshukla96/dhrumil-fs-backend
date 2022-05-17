const express = require('express');
const app = express();
const authenticationRouter = require("./routes/authentication");
const userRouter = require('./routes/users');
const makeDbConnection = require('./utils/db');

app.use(express.json()); // middleware to parse incoming requests with JSON payloads

app.use("/auth", authenticationRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    makeDbConnection();
});