
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const postsRoute = require('./routes/posts');
const userRoute = require('./routes/user');
const commentsRoute = require('./routes/comments');

app.use(express.json());
app.use("/user", userRoute);
app.use("/comments", commentsRoute);



app.use("/posts", postsRoute)

 module.exports = app