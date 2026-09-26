import { useTheme } from "../context/themeContext";
import { DARK_THEME, LIGHT_THEME } from "../constants/theme";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
      <span className={styles.brand}>React State Manager</span>

      <button
        className={styles.toggleButton}
        type="button"
        aria-pressed={theme === DARK_THEME}
        onClick={toggleTheme}
      >
        Switch to {theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME} Mode
      </button>
    </nav>
  );
};

export default Navbar;