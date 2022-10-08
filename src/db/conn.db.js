import { query } from "./config.js"

export const createConn = async (payload) => {
    const { user_id, liked_id } = payload
    const sql = "insert into connections (user_id, liked_id) values ($1, $2)"
    const params = [user_id, liked_id]
    await query(sql, params)
}

export const getConnByUserId = async (user_id) => {
    const sql = "select * from connections where id = $1"
    const params = [user_id]
    const res = await query(sql, params)
    return res
}

export const deleteConnByIds = async (user_id, liked_id) => {
    const sql = "delete from connections where user_id = $1 and liked_id = $2"
    const params = [user_id, liked_id]
    await query(sql, params)
}