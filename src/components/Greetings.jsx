function Greetings(props) {
    const {lang} = props
  return (
    <div className="container">
      <p className='greeting'>
        {lang === 'de' && <p>Hallo</p>}
        {lang === 'en' && <p>Hello</p>}
        {lang === 'es' && <p>Hola</p>}
        {lang === 'fr' && <p>Bonjour</p>}
        {props.children}
      </p>
    </div>
  );
}

export default Greetings;
