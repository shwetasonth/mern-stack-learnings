const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const listingSchema=new Schema({
  title:{type:String,
    required:true,
  },
  description:{type:String},
  image:{type:String,
    default:"https://images.unsplash.com/photo-1786469777605-ed9b0437825d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3Ddefault-link",
    set:(v)=>v===""?"https://images.unsplash.com/photo-1786469777605-ed9b0437825d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3Ddefault-link":v,
  },
  price:{type:Number},
  location:{type:String},
  country:{type:String},
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;