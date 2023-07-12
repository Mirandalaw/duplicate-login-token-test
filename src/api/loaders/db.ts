import mysql from "mysql2";
import { mysqlConfig } from "../config/config";

const connection: object = {
    mysqlConfig,
    connectionLimit: 30
};

export default mysql.createPool(connection);
