import { useState } from "react";
import HeroImg from "./HeroImg";

const Hero = (props) => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const addToList = () => {
    list.push(item);
    setList([...list]);
  };

  const removeTodoItem = (index) => {
    // alert(index);
    // console.log(index);
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <div>
      <div>
        <h1>Todo Application using usestate</h1>
        <h1>{JSON.stringify(list)}</h1>
        <div>
          <table>
            <tbody>
              {list.length > 0 ? (
                list.map((element, index) => {
                  return (
                    <tr>
                      <td>{element}</td>
                      <td>
                        <button onClick={() => removeTodoItem(index)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>

        <p>{item}</p>
        <input onChange={(e) => setItem(e.target.value)} placeholder="Item" />
        <button onClick={addToList}>Add</button>
      </div>

      <h1>React Props</h1>
      <p>product Information using props</p>
      <p>{props.item["name"]}</p>
      <p>{props.item.description}</p>
      <p>{props.item["price"]}</p>
      <p>{props.item.category}</p>

      <button onClick={props.btnClick}>Submit Event by props</button>

      <h1>Props Basic Information</h1>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <HeroImg title={props.title} description={props.description} />
      <img src="https://uat-brcp.oss.net.bd/home/images/products/profile/6530aa0a4f387_istockphoto-1303938818-612x612.jpg" />
    </div>
  );
};

export default Hero;
