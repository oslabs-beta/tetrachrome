# 🔮 Tetrachrome 

Tetrachrome is an open source developer tool for developers to visualize and analyze the fullstack of their applications using React and Node.js / Express.

## 🔑 Features:
* Parses through React Fiber Tree and generates the visualization of the tree using D3.js
* Parses through Express object and creates a table of all the routes and the associated methods
* Captures HTTP request activity and creates a table of associated methods, endpoints, statuses, content lengths, response times, and timestamps

## 🧰 Built with:
* Javascript
* Node.js / Express
* React
* D3.js
* Webpack
* Socket-io
* Morgan

## 🛠 Installation
1. Assuming you've already installed Node.js and npm, install the Tetrachrome package by running the following command:
```
  npm i tetrachrome
```
2. The application exports a router object named tetrachrome and a function named routeStack. The tetrachrome router object contains an isolated instance of customized Morgan (GitHub, NPM) middleware and creates a route (`/tetrachrome`) where the application is served. The routeStack function contains logic that parses through Express to determine which endpoints are available in the user's application. Add Tetrachrome into the backend (often your server.js file) of your application:
```
  const { tetrachrome, routeStack } = require('tetrachrome');
  app.use(tetrachrome);
  routeStack(app);
```
3. Since the commands above serves the Tetrachrome application, if you are using webpack or any other module bundler, you will need to add this server side route (`/tetrachrome`) to your proxy configuration (typically, your webpack.js file) in order to access the Tetrachrome application on the client side as shown below:
```
  proxy: {
    '/tetrachrome': {
      target: 'http://localhost:3000/',
      secure: false,
    },
  }
```
4. Run your application and navigate to the route `/tetrachrome` in your browser. You will see the Tetrachrome navigation bar at the top of the page and your application running below.
* Frontend - display of your application components using our algorithm parsing through your React Fiber Tree
* Backend - display of available paths and their methods
* Logs - tabular display of all HTTP requests that are hitting your server

Be sure to interact with your application on the left side of the page in order to see all your HTTP requests in real time!

## 🫰🏼 Team
| Name                                                                                                                            | Social                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Judy Wu | [![LinkedIn]](https://www.linkedin.com/in/judywuxingyi/) [![GitHub]](https://github.com/judywuxingyi) |
| Marco Xu | [![LinkedIn]](https://www.linkedin.com/in/marco-xu-lin/) [![GitHub]](https://github.com/marcoxulin) |
| Risa Ochiai | [![LinkedIn]](https://www.linkedin.com/in/risaochiai/) [![GitHub]](https://github.com/risa-10) |
| Terry Park | [![LinkedIn]](https://www.linkedin.com/in/terryparkjh/) [![GitHub]](https://github.com/tjpark95) |

## 📬 Contact
[![LinkedIn]](https://www.linkedin.com/company/tetrachrome-open-source/)

[LinkedIn]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white
[GitHub]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white

