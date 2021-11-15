import {users, shops} from '../../db/dataBaseConnector.js'

export default async function signUp(info,context){

    try {
        console.log(info)
        const newUser = new users({
            email:info.email,
            password:info.password,
            userRole:info.userRole
        })
        newUser.id=newUser._id;
        newUser.save((err)=>{console.log(err)});
    
        // const newShop = new shops({
        //     shopName:info.shopName,
        //     ownerName:info.ownerName,
        //     contact:info.contact,
        //     adress:info.adress,
        //     tinNo:info.tinNo
        // })
        // newShop.id=newShop._id;
        // newShop.save();
        return true;
        
    } catch (error) {
        return false;
    }
    
}