const path = require("path");



module.exports = function (app) {
app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
    res.send("I'm working")
});
}
app.put("/api/workouts/:id", (req, res) => {
    
  let ongoingWorkoutId = req.params.id;
  console.log(ongoingWorkoutId);

  let newExercise = req.body;
  console.log(newExercise);

  db.Workout.findOneAndUpdate({ _id: ongoingWorkoutId }, { $push: { exercises: newExercise } }, { new: true }).then((update) => {
    res.json(update);
  });
});


