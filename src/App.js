import { Provider } from "react-redux";
import Pokedex from "./pages/Pokedex";
import { store } from "./redux/store";
import './App.css';


function App() {
  return (
    <Provider store={store}>
      <Pokedex/>
    </Provider>
  );
}

export default App;
