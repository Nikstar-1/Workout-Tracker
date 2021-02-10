const path = require("path");
const express = require("express");
const app = express();

const Workout = require('../models/workout.js');

module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
app.put("/api/workouts/:id", (req, res) => {
  let ongoingWorkoutId = req.params.id;
  console.log(ongoingWorkoutId);

  let newExercise = req.body;
  console.log(newExercise);

  db.Workout.findOneAndUpdate({ _id: ongoingWorkoutId }, { $push: { exercises: newExercise } }, { new: true }).then((update) => {
    res.json(update);
  });
});

app.post("/api/workouts", (req, res) => {
  db.Workout.create({}).then((newWorkout) => {
    res.json(newWorkout);
  });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.json(err);
    });
});
