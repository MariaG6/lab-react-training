export default function Random({ min, max }) {
  return (
    <div className="container">
      <p>
        Random value between {min} and {max} =>
        {Math.floor(Math.random() * (max - min) + min)}
      </p>
    </div>
  );
}
