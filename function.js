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

io.of('/log').on("connection", (socket) => {
  console.log("socket connection established");
  socket.emit("route stack", routes);

});

router
  .use(
    morgan(
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
      {
        stream: {
          write: (message) => io.of("/log").emit("log", message)
        },
      }
    )
  )
  .use("/tetrachrome", express.static(path.resolve(__dirname, "./build")));
// .listen(3000, (err, req, res) => {
//   let logMsg = "";
//   req.on("data", function (data) {
//     logMsg += data.toString();
//   });
//   req.on("end", function (data) {
//     io.emit("logger", logMsg);
//   });
// });

const routeStack = (app) => {
  setImmediate(() => {
  console.log("about to send route stack");
  //this method will grab the user route stack and store it in the routes array
  app._router.stack.forEach(print.bind(null, []));
  console.log(routes);
  })
};

exports.routeStack = routeStack;
module.exports.tetrachrome = router;

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
