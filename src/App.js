import React, { useEffect, useState } from "react";
import "./App.scss";
import Users from "./Users/Users";

function App() {

  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  
  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Mistake when fetching users");
      }).finally(() => setLoading(false));
  }, []);
const onChangeSearchValue =(event)=> {
  setSearchValue(event.target.value.toLowerCase())
}
  return (
    <div className="App">
      <Users items={users} isLoading={isLoading} onChangeSearchValue={onChangeSearchValue} searchValue={searchValue}/>
      {/* <Success/> */}
    </div>
  );
}

export default App;
