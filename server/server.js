const express = require("express")
const cors = require("cors")
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(cors())


const {home} = require("./controllers/pageCtrl.js")


app.get("/", home)


const PORT =  process.env.PORT||4005

app.listen(PORT, () => console.log(`Server lightening on port ${PORT}`))