import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("click")} color="warning">
        My Button
      </Button>
    </div>
  );
}

export default App;
