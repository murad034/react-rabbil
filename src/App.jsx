import React, { useRef, useState, useEffect } from "react";
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

  // use ref caching expensive computaiton by api calling

  let APIData = useRef(null);
  let myPTag = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products/1");
    APIData.current = await response.json();
  };

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };

  // useState
  const [number, setNumber] = useState(0);
  const changeNumber = () => {
    setNumber(number + 1);
  };

  // object for useState
  const [myObj, setMyObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });

  const changeObjByState = () => {
    setMyObj((prevObj) => ({
      ...prevObj,
      key1: "New Value 1",
      key2: "New Value 2",
    }));
  };

  // react hook useEffect

  useEffect(() => {
    console.log("Hello React");
  }, [4, 233, 344, 45, 6, 4]);

  const [pdata, setPdata] = useState([]);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products/1")
  //     .then((res) => res.json())
  //     .then((json) => setPdata(json));
  // }, []);

  useEffect(() => {
    (async () => {
      let res = await fetch("https://dummyjson.com/products/1");
      let json = await res.json();
      setPdata(json);
    })();
  }, []);

  return (
    <div>
      <h1>UseEffect Example</h1>
      <div>{JSON.stringify(pdata)}</div>
      <br />

      <h1>UseState Example</h1>
      <button onClick={changeObjByState}>Change Btn</button>
      <h1>{myObj.key1}</h1>
      <h1>{myObj.key2}</h1>
      <h1>{myObj.key3}</h1>

      <h1>Number: {number}</h1>
      <button onClick={changeNumber}>Click</button>

      <h1>Use ref caching exprensive computations</h1>
      <p ref={myPTag}></p>
      <button onClick={fetchData}>Call API</button>
      <button onClick={showData}>Show Data</button>

      <h1>React Hook</h1>
      <p ref={(p) => (myHeadLine = p)}></p>
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
