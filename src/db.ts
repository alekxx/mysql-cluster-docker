import mysql from "mysql2/promise";
import { config } from "./dbConfig";

const queryDb = async (sql: string) => {
  const connection = await mysql.createConnection(config);
  const [results] = await connection.execute(sql);

  return results;
};

const petsOwnersQuery =
  "SELECT * FROM free.people ppl JOIN free.pets p ON ppl.id=p.person_id;";

export const getPetsOwners = async () => await queryDb(petsOwnersQuery);
