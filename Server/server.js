import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import "dotenv/config.js"
import configServer from "./config/configServer.js"

const main = express()

// middleware
main.use(express.json())
main.use(express.urlencoded({ extended: true }))
main.use(cors())
main.use(cookieParser())

// config server
configServer(main)