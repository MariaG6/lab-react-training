function BoxColor({r,g,b}) {
  const colorStyle = {
    backgroundColor: `rgb(${r},${g},${b})`,
  }
  return (
    <div className="container box" style={colorStyle}>
      <p>rgb({r},{g},{b})</p>
      <p></p>
    </div>
  )
}

export default BoxColor