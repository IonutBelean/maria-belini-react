import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LogIn from "./pages/LogIn";
import Cart from "./pages/Cart";
import { useReducer } from "react";
import {
  initiialState as themeInitialState,
  themeReducer,
} from "./store/Theme/reducer";
import { ThemeContext } from "./store/Theme/context";
import Rochii from "./pages/Rochii";

function App() {
  const [themeState, themeDispatch] = useReducer(
    themeReducer,
    themeInitialState
  );

  const themeContextVaalue = {
    themeState,
    themeDispatch,
  };

  return (
    <ThemeContext.Provider value={themeContextVaalue}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Rochii" element={<Rochii />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
