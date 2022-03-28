import "./App.css";
import Fishes from "./components/Fishes/Fishes";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-gray-900 text-white py-4">
      <div className="container mx-auto ">
        <Header></Header>
        <Fishes></Fishes>
      </div>
    </div>
  );
}

export default App;
