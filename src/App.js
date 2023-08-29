import "./styles.css";
import Card from "../components/Card/Card.jsx";

export default function App() {
  function clickHandle() {
    console.log("clicked");
  }

  return (
    <div className="App">
      <Card
        name="Delhi"
        temperature="28.3 Degrees"
        image="https://s01.sgp1.digitaloceanspaces.com/large/856079-72499-umpulzhxyb-1509435164.jpg"
        buttonName={"check"}
        refresh={clickHandle}
      />
    </div>
  );
}
