const http = require('http');

const qs = require('querystring');

const routes = {
    'GET':{
        '/':(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(`<h2>STUDENT REGISTRATION FORM</h2>
            <form  method="POST">
           <div>
              First Name <input type="text" name="FisrtName: ">
           </div>
           <br>
          <div>
              Last Name <input type="text" name="LastName: ">
          </div>
          <br>
          <div>
             Gender Male<input type="radio" name="Gender: " id=""> Female <input type="radio" name="Gender: " id=""> Other <input type="radio" name="Gender: " id="">
          </div>
          <br>
          <div>
               Course <select name="MyCourse" id="">
                   <option value="Select">select..</option>
                   <option value="ADD">Android App Development</option>
                   <option value="WEB-1">Web Technology-1</option>      
                   <option value="AI">Artifical Intelligence</option>      
                   <option value="LAB AI">Lab Artifical Intelligence</option>      
                   <option value="CNDC">Computer Network</option>      
                   <option value="LAB CNDC">Lab Computer Network</option>      
                   <option value="TBW">Technical Business Writing</option>      
               </select>
          </div>
          <br>
          <div>
             City   <select name="MyCity" id="">
                  <option value="Select">select..</option>
                  <option value="KHI">Karachi</option>
                  <option value="LAH">Lahore</option>
                  <option value="ISL">Islamabad</option>
                  <option value="PES">Peshawar</option>
              </select>
          </div>
          <br>
          <div>
              Address <input type="text" name="MyAdress">
          </div>
          <br>
          <div>
              Mobile No <input type="text" name="MyNumber">
          </div>
          <br>
            <input type="Submit" value="Submit">
            <input type="reset" value="Reset">
       </form>`);
        },
        '/about':(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(`<h2>ABOUT US<h2>`);
        },
    },
    'POST':{
        '/':(req,res)=>{
            let body='';
            req.on('data', data=>{
                body+=data;
            });
            req.on('end',()=>{
                let params = qs.parse(body);
                res.writeHead(200,{'Content-type':'text/html'})
                res.end(JSON.stringify(params));
            })
        }
    },
   'NA':(req,res)=>{
       res.writeHead(404);
       res.end(`Error: Content Not Found`)
   }
    
}

const router =(req,res)=>{
    let resolveRoutes = routes[req.method][req.url];
    if(resolveRoutes!=undefined){
        resolveRoutes(req,res);
    }else{
        routes['NA'](req,res);
    }
}

http
    .createServer(router)
          .listen(3000,()=>{
              console.log(`Server is running on port 3000`);
          });