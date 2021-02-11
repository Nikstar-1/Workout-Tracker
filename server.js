const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
//const apiRoutes = require("./routes/apiRoutes");

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


//app.use(apiRoutes); 

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
     "mongodb://localhost/Workout-Tracker",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );
  console.log(process.env.MONGODB_URI)

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});


  