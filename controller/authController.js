import User from "../Models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

export const signUp = async (req, res) => {


    try {
        const { email, password } = req.body
        const userInDb = await User.findOne({ email })

        if (userInDb) {
            return res.json({ success: false, error: "Email registrado" })
        }

        const passwordHash = bcrypt.hashSync(password, 10)

        const newObj = { ...req.body }
        newObj.password = passwordHash

        const newUser = await User.create(newObj)

        const userResponse = { email: userInDb.email, img: userInDb.img, name: userInDb.name, id: userInDb._id}

        const token = jwt.sign({ name: userInDb.name }, "keykey321")

        return res.status(201).json({ success: true, userResponse, token: token })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body
        const userInDb = await User.findOne({ email })

        if (!userInDb) {
            return res.json({ success: false, error: "Email incorrecto" })
        }
        const validPassword = bcrypt.compareSync(password, userInDb.password)

        if (!validPassword) {
            return res.json({ success: false, error: "Contraseña incorrecto" })
        }

        const userResponse = { email: userInDb.email, img: userInDb.img, name: userInDb.name, id: userInDb._id }
        const token = jwt.sign({ name: userInDb.name }, "keykey321")

        return res.status(200).json({ success: true, user: userResponse, token: token })
    } catch (error) {
        res.json({ success: false, error: error })
    }
}

