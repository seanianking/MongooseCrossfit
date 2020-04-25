const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Build the schema that matches each of the parameters
//and keys for the seed file

const workoutScema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now
        },
        exercises: [{
            type: {
                type: String,
                trim: true,
                required: 'Enter your exercise'
            },
            name: {
                type: String,
                trim: true,
                required: 'Enter an excercise name'
            },
            duration: {
                type: Number,
                required: 'Enter an excercise duration in minutes'
            },
            weight: {
                type: Number
            },
            reps: {
                type: Number
            },
            sets: {
                type: Number
            },
            distance: {
                type: Number
            },
        }
        ]
    },
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual('totalDuration').get(function () {
    return this.excercises.reduce((total, excercise) => {
        return total = excercise.duration;
    }, 0);
});

const Workout = mongoose.model('Workout', workoutScema);

module.exports = Workout;