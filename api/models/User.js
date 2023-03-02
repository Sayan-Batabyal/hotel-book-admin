import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        reuquired:true
    },
    endDate:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})

export default mongoose.model("User",UserSchema)