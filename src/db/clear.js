import { query } from "./config.js"

const sql = "truncate users, connections cascade;"

await query(sql)