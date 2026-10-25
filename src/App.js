import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Welcome! The page has loaded successfully.");
  }, []);

  return (
    <div>
      <h1>React Practical 14</h1>
      <h2>useEffect Hook</h2>
      <p>{message}</p>
    </div>
  );
}

export default App;
