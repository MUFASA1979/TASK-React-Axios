import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PetDetail from "./components/PetDetail";
import PetList from "./components/PetList";
import { useState } from "react";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />

        <Route path="/pets" Component={PetList} />

        <Route path="/pets/:petId" Component={PetDetail} />
        {/* <Route path="*" Component={"Not Found"} /> */}
      </Routes>
    </div>
  );
}

export default App;
