const Header = () => {
  function handleClicked() {
    alert("You clicked me!");
  }

  return (
    <div>
      <ul>
        <li>Home</li>
        <li>Others</li>
      </ul>
      <h1>{new Date().getTime()}</h1>
      <h1 className="rafik"></h1>
      <button onClick={() => alert("hi")}> Submit </button>
      <h1 style={{ color: "red" }}>Inline CSS</h1>

      <button onClick={handleClicked}>Header global Button</button>
      <button
        onClick={function () {
          alert("Hey inner btn clicked");
        }}
      >
        Header Inner Button
      </button>
      <button
        onClick={() => {
          alert("hey header arrow btn clicked");
        }}
      >
        Header Arrow Button
      </button>
      <button
        onClick={function handleClicked() {
          alert("hey header inner function btn clicked");
        }}
      >
        Header Inner Func Button
      </button>

      {/* <button onClick={alert('load submit click')}>
        Load Submit
      </button> */}
    </div>
  );
};

export default Header;
