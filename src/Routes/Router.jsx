import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Signup&Login/Login";
import Signup from "../Pages/Signup&Login/Signup";
import ResetPassword from "../Pages/Signup&Login/ResetPassword";

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset" element={<ResetPassword />} />
            </Routes>
        </BrowserRouter>
    )
}