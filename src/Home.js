import { useGlobalContext } from "./context";
import Movies from "./Movies";
import SearchForm from "./SearchForm";

const Home = () => {
    const {theme, setTheme} = useGlobalContext();
    const handleTheme = () => {
        if(theme === ""){
            setTheme("dark-mode")
        } else {
            setTheme("")
        }
    }
    return (  
        <section className="home">
            <div className="d-flex justify-end mb-12">
                <button className="toggleBtn btn-teal" onClick={handleTheme}>{theme ? 'Light' : 'Dark'}</button>
            </div>
            <SearchForm />
            <Movies />
        </section>
    );
}
 
export default Home;