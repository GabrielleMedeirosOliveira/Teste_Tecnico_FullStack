import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/home";

function Paths() {
    return (
      <Routes>
        <Route exact path={"/"} element={<Homepage/>}/>
      </Routes>
    );
  }
  
export default Paths;