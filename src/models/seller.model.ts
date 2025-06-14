import mongoose from 'mongoose';
const sellerSchema= new mongoose.Schema(
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
        organization:{
            type:String,
            required: true,
        },
        region:{
            type: String,

            required: true,
        }
    },{timestamps: true}
)

const Seller=mongoose.model("Seller",sellerSchema);
export default Seller;