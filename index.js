import express from "express";
import res from "express/lib/response";

const app = express()

const port = 3000

app.get('/', () => {
    res.send('Hello Fintech-team9')
})

app.listen(port, () => {
    consolelog(`App Listening on port ${port}`)
})