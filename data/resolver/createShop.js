import { shops } from '../../db/dataBaseConnector.js'

export default async function createShop(user_id,info,context){

    try {
        const newShop = new shops({
            shopId:user_id,
            shopName:info.shopName,
            ownerName:info.ownerName,
            contact:info.contact,
            address:info.address,
            tinNo:info.tinNo
        })
        newShop.save();
        return true;
        
    } catch (error) {
        return false;
    }
    
}