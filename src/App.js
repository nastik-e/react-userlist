import React, { useEffect, useState } from "react";
import "./App.scss";
import Success from "./Success/Success";
import Users from "./Users/Users";

function App() {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Mistake when fetching users");
      })
      .finally(() => setLoading(false));
  }, []);
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  };
  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((itemId) => itemId !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };
  const onSendInvites = () => {
    setResult(true);
  };
  const onBackBtn = () => {
    setResult(false);
  };

  return (
    <div className="App">
      {result ? (
        <Success onBackBtn={onBackBtn} count={invites.length}/>
      ) : (
        <Users
          items={users}
          isLoading={isLoading}
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          onClickInvite={onClickInvite}
          invites={invites}
          onSendInvites={onSendInvites}
        />
      )}
    </div>
  );
}

export default App;
