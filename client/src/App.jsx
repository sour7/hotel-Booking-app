
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Hotel from "./pages/hotel/Hotel"
import List from "./pages/list/List"
import Login from "./pages/login/Login"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Admin from "./pages/admin/Admin"
import Register from "./pages/register/Register"

import { Toaster } from 'react-hot-toast';

function App() {

 
    const { user } = useContext(AuthContext);

    console.log("first", user)
  

  return (
    <div>
   <BrowserRouter>
   <Toaster/>
   <Routes>


    {
      user?.isAdmin&&  
      <Route path="/admin" element={<Admin/>}></Route>
    }

    <Route path="/" element={<Home/>}></Route>
    <Route path="/hotels" element={<List/>}></Route>
    <Route path="/hotels/:id" element={<Hotel/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
