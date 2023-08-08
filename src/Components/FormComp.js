import React, { useState } from "react";

function FormComp() {
  const [useName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(useName && password) {
        setShow(true);

    }
    // setUserName("");
    // setPassword("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={useName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">
          Submit
        </button>
        <br />
        {show ? useName  : null}
      </form>
    </div>
  );
}

export default FormComp;
