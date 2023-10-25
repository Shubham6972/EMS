const jwt = require('jsonwebtoken')

// const authUser = async(req,res,next)=>{
//   try{
//     let token = req.headers.authorization;
//     if(token){
//       token = token.split(" ")[1];
//       let user = jwt.verify(token , process.env.SECRET_KEY);
//       console.log(user);
//       req.user = user;
//     }
//     else{
//       res.status(401).json({message:"Unauthorized"});
  
//     }
//     next();
//   }
//   catch(err){
//     console.log(err);
//   }
// }


// const authUser = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.SECRET_KEY);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ message: 'Token is invalid' });
//   }
// };

// const verifyToken = (req, res, next) => {
//   const token = req.headers['authorization'];
//   // console.log(token)
//   if (!token) {
//     return res.status(401).json({ message: 'Unauthorized' });
//   }

//   jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid token' });
//     }
//     req.user = decoded;
//     next();
//   });
// };


// const verifyToken = (req,res,next)=>{
//   try{
//     const headers = req.headers[`authorization`]
//     const token = headers.split(' ')[1];
  
//     if(!token){
//       res.status(404).json({message:"No token Found"});
//     }
//     jwt.verify(token , process.env.SECRET_KEY , (err,user)=>{
//       if(err) {
//          return res.status(400).json({message:"invalid Token"});
//       }
  
//       console.log(user.id);
//       req.id = user.id
//       // req.user = user;
//     })
//     next();
//   }
//   catch(err){
//     console.log(err);
//   }
  
// }
// module.exports = verifyToken;


// // module.exports = authUser;





