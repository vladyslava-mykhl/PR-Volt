import "./App.css";
import Records from "./components/Records";
import store from "./store";
import { Provider } from "react-redux";

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Records />
    </Provider>
  );
}

export default App;
