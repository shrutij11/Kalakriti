 // creating token and saving in cookie
 
 
 const sendToken = (user, statusCode, res) => {
     const token = user.getJWTToken();
     //options for cookie
     const options = {
         expires: new Date(
             Date.now() + 7*24 *60 * 1000
         ),
         httpOnly: true,
     };
     res.status(statusCode).cookie("token", token, options).json({
         sucess:true,
         user,
         token,
     });
 };
 module.exports = sendToken