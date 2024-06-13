import { AppDataSource } from "../typeorm/data-source"
import express from "express"

const app = express()
const port = 3000

app.use(express.json())

AppDataSource.initialize()
    .then()
    .catch((err) => console.log(err))

app.listen(port, () => {
    console.log("Tudo conectado com sucesso meu patrão!🏆")
    console.log(`Estamos rodando na porta: ${port}`)
})