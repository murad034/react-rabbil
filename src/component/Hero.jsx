import HeroImg from "./HeroImg";

const Hero = (props) => {
  return (
    <div>
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
