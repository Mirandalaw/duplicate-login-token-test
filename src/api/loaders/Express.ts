import express from "express";
import routers from "../routers";
export default async () => {
    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/api", routers);
};
