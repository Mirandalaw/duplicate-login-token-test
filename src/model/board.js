const db = require("../loader/db");
const logger = require("../util/logger");

module.exports = {
    // 모든 보드 검색
    getAllBoard: async () => {
        let connection;
        try {
            const query = `SELECT * FROM board`;
            connection = await db.getConnection();

            const boards = await connection.query(query);

            return boards[0];
        } catch (err) {
            logger.error("model getAllBoard Error : ", err.stack);

            return err;
        } finally {
            const releasePromise = connection ? db.releaseConnection(connection) : null;
            if (releasePromise) {
                releasePromise.then(() => {
                    console.log('Connection released sucssessfully');
                }).catch((error) => {
                    console.error("Error releasing connection: ", error);
                })
            }
        }
    },
}