const express = require("express")
const cors = require("cors")
const artRoute = require("./routes/artData")

const app = express()
const port = process.env.PORT || 8000

app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/art', artRoute)

app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})