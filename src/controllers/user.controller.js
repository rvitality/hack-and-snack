import * as db from "../db/user.db.js"

export const createUser = async (req, res) => {
    try {
        const user = await db.createUser(req.body)
        res.status(200).send({ user })
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const user = await db.getUserByEmail(email)
        res.status(200).send({ user })
    } catch (err) {
        res.status(500).send(err)
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await db.getUsers(req.body)
        res.status(200).send({ users })
    } catch (err) {
        res.status(500).send(err)
    }
}

export const updateUserById = async (req, res) => {
    try {
        await db.updateUserById(req.body)
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
}