import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function getRandom(i) {
  return Math.floor(Math.random() * (i + 1));
}

function Header() {
  const description = reactDescriptions[getRandom(3)];
  return (
    <header>
      <img src={reactImg} alt="reactimg" />
      <h1>React Essentials</h1>

      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;
