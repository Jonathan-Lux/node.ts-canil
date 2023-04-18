import dotenv from "dotenv"
import express from "express"
import path from "path"
import mustache from "mustache-express"
import router from "./routes"

dotenv.config()

const server = express()

server.set("view engine", "mustache")
server.set("views", path.join(__dirname, "views"))
server.engine("mustache", mustache())

server.use(express.static(path.join(__dirname, "../public")))

server.use(router)



server.listen(process.env.PORT)