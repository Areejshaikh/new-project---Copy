const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    userId: {type:String ,required : true},
    products : [ 
        {
            Product_id: {type:String ,required:true},
            Quantity: {type:Number ,required:true},
        }
    ],
    address :{ type:String ,required : true},
    amount: {type:Number ,required:true},
    status: {type:String , defaul:'pending ', required:true},
  } ,{timestamp:true});

  export default mongoose.model('Order', OrderSchema)