# Tetrachrome

Tetrachrome is an open source developer tool for developers to visualize and analyze the fullstack of their applications using React and Node.js / Express.

## Features:
* Parses through React Fiber Tree and generates the visualization of the tree using D3.js
* Parses through Express object and creates a table of all the routes and the associated methods
* Captures HTTP request activity and creates a table of associated methods, endpoints, statuses, content lengths, response times, and timestamps

## Built With
* Javascript
* Node.js / Express
* React
* D3.js
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
4. Run your application and go to the route /tetrachrome. You will see the Tetrachrome navigation bar at the top of the page and your application running below that navigation bar. When you click on the Frontend option on the navigation bar, our algorithm will parse your React Fiber Tree and display the tree on the right side of the screen below the navigation bar. Clicking the Backend option menu will show a table of the available paths and their methods. The Logs option creates a table of all the HTTP requests that are hitting your server. Be sure to interact with your application on the left side of the page in order to see all your HTTP requests in real time.

## Authors
* Judy Wu
* Marco Xu
* Risa Ochiai
* Terry Park
