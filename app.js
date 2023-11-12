const express = require("express")
const artRoute = require("./routes/artData")

const app = express()
const port = 8000

app.use(express.json())
app.use('/art', artRoute)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})