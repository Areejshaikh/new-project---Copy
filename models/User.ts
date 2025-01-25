import {model,models,Schema} from 'mongoose'
// const mongoose = require('mongo/ose');
const UserSchema = new Schema({
    name: { 
        type: String,
         required: true },
    email: { 
        type: String, 
        required: true, 
       },
    password: { 
        type: String, 
        required: true },
  
})

export default models.User || model('Product', UserSchema)