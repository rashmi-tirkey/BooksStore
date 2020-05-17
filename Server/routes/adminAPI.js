  const   express = require('express'), 
bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const AdminRouter = express.Router();

AdminRouter.post('/adminLogin', function(req,res,next){

  if(req.body.email==="Vikash" && req.body.password==="Vikash001"){
    let token = jwt.sign({name:"Vikash" , password:"Vikash001"},'secretAdmin', {expiresIn : "60000s"});
    return res.status(200).json(token);
  }
})


AdminRouter.get('/verify',verifyToken,function(req,res,next){
  if(decodedToken.name==="Vikash" && decodedToken.password==="Vikash001"){
    res.status(200);
  }
})
var decodedToken='';


function verifyToken(req,res,next){
    let token = req.query.token;

    jwt.verify(token,'secretAdmin', function(err, tokendata){
       if(err){
            return res.status(400).json({message:' Unauthorized request'});
        }
       if(tokendata){
            decodedToken = tokendata;
            next();
      }
  })
}

module.exports = AdminRouter;
