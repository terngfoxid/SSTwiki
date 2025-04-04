import "reflect-metadata";
import { DataSource } from "typeorm";
import { GGenWeapon } from "./src/model/ggen-weapon";
import { GGenUnit } from "./src/model/ggen-unit";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "database.sqlite",
  synchronize: true,
    logging: true,
    entities: [GGenWeapon,GGenUnit],
    migrations: ["src/migration/*.ts"],
    subscribers: ["src/subscriber/*.ts"]
});

export async function initDB() {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource;
}
