import express from "express"
import dotenv from "dotenv"
import { router as userRouter } from "./src/routes/user.route.js"
import { router as connRouter } from "./src/routes/conn.route.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(connRouter)

const port = process.env.PORT
app.listen(port, () => {
    console.log(`connected at port ${port}`)
})