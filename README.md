# Tetrachrome

Tetrachrome is a full-stack visualization tool for developers using React and Express that
* parses through the React Fiber Tree and generates the visualization of the tree using D3
* parses through the Express object and creates a table of all the routes and their methods
* captures the HTTP requests and creates a table of their methods, endpoints, statuses, content lengths, response times, and timestamps

## Built With
* Javascript
* Node/Express
* React
* D3
* Webpack
* Socket-io
* Morgan

## Installation
1. Assuming you've already installed Node.js and npm, install the Tetrachrome package by running the following command:
```
  npm i tetrachrome
```
2. Tetrachrome exports a router object named tetrachrome and a function named routeStack. The tetrachrome router object contains an isolated instance of customized Morgan NPM middleware and creates a route (`/tetrachrome`) where the application is served. The routeStack function contains logic that parses through the express to find out which endpoints are available in the user's application.

    Following is an example of how to use Tetrachrome in your application:
```
  const { tetrachrome, routeStack } = require('tetrachrome');
  app.use(tetrachrome);
  routeStack(app);
```
3. Since the commands above serve the Tetrachrome application on the server side, if you are using Webpack or any other module bundler, you will need to add this server-side route (/tetrachrome) to your proxy configuration in order to access the Tetrachrome application on the client side.
```
  proxy: {
    '/tetrachrome': {
      target: 'http://localhost:3000/',
      secure: false,
    },
  }
```
## Authors
* Judy Wu
* Marco Xu
* Risa Ochiai
* Terry Park
