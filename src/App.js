import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Footer from "./components/Footer";
import SeekerDashboard from "./components/SeekerDashboard";
import WatcherDashboard from "./components/WatcherDashboard";
import { TravelContext } from "./context/TravelContext";
import "./App.css";

function App() {
  const { loggedIn, userRole } = useContext(TravelContext);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {!loggedIn && <Route path="/" element={<Login />} />}
          {loggedIn && userRole === "Seeker" && (
            <>
              <Route path="/seeker" element={<SeekerDashboard />} />
              <Route path="*" element={<Navigate to="/seeker" />} />
            </>
          )}
          {loggedIn && userRole === "Watcher" && (
            <>
              <Route path="/watcher" element={<WatcherDashboard />} />
              <Route path="*" element={<Navigate to="/watcher" />} />
            </>
          )}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
