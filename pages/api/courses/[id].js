import mongoose, { isValidObjectId } from "mongoose";
import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

const handle = async(req,res) =>{
connectToDB()

if (req.method === 'DELETE') {
    const {id} = req.query;
    if(isValidObjectId(id)){
       try {
         await courseModel.findOneAndDelete({_id : id})
         return res.json({message : 'course removed successfuly :)'})
       } catch (error) {
        return res.status(500).json({message : 'internal server error !!'})
       }
    }else{
        return res.status(422).json({message : 'Course Id is not valid'})
    }
} 


}

export default handle