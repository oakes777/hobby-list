//import React and Hobbies
import React from "react";
import Hobbies from "./components/Hobbies.jsx";
//function App contains data array and sets up template for our HTML/webpage
function App() {
  //our data array
  const hobbyList = [
    { name: "Cooking", description: "Plant-based recipes." },
    {
      name: "Photography",
      description: "Composition for amateur photographers.",
    },
    { name: "Philosophy", description: "Post-modern relativism for realists." },
  ];
  //our return sets up the HTML/webpage template
  return (
    <div>
      <h1>My Hobbies</h1>
      <Hobbies hobbies={hobbyList} />
    </div>
  );
}
//export App for use with our components
export default App;
