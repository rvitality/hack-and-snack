import express from "express"
import * as conn from "../controllers/conn.controller.js"

export const router = express.Router()

router.post('/api/conn/', conn.createConn)
router.get('/api/conn/:user_id', conn.getConnByUserId)
router.delete('/api/conn/:user_id/:liked_id', conn.deleteConnByIds)