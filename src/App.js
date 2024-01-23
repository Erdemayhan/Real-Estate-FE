import "./App.css";
import AddAProperty from "./pages/AddAProperty.jsx";
import HomePage from "./pages/HomePage.jsx";
import Profiles from "./pages/Profiles.jsx";
import ViewProperties from "./pages/ViewProperties.jsx";

function App() {



  return (
    <div className="App">
      
      <HomePage/>
      <AddAProperty/>
      <ViewProperties/>
      <Profiles/>


    </div>
  );
}

export default App;
