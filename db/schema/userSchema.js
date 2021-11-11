import { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export const userSchema = new Schema({

   email:{
       type: String,
       lowercase: true,
       required: true,
       unique:true
   },
   passward:{
       type: String,
       select: false,
       required: true
   },
   userRole:{
       type: String,
       enum: ['SHOPOWNER','CUSTOMER']
   }

});

userSchema.pre('save', async function(next){
    this.passward = await bcrypt.hash(this.passward,7);
    next();
});

userSchema.methods.matchPasswards = async(givenPassward, actualPassward) => {
    return await bcrypt.compare(givenPassward,actualPassward);
}