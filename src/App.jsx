import React from "react";
import Hobbies from "./components/Hobbies.jsx";

function App() {
  const hobbyList = [
    { name: "Cooking", description: "Plant-based recipes." },
    {
      name: "Photography",
      description: "Composition for amateur photographers.",
    },
    { name: "Philosophy", description: "Post-modern relativism for realists." },
  ];

  return (
    <div>
      <h1>My Hobbies</h1>
      <Hobbies hobbies={hobbyList} />
    </div>
  );
}

export default App;
