exports.userFind = (): string => {
    let query: string;

    let head = `SELECT`;
    let body = `FROM * user WHERE 1 = 1`;
    let foot = ``;

    query += head + body;
    return query;
};
