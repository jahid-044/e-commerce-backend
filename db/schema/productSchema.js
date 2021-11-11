import { Schema } from "mongoose";


export const productSchema = new Schema({
    shopId:{
        type: Schema.Types.ObjectId,
        ref: "shop",
        required:true
    },
    productTitle:{
        type: String
    },
    details:{
        type: String
    },
    category:{
        type: String,
        enum: ["Electronics", "Cloth", "Food", "cosmetics","Others" ]
    },
    price:{
        type: Number
    },
    quantity:{
        type: Number,
        required: true
    } 
    //image
});