const express = require("express") ;
var bodyParser = require("body-parser");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-docs/swagger.json');
const { port } = require("./config");

const spenddingRouter = require("./spending");

// const budgetRouter = require("./budget");

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Fintech-team9')
})

app.use(bodyParser.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/spending", spenddingRouter)

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})