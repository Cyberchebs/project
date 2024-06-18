import useLocalStroage from "./useLocalStorage";
import './style.css';

export default function LigthDarkMode() {

    const [theme, setTheme] = useLocalStroage('theme', "dark");

    function handleToggleTheme(){
        setTheme(theme === "light" ? "dark" : "light")
    }

    console.log(theme);
    return(
        <div className="light-dark-mode" data-theme={theme}>
            <div className="container">
            <p>hello World</p>
            <button onClick={handleToggleTheme}>change color</button>
            </div>
        </div>
    )
}
