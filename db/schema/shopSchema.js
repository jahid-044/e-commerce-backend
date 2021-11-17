import { Schema } from "mongoose";

export const shopSchema = new Schema({
    shopId:{
        type: Schema.Types.ObjectId,
        ref: "user",
        required:true   
     },
    shopName:{
        type: String
    },
    ownerName:{
        type: String
    },
    contact:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    tinNo:{
        type: String,
        unique: true
    }

});