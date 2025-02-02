const Header = () => {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Others</li>
      </ul>
      <h1>{new Date().getTime()}</h1>
      <h1 className="rafik"></h1>
      <button onClick={() => alert('hi')}> Submit </button>
      <h1 style={{color: 'red'}}>Inline CSS</h1>
    </div>
  );
};

export default Header;
