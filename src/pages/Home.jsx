import { ThemeContext } from "../store/Theme/context";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { setLightTheme, setDarkTheme } from "../store/Theme/actions";
import Layout from "../components/Layout";
import DressList from "../components/DressList";

const Home = () => {
  const { themeState, themeDispatch } = useContext(ThemeContext);
  const { theme } = themeState;

  const handleTheme = () => {
    let actionResult;
    if (theme === "light") {
      actionResult = setDarkTheme();
    } else if (theme === "dark") {
      actionResult = setLightTheme();
    }
    themeDispatch(actionResult);
  };

  return (
    <div className={theme === "light" ? "bg-white" : "bg-dark"}>
      <Layout>
        <Button variant="outline-primary" onClick={handleTheme}>
          Change Theme
        </Button>
      </Layout>
    </div>
  );
};

export default Home;
