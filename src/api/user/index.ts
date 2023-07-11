import { Router } from "express";
import db from "../loaders/db";
const userRouter = Router();

userRouter.get("/", (req, res) => {
    const sql: string = "SELECT * FROM user";
    try {
        db.getConnection((err, conn) => {
            console.log("connection_pool_suc");
            if (err) throw err;
            conn.query(sql, (err, result: string, fields) => {
                if (err) {
                    console.error("connection_pool Error" + err);
                    res.status(500).send("MSG : Internal Server Error");
                } else {
                    if (result.length === 0) {
                    }
                }
            });
        });
        res.send("hi");
    } catch (error) {}
});

export default userRouter;
