const express =require('express');
const config = require('config');
const courses=require('./routes/courses');
const mongoose=require('mongoose');
const app=express();


/**Environment Setup */
/**by default environment development hota hy agr ap change krna chahtay hen to environment variable ko set krwana hoga */
console.log(`Environment ${process.env.NODE_ENV}`);
console.log(`Connecting to DB: ${config.connectionstring}`);

mongoose.connect(config.connectionstring)
    .then(()=>{console.log("Successfully connect to the University System")})
    .catch((err)=>{console.error("Connection Failed",err)});

    app.use(express.json());

app.use('/api/courses/',courses);


    const port=process.env.PORT || 3000
    app.listen(port,()=>console.log(`Listening to Port ${port}`));


 