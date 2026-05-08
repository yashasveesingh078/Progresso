import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      
      <Navbar setShowModal={setShowModal} />

    </div>
  );
};

export default App;