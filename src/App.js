import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import GoogleAuth from '../src/components/google-auth/index'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
            <GoogleAuth/>
        </header>
      </div>
    </Provider>
  );
}

export default App;
