import "milligram/dist/milligram.css";
import { useState } from "react";

const LoginStatusBtn = (status) => {
  if (status) {
    return <button>Logout Btn</button>;
  } else {
    return <button>Login Btn</button>;
  }
};

const SwitchLoginStatus = (status) => {
  switch (status) {
    case true:
      return <button>Logout Btn using Switch</button>;
    case false:
      return <button>Login Btn using Switch</button>;
    default:
      return null;
  }
};

const TernaryLoginStatus = (status) => {
  let val;
  status
    ? (val = <button>Logout Button using Ternary</button>)
    : (val = <button>Login Button using Ternary</button>);

  return val;
};

const ContactForm = () => {
  let marks = 24;
  let city = ["Dhaka", "London", "Delhi", "Kolkata"];
  const status = true;

  const submitForm = (event) => {
    event.preventDefault();
    alert("form submit btn clicked");
  };

  let [formObj, setFormObj] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "male",
  });

  const inputOnChange = (property, value) => {
    setFormObj((prevObj) => ({
      ...prevObj,
      [property]: value,
    }));

    // console.log(formObj);
  };

  const formDataSubmitState = (event) => {
    event.preventDefault();

    console.log(formObj);
    alert(JSON.stringify(formObj));
  };

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

      <h1>If conditional</h1>
      <div>{LoginStatusBtn(status)}</div>

      <h1>Switch conditional</h1>
      <div>{SwitchLoginStatus(status)}</div>

      <h1>Ternary Condiiton</h1>
      <div>{TernaryLoginStatus(status)}</div>

      <h1>Logical Conditional Rendering</h1>
      {status && (
        <button>Logout Status using logical conditional rendering</button>
      )}

      <h1>Immediately Invoked Function</h1>
      {(() => {
        if (status) {
          return <button>Logout Btn using Immediately Invoked</button>;
        } else {
          return <button>Login Btn using Immediately Invoked</button>;
        }
      })()}

      <div>
        <form onSubmit={submitForm}>
          <input placeholder="name" />
          <button type="submit">Send</button>
        </form>
      </div>

      <h1>Use State Behaviour using Form</h1>
      <div className="container">
        <form onSubmit={formDataSubmitState}>
          <input
            onChange={(e) => {
              inputOnChange("fName", e.target.value);
            }}
            value={formObj.fName}
            placeholder="First Name"
          />
          <br />
          <input
            onChange={(e) => {
              inputOnChange("lName", e.target.value);
            }}
            value={formObj.lName}
            placeholder="Last Name"
          />
          <br />
          <select
            value={formObj.city}
            onChange={(e) => {
              inputOnChange("city", e.target.value);
            }}
          >
            <option value="">Select City</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Khulna">Khulna</option>
          </select>
          <br />
          <input
            onChange={() => {
              inputOnChange("gender", "male");
            }}
            checked={formObj.gender == "male"}
            type="radio"
            name="gender"
          />
          Male
          <input
            onChange={() => {
              inputOnChange("gender", "female");
            }}
            checked={formObj.gender == "female"}
            type="radio"
            name="gender"
          />
          Female
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
