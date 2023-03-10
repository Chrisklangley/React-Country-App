import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import { selectedPotentials } from "./redux/slices/potentialCountriesSlice";
import { useSelector } from "react-redux";
import { selectDisplay } from "./redux/slices/displayCountry";
function App() {
  let currentDisplay = useSelector(selectDisplay);
  console.log(currentDisplay);
  let potentials = useSelector(selectedPotentials);
  console.log(potentials);

  return (
    <div className="App font-link">
      <Header />
      <OptionDisplay />
      <MainDisplay />
    </div>
  );
}

export default App;
