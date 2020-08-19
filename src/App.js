import React from "react";
import { Provider } from "react-redux";
import RoutersApp from "./routers/App";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <RoutersApp />
    </Provider>
  );
};

export default App;
