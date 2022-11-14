const express = require("express") ;

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-docs/swagger.json');

const spenddingRouter = require("./spending");

const budgetRouter = require("./budget");

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Fintech-team9')
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/spending", spenddingRouter)

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})