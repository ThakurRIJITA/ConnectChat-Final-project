
import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    iss:{
        type:String
    },
    nbf:{
        type:Number
    },
    aud:{
        type:String
    },
    sub:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    email_verified:{
        type:Boolean
    },
    azp:{
        type:String
    },
    name:{
        type:String,
        required:true
    }

});
const user = mongoose.model('user',userSchema);

export default user;