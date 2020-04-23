require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var helmet = require("helmet")
var path = require("path");

var app = express();
const Telegram = require("telegraf/telegram");
const telegram = new Telegram(process.env.BOT_TOKEN, {
  agent: null,
  webhookReply: true
});

app.use(helmet())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/", (req, res) => {
  if (typeof req.body.message !== "undefined") {
    telegram
      .sendMessage(process.env.CHAT_ID, `${req.body.message}`)
      .then(function(result) {
        if (result.text === req.body.message) {
          res.sendStatus(200);
        } else {
          res.sendStatus(422);
        }
      });
  } else {
    res.sendStatus(412);
  }
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};
  res.locals.error = req.app.get("env") === "development" ? {} : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
