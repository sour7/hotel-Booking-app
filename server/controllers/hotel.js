import Hotel from "../models/Hotel.js";
export const createHotel= async(req, res, next)=>{
    const newhotel= new Hotel(req.body)
    try {
        const saveHotel= await newhotel.save()
        res.status(201).json(saveHotel)
    } catch (error) {
      next(error)
    }
}

export const updatedHotel=async(req, res, next) =>{
    try {
        const updateHotel= await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updateHotel)
       } catch (error) {
       next(error)
       }
}

export const deletehotel= async(req, res, next)=>{
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("you delted a hotel")
       } catch (error) {
       next(error)
       }
}

export const getaHotel= async(req, res, next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id) 
        res.status(200).json(hotel) 
      } catch (error) {
         next(error)  
      }
}

export const getAllHotel=async(req, res, next)=>{
    try {
        const hotel = await Hotel.find() 
        res.status(200).json(hotel) 
      } catch (error) {
         next(error)  
      }
}