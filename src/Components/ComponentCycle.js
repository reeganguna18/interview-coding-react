import React, { useEffect, useState } from 'react'

function ComponentCycle() {
    const [count, setCount] = useState(0);

    // componentDidMount: Runs once after the initial render
    useEffect(() => {
      console.log('Component mounted');
      return () => {
        console.log('Component unmounted');
      };
    }, []);
  
    // componentDidUpdate: Runs whenever 'count' state changes
    useEffect(() => {
      console.log('Count updated:', count);
    }, [count]);
  
    // componentWillUnmount: Runs before component unmounts
    useEffect(() => {
      return () => {
        console.log('Cleanup before unmount');
      };
    }, []);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h1>Component Lifecycle Example</h1>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
}

export default ComponentCycle
