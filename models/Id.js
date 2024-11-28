import mongoose, { Schema } from "mongoose";

const Id = mongoose.models.Id || mongoose.model("Id", new Schema(
    {

        email: {type:String , required:true},
        password:{type:String},
  
    },
    {
        timestamps: true,
    }
))

export default Id;