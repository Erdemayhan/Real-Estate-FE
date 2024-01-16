import "./App.css";
import getUsers from "./services/getUsers";
import useAPI from "./effects/useAPI";
import Header from "./components/header/Header.jsx";
import NavBar from "./components/navBar/Navbar.jsx";
import Features from "./components/features/Features.jsx";
import PropertyTypes from "./components/property-types/PropertyTypes.jsx"
import SearchBar from "./components/searchBar/SearchBar.jsx";

function App() {
  //3-4 params alir (loading, error, response)
  const [loading, error, response] = useAPI(() => getUsers());
  //error ve loading handling
  if (error) {
    return <div>Error...</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }
  //postmandeki beklediginiz dataya gore distruct ediniz
  const { users } = response;
  // debug
  console.log(response, "response");
  return (
    <div className="App">
      
      <section>
        <NavBar />
      </section>
  
      <section className="main">
      <Header />
      <SearchBar/>
      </section> 
  
      <main>
        <Features />
        <PropertyTypes />
      </main>
      {/*render text above features titled our services, adjust css for screen ratios, add scroll wheel with options from database, and state to the searchbar*/}
      
      <div>
        {users.map((user) => {
          return (
            <div>
              <p>
                {user.firstName} {user.lastName}
              </p>

              <p>{user.email}</p>
              <p>{user.phoneNumber}</p>
            </div>
          );
        })}
      </div>
   
    </div>
  );
}

export default App;
