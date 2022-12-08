import React, { createContext, useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Axios from "axios";
import "./index.css";

export const NewContext = createContext(null);

const App = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState(true);

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password.length <= 8) {
      setError("Atleast 8 characters");
    } else {
      setError("");
      setData({
        name: "",
        password: "",
      });
      Axios.post("https://jsonplaceholder.typicode.com/posts", {
        name: data.name,
        password: data.password,
      }).then((res) => {
        console.log(res.data);
      });
    }

    localStorage.setItem("name", data.name);
    localStorage.setItem("password", data.password);
  };

  const removeItem = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
  };
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <NewContext.Provider value={{ password1, data }}>
        <Child1 />
        <Child2 />
      </NewContext.Provider>

      <div className="form-div">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </label>
          <label>
            password:
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={(e) => {
                handleOnChange(e);
              }}
            />
          </label>
          <div>{error}</div>
          <br />
          <button type="submit" value="submit">
            Login
          </button>
        </form>
        <button onClick={removeItem}>Clear Storage</button>
        <h1>{count} This is h1</h1>
        <button onClick={increment}>Add</button>
      </div>
    </>
  );
};

export default App;
