const mongoose = require('mongoose');
  PetSchema = new mongoose.Schema({
        name : {
                 type : String,
              require : [true, 'Pet needs a name'],
              unique : [true, 'Pet name is already in use'],
            minlength : [3, 'Pet name must be atleast 3 characters long']
        },
        type : {
             type : String,
          require : [true, 'Pet needs to have a type'],
        minlength : [3, 'Pet type must be atleast 3 characters long']
      },
      description : {
               type : String,
            require : [true, 'Pet needs to have a description'],
          minlength : [3, 'Pet description must be atleast 10 characters long']
      },
      skill1 : String,
      skill2 : String,
      skill3 : String,
       likes : Number,
    }, { timestamps : true });

    module.exports.Pet = mongoose.model('Pet', PetSchema);