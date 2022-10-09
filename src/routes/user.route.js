import express from "express"
import * as user from "../controllers/user.controller.js"

export const router = express.Router()

router.post('/api/users', user.createUser)
router.get('/api/users', user.getUsers)
router.get('/api/users/:email', user.getUserByEmail)
router.patch('/api/users/:user_id', user.updateUserById)