const express =require('express');
const router=express.Router();
const {Course}=require ('../models/course');


//Add data in to database
router.post('/',async(req,res)=>{
    try{let course=new Course({
        //three fields create hogae
        courseName:req.body.courseName,
        courseCode:req.body.courseCode,
        creditHour:req.body.creditHour
    })

    const result= await course.save();
    res.status(200).send({result: "Record Added Successfully"});
    
    }
    catch(ex){
        let errors=[];
        for(field in ex.errors)
        errors.push(ex.errors[field].message)
        res.status(400).send(errors);

    }
})


// will display data 
router.get('/',async(req,res)=>{
    try{let courses= await Course.find();
    res.status(200).send(courses);
    }
    catch(ex){
res.status(400).send({error: ex.message});
    }
})

//Get Course Details by id by name
router.get('/:name',async(req,res)=>{
    /*let courses= await Course.findById(req.params.id);*/
    try{let courses= await Course.findOne({courseName:req.params.name});
        if(!courses) res.status(400).send({"message  ":"Course not Found!"});
        
    res.status(200).send(courses);
    }
    catch(ex){
        res.status(400).send({error: ex.message});

    }
})

router.put('/:id',async(req,res)=>{
    /*update by id*/

    try{let courses= await Course.findById(req.params.id);
        if(!courses) res.status(400).send({"message  ":"Course not Found!"});
        
    res.status(200).send(courses);
    courses.courseName=req.body.courseName,
    courses.courseCode=req.body.courseCode,
    courses.creditHour=req.body.creditHour
    
    const result= await courses.save();
    res.status(200).send(result);
    }
    catch(ex){
        res.status(400).send({error: ex.message});

    }
})




router.delete('/:id',async(req,res)=>{
    /*delete by id*/
  //  let courses= await Course.findOne({courseName:req.params.name});
    try{let courses= await Course.findById(req.params.id);
        if(!courses) res.status(400).send({"message  ":"Course not Found!"});
//let res=await Course.deleteOne({Coursename: req.params.name})
    let result= await Course.findByIdAndRemove(req.params.id);   
     res.status(200).send(result);
    }
    catch(ex){
        res.status(400).send({error: ex.message});

    }
})

module.exports = router;



