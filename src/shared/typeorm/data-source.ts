import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    database: "./src/shared/typeorm/database.db",
    type: "sqlite",
    logging: false,
    entities: ["./src/modules/**/entity/*.ts"],
    migrations: ["./src/shared/typeorm/migrations/*.ts"],
    migrationsTableName: "migrations",
    subscribers: [],
})