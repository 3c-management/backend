import { DataSource } from "typeorm";

export const DatabaseSource:DataSource = new DataSource({
  type: "mysql",
  host: "localhost", 
  port: 3306,
  username: "root", 
  password: "qwer1234", 
  database: "3c_management", 
  synchronize: true, 
  logging: true,
  entities: [],
});