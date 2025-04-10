function Hobby({ hobby: { name, description } }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Hobby;
