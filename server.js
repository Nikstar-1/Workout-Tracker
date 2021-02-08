const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');


require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

//Uncomment out below after the routes have been set up
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/Workout-Tracker",
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


  