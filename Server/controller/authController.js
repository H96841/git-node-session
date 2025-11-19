const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require("../Moudels/User")
const express = require('express');
const router = express.Router();

const login = async (req, res) => {
    const { username, password } = req.body
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const foundUser = await User.findOne({ username }).lean()
    if (!foundUser || !foundUser.active) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: Unauthorized })



    const userInfo = {
        _id: foundUser._id,
        name: foundUser.name,
        roles: foundUser.roles,
        username: foundUser.username,
        email: foundUser.email
    }

    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken })

    res.send("Logged In")
}


const register = async (req, res) => {
    const { username, password, name, email, phone,roles } = req.body
    if (!name || !username || !password) {
        return res.status(400).json({ message: 'All filelds are required' })
    }
if(roles && roles!="User" && roles!="Admin" ){
    return res.status(400).json({ message: 'Role is invalid' })
}

    const duplicate = await User.findOne({ username: username }).lean()
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }

    const hashedPWD = await bcrypt.hash(password, 10)
    const userObject = { name, email, username, phone, password: hashedPWD,roles}
    const user = await User.create(userObject)
    if (user) {
        return res.status(201).json({ message: `New user ${user.username} crated` })
    }
    else {
        return res.status(400).json({ message: 'Invalid user received' })
    }
}

const logOut = (req, res) => {
    window.localStorage.setItem("user", accessToken);
    res.send("You Have Been Loged Out")

}


module.exports = { login, register , logOut}