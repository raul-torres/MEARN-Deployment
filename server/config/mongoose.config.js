const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/petShelter', {
       useNewUrlParser : true,
    useUnifiedTopology : true,
})
        .then( () => console.log("*+*+*+*+*+*+*+*+*+*+*+* ESTABLISHED A CONNECTION TO THE DATABASE *+*+*+*+*+*+*+*+*+*+*+* "))
        .catch(err => console.log("*+*+*+*+*+*+*+*+*+*+*+* SOMETHING WENT WRONG WENT CONNECTING TO DATABASE *+*+*+*+*+*+*+*+*+*+*+* ", err));