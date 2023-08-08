import React, { createContext, useEffect, useState } from "react";
import Counter from "./Counter";
import axios from "axios";

export const Context = createContext();

function ContextComp() {
  const [counts, setCounts] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = res.data;
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Context.Provider value={{ counts, user, setCounts }}>
        <Counter  />
      </Context.Provider>
    </div>
  );
}

export default ContextComp;
