import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTheme } from "./context/themeContext";
import { LIGHT_THEME } from "./constants/theme";
import TaskManager from "./components/TaskManager";
import "./App.css";

const AppContext = () => {
  const { theme } = useTheme();

  return (
    <div className={`${theme === LIGHT_THEME ? "light" : "dark"} app`}>
      <Navbar />
      <TaskManager />
    </div>
  );
};


function App() {
  return (
    <ThemeProvider>
      <AppContext />
    </ThemeProvider>
  );
}

export default App;