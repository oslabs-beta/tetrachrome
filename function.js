const path = require("path");
const express = require("express");
const app = express();
const router = express.Router();
const morgan = require("morgan");
const winston = require("winston");
const { combine, timestamp, json } = winston.format;
require("winston-socket.io");

//we are going to save the route stack in this variable
const routes = [];

/**
 * Socket.io server
 */
const { Server } = require("socket.io");
//create a Socket.io server at port 3030
const io = new Server(3030, {
  cors: {
    origin: "*",
  },
});

io.of("/log").on("connection", (socket) => {
  // send a message to the client
  console.log("socket connection established");
  //send route stack to blueprint frontend
  socket.emit("route stack", routes);
  socket.on("log", function (data) {
    console.log("got log data");
    console.log(data);
    socket.emit("winstonlog", data);
  });
});

/**
 * winston logger
 */

const logger = winston.createLogger({
  level: "http",
  format: combine(
    timestamp({
      format: "YYYY-MM-DD hh:mm:ss.SSS A",
    }),
    json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: "logs.log",
    }),
    new winston.transports.SocketIO({
      host: "localhost",
      port: 3030,
      secure: false,
      reconnect: true,
      namespace: "log",
      log_topic: "log",
    }),
  ],
});

const metrics = morgan(
  function (tokens, req, res) {
    return JSON.stringify({
      method: tokens.method(req, res),
      url: tokens.url(req, res),
      status: Number.parseFloat(tokens.status(req, res)),
      content_length: tokens.res(req, res, "content-length"),
      response_time: Number.parseFloat(tokens["response-time"](req, res)),
      date: tokens["date"](req, res),
    });
  },
  // {
  //   stream: {
  //     write: (message) => {
  //       const data = JSON.parse(message);
  //       logger.http("incoming-request", data);
  //     },
  //   },
  // }
  { stream: { write: (message) => io.of("/log").emit("winstonlog", message) } }
);

router.use("/blueprint", express.static(path.resolve(__dirname, "./build")));

const routeStack = (app) => {
  //NOTE: setImmediate was used to ensure that we get the full route stack. Before this change, the user had to invoked routeStack after the route handlers
  setImmediate(() => {
    console.log("about to send route stack");
    app._router.stack.forEach(print.bind(null, []));
  });
};

exports.routeStack = routeStack;
exports.metrics = metrics;
module.exports.blueprint = router;

function print(path, layer) {
  if (layer.route) {
    layer.route.stack.forEach(
      print.bind(null, path.concat(split(layer.route.path)))
    );
  } else if (layer.name === "router" && layer.handle.stack) {
    layer.handle.stack.forEach(
      print.bind(null, path.concat(split(layer.regexp)))
    );
  } else if (layer.method) {
    routes.push({
      method: layer.method.toUpperCase(),
      path: "/" + path.concat(split(layer.regexp)).filter(Boolean).join("/"),
    });
  }
}

function split(thing) {
  if (typeof thing === "string") {
    return thing.split("/");
  } else if (thing.fast_slash) {
    return "";
  } else {
    var match = thing
      .toString()
      .replace("\\/?", "")
      .replace("(?=\\/|$)", "$")
      .match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
    return match
      ? match[1].replace(/\\(.)/g, "$1").split("/")
      : "<complex:" + thing.toString() + ">";
  }
}
