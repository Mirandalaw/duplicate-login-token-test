import mysql from "mysql2";
import { mysqlConfig } from "../config/config";

const connection = {
    mysqlConfig,
    connectionLimit: 30
};

export default mysql.createPool(connection);
