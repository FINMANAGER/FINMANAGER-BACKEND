const express = require("express") ;

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('Hello Fintech-team9')
})

app.listen(port, () => {
    console.log(`App Listening on port ${port}`)
})