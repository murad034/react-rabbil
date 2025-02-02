const LoginStatusBtn = (status) => {
  if (status) {
    return <button>Logout Btn</button>;
  } else {
    return <button>Login Btn</button>;
  }
};

const ContactForm = () => {
  let marks = 24;
  let city = ["Dhaka", "London", "Delhi", "Kolkata"];
  const status = true;

  return (
    <div>
      <input />
      <button>Submit</button>
      {marks > 80 ? <h1>Brilliant Result</h1> : <h1>Average Result</h1>}
      <div>
        {(() => {
          if (marks >= 80 && marks <= 100) {
            return <h1>A+</h1>;
          } else if (marks >= 70) {
            return <h1>A</h1>;
          } else {
            return <h1>F</h1>;
          }
        })()}
      </div>

      <ol>
        {city.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ol>

      <div>{LoginStatusBtn(status)}</div>
    </div>
  );
};

export default ContactForm;
