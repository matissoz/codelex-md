import mysql from 'mysql2'

const db = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "123456",
    database: "game",
    port: 3306,
}).promise()

export const getScores = (async () => {
    const [rows] = await db.query(`
        SELECT *
        FROM gamescore
    `);

    return rows;
});

export const addScores = (async (name, score) => {
    const [rows] = await db.query(`
        INSERT INTO gamescore
        (name, score)
        VALUES(?, ?)
    `, [name, score]);
});
