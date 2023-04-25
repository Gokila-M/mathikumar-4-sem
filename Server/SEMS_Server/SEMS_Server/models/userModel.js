import mongoose from "mongoose";

const user =  new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    mobileNo:{
        type:Number,
        required: true,
    },
    password:{
        type:String,
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isBlock:{
        type:Boolean,
        default:false
    },
    isOwner:{
        type:Boolean,
        default:false
    },
    roleId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Role',
    }, 
},  {
    timestamps: true
}
)



const User=mongoose.model('User',user)
export default User;