const express = require("express")
const cors = require("cors")


const app = express()

// app.use(express.json())
// app.use(cors())


const {home, styles, button} = require("./controllers/pageCtrl.js")


app.get("/", home)
app.get("/banana", styles)
app.get("/js", button)


const port =  process.env.PORT || 4005

app.listen(port, () => console.log(`Server lightening on port ${port}`))