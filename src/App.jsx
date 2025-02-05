import React, { useRef } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";

const App = () => {
  const item = {
    id: 1,
    name: "Product 1",
    description: "This is the description",
    price: 19.99,
    category: "Category 1",
  };

  const btnClick = () => {
    alert("Say Hello !");
  };

  let myHeadLine = useRef();
  // myHeadLine.current.innerText = "Hello userRef";

  const Change = () => {
    myHeadLine.innerHTML = "<p>Learn</p>";
    // myHeadLine.current.innerHTML = "<p>Learn</p>";
  };

  return (
    <div>
      <h1>React Hook</h1>
      <p ref={(p) => myHeadLine = p}></p>
      <button onClick={() => Change()}>Submit</button>
      <Header />
      <Hero
        title="Learn React Props"
        description="Learn React for Props Details"
        item={item}
        btnClick={btnClick}
      />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;
