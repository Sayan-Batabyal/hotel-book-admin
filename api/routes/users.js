import express from "express"
const router =express.Router()
import User from "../models/User.js"

//Create
router.post("/",async(req,res)=>{

    const newUser = new User(req.body) 
    try{
      const savedUser=await newUser.save()
      res.status(200).json(savedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put("/:id",async(req,res)=>{
    try{
      const updatedUser=await User.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
      )
      res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",async(req,res)=>{
    try{
      await User.findByIdAndDelete(
        req.params.id
      )
      res.status(200).json("Item Deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get

router.get("/:id",async(req,res)=>{
    try{
      const user=await User.findById(
        req.params.id
      )
      res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//GetAll
router.get("/",async(req,res)=>{
    try{
      const users=await User.find()
      res.status(200).json(users)
    }
    catch(err){
        res.status(500).json(err)
    }
})
export default router