const express = require('express'),
         cors = require('cors'),
          app = express();

          
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

require('./server/config/mongoose.config');
require('./server/routes/pet.routes') (app);

app.listen(8000, () => {
    console.log("*+*+*+*+*+*+*+*+*+*+*+* LISTENING AT PORT 8000 *+*+*+*+*+*+*+*+*+*+*+*")
});