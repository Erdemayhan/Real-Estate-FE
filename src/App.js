import "./App.css";
import getUsers from "./services/getUsers";
import useAPI from "./effects/useAPI";

function App() {
  //3-4 params alir (loading, error, response)
  const [loading, error, response] = useAPI(() => getUsers());
  //error ve loading hadling
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
