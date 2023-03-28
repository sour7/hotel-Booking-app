import express from "express";
import { createHotel, deletehotel, getaHotel, getAllHotel, updatedHotel } from "../controllers/hotel.js";



const router = express.Router();

router.post("/", createHotel)

// update hotel
router.put("/:id", updatedHotel)

// delete a hotel
router.delete("/:id", deletehotel)
//    get a hotel
  router.get("/:id",getaHotel)

    // get all hotel
    router.get("/", getAllHotel)












export default router