import "./App.css";
import Card from "./component/Card";
let obj = {
  name: "viral",
  id: "chai@code",
};
let arr = [1, 2, 4];
function App() {
  return (
    <>
      <Card text="New Transcation" obj={obj} />
      <Card text="New Payment" arr={arr} />
      <Card />
    </>
  );
}

export default App;
