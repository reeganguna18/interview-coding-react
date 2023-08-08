import React, { useState } from "react";
import PropsState from "./PropsState";

function CreateComp() {
  const [count, setCount] = useState(0);
  return (
    <div>
      Hello World!
      <div>
        <h3>Props states</h3>
        <div>
          <PropsState state={count} setState={setCount} />
        </div>
      </div>
    </div>
  );
}

export default CreateComp;
