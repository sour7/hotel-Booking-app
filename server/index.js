import express, { json }  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"

const app= express();
dotenv.config()


const PORT=process.env.PORT

  const connect=async()=>{
   try {
   await mongoose.connect(process.env.MONGO_URL)
    console.log("connected to db")
   } catch (error) {
    console.log(error.codeName)
   }
  }

  mongoose.connection.on("disconnected", ()=>{
    console.log("mongo db disconnected")
  })

  mongoose.connection.on("connected", ()=>{
    console.log("mongo db connected")
  })


app.get("/", (req, res)=>{
    res.send("hello from apis")
})

// middleware
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)
app.use("/api/users", usersRoute)


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen(PORT, ()=>{
    connect()
    console.log("app is listening on port:"+PORT)
})