import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema=new mongoose.Schema({
    type:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    unavailaibleDates:{
        type:[String],
        reuired:true
    },
    amount:{
        type:Number,
        required:true
    }
})

export default mongoose.model("Rooms",roomSchema)