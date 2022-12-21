import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NotFound from "./components/NotFound";
import Vehicles from "./components/Vehicles";
import Vehicle from "./components/Vehicle";
import Add from "./components/Add";
import { getVehiclesData } from "./services/vehicles.service";

function App() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    let mounted = true;

    getVehiclesData().then((records) => {
      if (mounted) {
        setVehicles(records);
      }
    });

    return () => (mounted = false);
  }, []);

  return (
    <div className="App">
      <div className="p-5">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Vehicles vehicles={vehicles} />} />
            <Route path="/vehicles/:id" element={<Vehicle />} />
            <Route path="/vehicles/add" element={<Add />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
