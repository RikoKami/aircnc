const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

/**
 * Conecção ao Mongo
 */
mongoose.connect("mongodb+srv://omnistack:omnistack@cluster0-cymly.mongodb.net/airCNC?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


/**
 * Express dados com formato em json
 */
app.use(express.json());

/**
 * Rotas da aplicação
 */
app.use(routes);

/**
 * Porta da aplicação
 */
app.listen(3333);
