const route = require('express').Router()
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

route.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body.data)
        await user.save()

        res.send({
            message: 'user created'
        })
    } catch (e) {
        res.status(500).send({ error: e })
    }
})

route.post('/signin', async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email })

        if (!user) {
            throw new Error()
        }

        const passwordCheck = await bcrypt.compare(req.body.password, user.password)

        if(!passwordCheck) {
            throw new Error()
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET)

        res.send({
            token
        })

    } catch (e) {
        res.status(500).send({ error: e })
    }
})

module.exports = route