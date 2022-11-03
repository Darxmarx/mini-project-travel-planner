// initialize the npm packages
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// initialize express usage and set up the listening port
const app = express();
const PORT = process.env.PORT || 3001;

// state that the api listens for both json and urlencoded objects
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// activates the routes pathing
app.use (routes);

// turn on connection to db and server, listen to port on success
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening to server'));
});
