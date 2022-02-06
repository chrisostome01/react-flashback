import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div>
            <div className="notfound">
                <p>Not found ...</p>
                <div className="home">
                    <Link to="/" >Home</Link>
                </div>
            </div>
        </div>
     );
}
 
export default NotFound;