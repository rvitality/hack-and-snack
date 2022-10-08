import { query } from "./config.js"

const now = new Date().toISOString().slice(0, 19).split('T').join(' ')

export const createUser = async (payload) => {
    const { email, first_name, last_name, location, fave_food, second_fave_food, third_fave_food } = payload
    console.log(payload)
    const sql = "insert into users (email, first_name, last_name, location, fave_food, second_fave_food, third_fave_food, created_at, updated_at) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)"
    const params = [email, first_name, last_name, location, fave_food, second_fave_food, third_fave_food, now, now]
    await query(sql, params)
    const user = await getUserByEmail(email)
    return user
}

export const getUserByEmail = async (email) => {
    const sql = "select * from users where email = $1"
    const params = [email]
    const res = await query(sql, params)
    return res
}

export const updateUserById = async (payload) => {
    const { id, email, first_name, last_name, location, fave_food, second_fave_food, third_fave_food } = payload
    const queries = []
    if (email) {
        const sql = "update users where id = $1 set email = $2, updated_at = $3"
        const params = [id, email, now]
        queries.push({ sql, params })
    }
    if (first_name) {
        const sql = "update users where id = $1 set first_name = $2, updated_at = $3"
        const params = [id, first_name, now]
        queries.push({ sql, params })
    }
    if (last_name) {
        const sql = "update users where id = $1 set last_name = $2, updated_at = $3"
        const params = [id, last_name, now]
        queries.push({ sql, params })
    }
    if (location) {
        const sql = "update users where id = $1 set location = $2, updated_at = $3"
        const params = [id, location, now]
        queries.push({ sql, params })
    }
    if (fave_food) {
        const sql = "update users where id = $1 set fave_food = $2, updated_at = $3"
        const params = [id, fave_food, now]
        queries.push({ sql, params })
    }
    if (second_fave_food) {
        const sql = "update users where id = $1 set second_fave_food = $2, updated_at = $3"
        const params = [id, second_fave_food, now]
        queries.push({ sql, params })
    }
    if (third_fave_food) {
        const sql = "update users where id = $1 set third_fave_food = $2, updated_at = $3"
        const params = [id, third_fave_food, now]
        queries.push({ sql, params })
    }
    if (queries.lengt !== 0) {
        for (const queryObj of queries) {
            await query(queryObj.sql, queryObj.params)
        }
    }
}

export const getUsers = async (payload) => {
    const { user_id, limit, offset } = payload
    const sql = "selec * from users where user_id != $1 limit $2 offset $3"
    const params = [user_id, limit, offset]
    const users = await query(sql, params)
    return users
}