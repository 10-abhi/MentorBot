const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const userSchema = new mongoose.Schema({
    firstName: {
      type : String,
      required : true ,
      maxLength : 30
    },
    lastName : {
       type : String,
       required : true ,
       maxLength : 30  
    },
     userName : {
     type : String,
     lowercase :true,
     required : true ,
     unique : true ,
     trim : true , 
     minLength : 3,
     maxLength : 30
    },
    password: {
      type : String ,
      required : true ,
      minLength : 5
    },
   
});

const User = mongoose.model('User' , userSchema);

module.exports = {
    User,
}