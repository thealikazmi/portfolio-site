import Aboutus from "./Aboutus";
import Home from "./home";
import { Route } from "react-router-dom";
export default function connections() {
 return (
   <>
        <Home/>
     <Aboutus />
     {/* <Route path="/" element={<Home/>}/> */}
   </>
 );}