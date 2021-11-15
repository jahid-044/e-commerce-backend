import  {users, products,shops} from '../../db/dataBaseConnector.js'
 const sendJWTToken = require('./../../authentication/sendJWTToken')
 const isAuthenticated = require('./../../authentication/isAuthenticated')
 const { UserInputError, ValidationError, ForbiddenError } = require('apollo-server-hapi')

export default async function SignIn(signInInput) {
    const email = signInInput.email;
    const password = signInInput.password;
    const user = await users.findOne({ email }).select('password')
    const role = await users.findOne({ email }).select('userRole')
    if (!user) throw new UserInputError('Invalid email!')
    else {
        if (await user.matchPasswords(password, user.password)) {
            const { token } = sendJWTToken.sendToken(email, role.userRole)
            return { JWT: token, email: email, userRole: role.userRole }
        }
        else {
            throw new UserInputError('Wrong Password')
        }
    }
}