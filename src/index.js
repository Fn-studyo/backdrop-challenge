const Express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const mongoose = require('mongoose');
const dbConfig = require("../app/db/database.config.js");
const path = require("path");

mongoose.Promise = global.Promise;
const { query, short } = require('../app/queries/query');

//connect to DB

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...");
    process.exit();
});
    


//Root resolver

let root = {
    shortenUrl : short
};


//express server

let app = Express();

app.use('/graphiql', graphqlHTTP({
    schema : query,
    rootValue: root,
    graphiql : true
}));

//console.log(query);

app.listen(4000, () => console.log('Express GraphQL is now running on http://localhost:4000'));