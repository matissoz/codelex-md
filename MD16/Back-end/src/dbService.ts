import mysql from 'mysql2'

const db = mysql.createPool({
    connectionLimit: 10,
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database: "blog",
    port: 3306,
}).promise()

export const getPosts = (async () => {
    const [rows] = await db.query(`
        SELECT *
        FROM Posts
    `);

    return rows;
});

export const getPost = (async (id: string) => {
    const [rows] = await db.query(`
        SELECT *
        FROM Posts
        WHERE id = ?
    `, [id]);

    return rows;
});

export const getPostComments = (async (postId: string) => {
    const [rows] = await db.query(`
        SELECT *
        FROM Comments
        WHERE postId =?
    `, [postId]);

    return rows;
});

export const addPost = (async (title, text, img, imgId) => {
    const [rows] = await db.query(`
        INSERT INTO Posts
        (title, text, img, imgId)
        VALUES(?, ?, ?, ?)
    `, [title, text, img, imgId]);
});

export const addComment = (async (author, text, postId) => {
    const [rows] = await db.query(`
        INSERT INTO Comments
        (author, text, postId)
        VALUES(?, ?, ?)
    `, [author, text, postId]);
});

export const editPost = (async (id, title, text, img, imgId) => {
    const [rows] = await db.query(`
        UPDATE Posts
        SET title =?, text=?, img =?, imgId=?
        WHERE id =?
    `, [title, text, img, imgId, id]);
});

export const deleteAllAssociatedComments = (async (postId) => {
    const [rows] = await db.query(`
    DELETE FROM Comments
    WHERE postId =?
    `, [postId]);
});

export const deletePost = (async (id) => {

    deleteAllAssociatedComments(id);
    const [rows] = await db.query(`
    DELETE FROM Posts
    WHERE id =?
    `, [id]);
});

export const deleteComment = (async (id) => {
    const [rows] = await db.query(`
    DELETE FROM Comments
    WHERE id =?
    `, [id]);
});


export const addImage = (async (name, imgId) => {
    const [rows] = await db.query(`
        INSERT INTO Images
        (name, imgId)
        VALUES(?, ?)
    `, [name, imgId]);
});
