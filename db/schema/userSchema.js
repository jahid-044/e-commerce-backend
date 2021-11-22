import { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export const userSchema = new Schema({

   email:{
       type: String,
       lowercase: true,
       required: true,
       unique:true
   },
   password:{
       type: String,
       select: false
   },
   
   userRole:{
       type: String,
       enum: ['SHOPOWNER','CUSTOMER']
   }

});

userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password,7);
    next();
});

userSchema.methods.matchPasswords = async(givenPassword, actualPassword) => {
    return await bcrypt.compare(givenPassword,actualPassword);
}