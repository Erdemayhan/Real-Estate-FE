import "./App.css";
import getUsers from "./services/getUsers";
import useAPI from "./effects/useAPI";

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

  if (!users || users.length === 0) {
    return <div>No users found</div>;
  }

  return (
    <div className="App">
      <div>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <p>{user.id}</p>
              <p>{user.username}</p>

              <p>{user.email}</p>
              <p>{user.password}</p>
              <p>{user.userTypeId}</p>
              <p>{user.createdAt}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
