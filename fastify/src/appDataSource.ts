import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";


export const appDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT ? process.env.DB_PORT : "5432"),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true, // Note: set to false in production
    logging: false,
    entities: [User],
});
