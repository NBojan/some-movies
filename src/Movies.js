import { useGlobalContext } from "./context"
import { Link } from "react-router-dom"

const defImg = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
    const {movies, loading, err} = useGlobalContext();    

    return (  
        <div className="moviesContainer">
           {loading ? 
            <div className="loading"></div> 
           : 
           movies.length > 0 && (
            <div className="movies d-flex flex-wrap space-between align-center">
                {movies.map(item => {
                    const {Title: title, Year: year, imdbID: id, Poster: poster} = item;
                    return (
                        <div className="movie" key={id}>
                            <Link to={`/movies/${id}`} className="d-block">
                                <img src={poster !== "N/A" ? poster : defImg} alt={title} />
                                <div className="info">
                                    <h4>{title}</h4>
                                    <p>{year}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
           )}
           
           {err && <h3 className="ta-center">{err}</h3>}
        </div>
    );
}
 
export default Movies;