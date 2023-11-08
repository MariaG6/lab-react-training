function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  const formattedBirth = new Date(birth).toLocaleDateString()
  return (
    <div className="container">
      <img src={picture} alt={firstName} />
      <div className="box-info">
        <div className="info-item">
          <h3>First Name:</h3>
          <p>{firstName}</p>
        </div>
        <div className="info-item">
          <h3>Last Name:</h3>
          <p>{lastName}</p>
        </div>
        <div className="info-item">
          <h3>Gender: </h3>
          <p>{gender}</p>
        </div>
        <div className="info-item">
          <h3>Height: </h3>
          <p>{height / 100}m</p>
        </div>
        <div className="info-item">
          <h3>Birth:</h3>
          <p>{formattedBirth}</p>
        </div>
      </div>
    </div>
  );
}

export default IdCard;
