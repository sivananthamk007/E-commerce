import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import { Provider } from "react-redux";
import Store from "./redux/store";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Provider store={Store}>

        <BrowserRouter basename="/E-commerce">
          <Home />
        </BrowserRouter>
      </Provider>

    </div>

  );
}

export default App;
