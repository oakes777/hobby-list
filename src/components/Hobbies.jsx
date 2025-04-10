//import Hobby to tell Hobbies our Hobby display format
import Hobby from "./Hobby.jsx";
//define Hobbies function, pulling hobbies from Hobby and
//renders the map values from hobby's index values
function Hobbies({ hobbies }) {
  return (
    <div>
      {hobbies.map((hobby, index) => (
        <Hobby key={index} hobby={hobby} />
      ))}
    </div>
  );
}
//export for use with App.jsx
export default Hobbies;
