import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import AddAProperty from "./pages/AddAProperty.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profiles from "./pages/Profiles.jsx";
import ViewProperties from "./pages/ViewProperties.jsx";
import SignIn from "./pages/SignIn.jsx";
import Register from "./pages/register.jsx";

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-properties" element={<ViewProperties />} />
          <Route path="/add-property" element={<AddAProperty />} />
          <Route path="/profile-page" element={<Profiles />} />
          <Route path="/Sign-In" element={<SignIn />} />
          <Route path="/register" element={<Register/>} />
          {/*make a component for page not found, match its path to * */}
        </Routes>

    

    </div>
  );
}

export default App;
