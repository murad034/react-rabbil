import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import Header from "./component/Header";
import Hero from "./component/Hero";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
// import TableList from "./component/TableList";

import {
  HStack,
  Heading,
  Stack,
  Button,
  Box,
  Text,
  Table,
} from "@chakra-ui/react";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";

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

  // ui chakra

  const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  ];

  return (
    <div>
      <h1>Chakra UI Connected</h1>
      <HStack>
        <Button>Click me</Button>
      </HStack>

      <Box p={4}>
        <Text fontSize="2xl">Hello Chakra UI</Text>
        <Button colorScheme="green" mt={2}>
          Click Me
        </Button>
      </Box>

      <h1>Chakra TableList</h1>

      <Stack width="full" gap="5">
        <Heading size="xl">Products</Heading>
        <Table.Root size="sm" variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Category</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell textAlign="end">{item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>

        <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
          <HStack wrap="wrap">
            <PaginationPrevTrigger />
            <PaginationItems />
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      </Stack>

      <br />
      <h1>React Dom Router</h1>
      <p>Browser Router</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/product/:productID/:productName"
            element={<ProductPage />}
          ></Route>
          <Route
            path="/profile/:userID/:userName"
            element={<ProfilePage />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>

      <p>Hash Router</p>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/product" element={<ProductPage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </HashRouter>

      <br />
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
