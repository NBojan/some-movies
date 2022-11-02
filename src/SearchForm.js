import { useGlobalContext } from "./context";

const SearchForm = () => {
    const {term, setTerm, msgErr} = useGlobalContext();

    return (  
        <div className="search smallContainer mb-64">
            <form onSubmit={e => e.preventDefault()}>
                <h3 className="title-color">Search Movies</h3>
                <input type="text" placeholder="Search" value={term} onChange={e => setTerm(e.target.value)}/>
                {msgErr.show && <h4 className="errMsg">{msgErr.msg}</h4>}
            </form>
        </div>
    );
}
 
export default SearchForm;