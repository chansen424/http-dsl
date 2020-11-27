import express = require("express")
import {
  getGreeting, 
  getNames, 
  setGreeting, 
  resetNames, 
  editName
} from './db-funtions'

const app: express.Application = express()
const PORT = process.env.PORT || 8000

app.get("/", (_, res) => res.send({data: "Welcome to a quick demo of http-dsl!"}))

app.get("/greeting", (_, res) => getGreeting().then(result => res.send(result)))

app.get("/names", (_, res) => getNames().then(result => res.send(result)))

app.post("/set-greeting", (req, res) => setGreeting(req.body.greeting).then(result => res.send(result)))

app.post("/reset-names", (_, res) => resetNames().then(result => res.send(result)))

app.post("/add-name", (req, res) => editName(req.body.name).then(result => res.send(result)))

app.post("/remove-name", (req, res) => editName(req.body.name, false).then(result => res.send(result)))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))