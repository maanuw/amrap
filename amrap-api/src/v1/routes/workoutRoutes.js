const { response } = require("express");
const express = require("express");
const workoutController = require("../../controllers/workoutController");
const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workoutId", workoutController.updateWorkout);

router.delete("/:workout", workoutController.deleteWorkout);

module.exports =router;