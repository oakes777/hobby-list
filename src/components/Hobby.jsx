//this component defines how a hobby will be rendered
function Hobby({ hobby: { name, description } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
//export for use with Hobbies and ultimately App.jsx
export default Hobby;
