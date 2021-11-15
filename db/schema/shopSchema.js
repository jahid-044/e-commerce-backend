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
        type: Number,
        required: true
    },
    adress:{
        type: String
    },
    tinNo:{
        type: Number,
        unique: true
    }

});