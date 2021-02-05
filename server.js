const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan')
require('dotenv').config()

//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);
const PORT = process.env.PORT || 3000;

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