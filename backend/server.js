import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"
import axios from "axios"

const PORT = process.env.PORT || 4000
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api/user",userRouter)
app.use("/api/image",imageRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

const startServer = async () => {
    await connectDB()
    app.listen(PORT, () => console.log(`Server Running in PORT ${PORT}`))
}

startServer()
