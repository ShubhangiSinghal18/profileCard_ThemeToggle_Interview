import { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const [user, setuser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      await axios
        .get("https://randomuser.me/api/")
        .then((response) => {
          setuser(response.data.results[0]);
          console.log(response.data.results[0]);
        })
        .catch((e) => console.log(e));
    };
    fetchUser();
  }, []);

  return (
    <div className="container">
      {user ? <ProfileCard user={user} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
