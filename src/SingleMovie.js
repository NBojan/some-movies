import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINT } from "./context";
import useFetch from "./useFetch";

const SingleMovie = () => {
    const {id} = useParams();
    const {data, loading, err} = useFetch(`${API_ENDPOINT}&i=${id}`);
    const [msgErr, setMsgErr] = useState({show: false, msg: ""});
    
    useEffect(() => {
        if(data){
            if(data.Response === "True"){
                setMsgErr({show: false, msg: ""});
            } else {
                setMsgErr({show: true, msg: data.Error});
            }
        }
    }, [data])

    return (  
        <section className="single-movie-container">
            {loading ? <div className="loading"></div> 
            : 
            data && msgErr.show ?
                <div>
                    <h4 className="errMsg">{msgErr.msg}</h4> 
                    <Link to="/" className="btn backBtn">Back To Movies</Link>
                </div>
                :
                <div className="single-movie d-flex">
                    <div className="img-cont d-flex">
                        <img src={data.Poster} alt={data.Title} />
                    </div>
                    <div className="single-info">
                        <h2 className="title-color">{data.Title}</h2>
                        <p className="mTB-16 font-color">{data.Plot}</p>
                        <h4 className="mb-18 title-color">{data.Year}</h4>
                        <Link to="/" className="btn backBtn">Back To Movies</Link>
                    </div>
                </div> 
            }
            
            {err && <h3 className="ta-center">{err}</h3>}
        </section>
    );
}
 
export default SingleMovie;