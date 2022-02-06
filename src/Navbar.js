import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1 className="h1">NetNinja</h1>
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Create">Create new blog</Link>
                </li>
            </ul>
        </div>
      );
}
 
export default Navbar;