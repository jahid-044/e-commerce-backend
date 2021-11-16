import { users } from '../../db/dataBaseConnector.js'

export default async function createUser(info,context){

    try {
        console.log(info)
        const newUser = new users({
            email:info.email,
            password:info.password,
            userRole:info.userRole
        })
        newUser.save();
        return newUser._id;
        
    } catch (error) {
        return false;
    }
    
}