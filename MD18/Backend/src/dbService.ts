import mysql from 'mysql2'

const db = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "game",
    port: 3306,
}).promise()

export const getScores = (async () => {
    const [rows] = await db.query(`
        SELECT *
        FROM score
    `);

    return rows;
});

export const addScores = (async (name, score) => {
    const [rows] = await db.query(`
        INSERT INTO score
        (name, score)
        VALUES(?, ?)
    `, [name, score]);
});
