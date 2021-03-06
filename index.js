const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const {initalizeDBConnection} = require("./db/db.connect.js");
const videoRoute = require("./routes/video.router.js");
const likeRoute = require("./routes/like.router.js");
const historyRoute = require("./routes/history.router.js");
const authRoute = require("./routes/auth.router.js");

const { requireAuth } = require('./middlewares/auth-middleware.js')

const app = express();
app.use(bodyParser.json());

const PORT = 3000;
initalizeDBConnection();

app.use(cors())
app.use("/videos", videoRoute)
app.use("/liked",  likeRoute)
app.use("/history", historyRoute)
app.use("/auth", authRoute)

app.get('/', (req, res) => {
  res.send({success: true, message: "FARM-TUBE"})
});

app.listen(PORT, () => {
  console.log('Server Started');
});