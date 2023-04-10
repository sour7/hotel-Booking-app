import express from "express";
import { createHotel, deletehotel, getaHotel, getAllHotel, updatedHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();

router.post("/",verifyAdmin, createHotel)

// update hotel
router.put("/:id",verifyAdmin, updatedHotel)

// delete a hotel
router.delete("/:id",verifyAdmin, deletehotel)
//    get a hotel
  router.get("/:id",getaHotel)

    // get all hotel
    router.get("/", getAllHotel)












export default router