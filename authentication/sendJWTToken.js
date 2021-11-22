const jwt = require('jsonwebtoken')

exports.sendToken = (email, role) => {
    const token = jwt.sign({ email: email, role: role },
        process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE })
    return { token }
}