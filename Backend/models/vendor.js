const mongoose=require('mongoose')
const { Schema } = mongoose

const vendorSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  
    vendorName: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})
module.exports=mongoose.model("vendor",vendorSchema)
