import mongoose from 'mongoose';
const buyerSchema= new mongoose.Schema(
    {
        username:{
            type : String,
            reqquired : true,
        },
        email:{
            type:String,
            required: true,
            unique: true,
        },
        password:{
            type:String,
            required: true,
            minlength: 6,
        },
        age:{
            type:Number,
            required : true,
        },
        region:{
            type: String,

            required: true,
        }
    },{timestamps: true}
)

const Buyer=mongoose.model("Seller",buyerSchema);
export default Buyer;