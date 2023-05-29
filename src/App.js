import "./App.scss";

import { CustomRouter } from "./router";

//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
