const mongoose=require('mongoose');

const Course=new mongoose.model('courses',
//basically we create a class which contain schema po mongoose
//mongoose ky sarey functions promise return krty hen

new mongoose.Schema({
    courseName:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    courseCode:{
        type:String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    creditHours:{
        type:Number,
        required: true,
        minlength: 3,
        maxlength: 15
        
    }
}))

exports.Course=Course;