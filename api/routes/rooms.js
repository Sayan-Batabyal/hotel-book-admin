import express from "express"
const router =express.Router()
import Room from "../models/Rooms.js"

//Create
router.post("/",async(req,res)=>{

    const newRoom = new Room(req.body) 
    try{
      const savedRoom=await newRoom.save()
      res.status(200).json(savedRoom)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Update
router.put("/:id",async(req,res)=>{
    try{
      const updatedRoom=await Room.findByIdAndUpdate(
        req.params.id,
        {$set:req.body},
        {new:true}
      )
      res.status(200).json(updatedRoom)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//delete
router.delete("/:id",async(req,res)=>{
    try{
      await Room.findByIdAndDelete(
        req.params.id
      )
      res.status(200).json("Room Deleted")
    }
    catch(err){
        res.status(500).json(err)
    }
})

//Get

router.get("/:id",async(req,res)=>{
    try{
      const room=await Room.findById(
        req.params.id
      )
      res.status(200).json(room)
    }
    catch(err){
        res.status(500).json(err)
    }
})
//GetAll
router.get("/",async(req,res)=>{
    try{
      const rooms=await Room.find()
      res.status(200).json(rooms)
    }
    catch(err){
        res.status(500).json(err)
    }
})

export default router