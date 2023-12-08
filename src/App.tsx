import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button color="warning" onClick={() => console.log("click")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
