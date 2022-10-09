import * as db from "../db/conn.db.js"

export const createConn = async (req, res) => {
    try {
        await db.createConn(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getConnByUserId = async (req, res) => {
    try {
        const { user_id } = req.params
        const conn = await db.getConnByUserId(user_id)
        res.status(200).send(conn)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const deleteConnByIds = async (req, res) => {
    try {
        const { user_id, liked_id } = req.params
        await db.deleteConnByIds(user_id, liked_id)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}