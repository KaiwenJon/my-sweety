import { Router } from 'express';
import bcrypt from 'bcrypt'
import User from '../../models/User.js';
import jwt from 'jsonwebtoken'
const JWT_SECRET = "1651w64f5wefwgrw$%^&g89wg913245%^&*("

const router = Router()

router.post('/register',async (req, res)=>{
    try {
        const {username, password:plainTextPwd} = req.body
        const existing = await User.findOne({username:username});
        if(existing) {
          res.json({
            message: `User ${username} already exists!`,
            success: false
          })
        }
        else{
          console.log("New Guy!")
          const hashPwd = await bcrypt.hash(plainTextPwd, 10)
          const newUser = await new User({username:username, password:hashPwd})
          console.log("Created new user.", newUser);
          newUser.save();
          res.json({
            message: `${username} sign up successfully!`,
            success:true
          })
        }
      } catch (e) {
        console.log(e)
        res.json({ message: 'Something went wrong...' });
      }
})

router.post('/login',async (req, res)=>{
  try {
      const {username, password} = req.body
      const user = await User.findOne({username:username}).lean();
      console.log(user)
      if(!user) {
        res.json({
          message: `User ${username} does not exist!`,
          success: false
        })
      }
      else{
        console.log("Welcome back!")
        if(await bcrypt.compare(password, user.password)){

          const token = jwt.sign({
            id: user._id,
            username: user.username
          }, JWT_SECRET)
          
          res.json({
            message: `${username} sign in successfully!`,
            success:true,
            token: token
          })
        }
        else{
          res.json({
            message: `Hi! ${username}! Incorrect password!`,
            success:false
          })
        }
      }
    } catch (e) {
      console.log(e)
      res.json({ message: 'Something went wrong...' });
    }
})
export default router