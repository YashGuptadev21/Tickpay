const express = require("express");
const rootRouter = require("./routes/index")
const cors = require("cors");
const morgan = require("morgan");


const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/v1",rootRouter)


app.listen(3000,()=> {
    console.log("Server connected to 3000 port")
})


