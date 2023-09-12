// use sfc to create new components
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links"></div>
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            
            {/* use Link for the react to intercept the http request for faster load time */}
            {/* style={{
                color:"white",
                backgroundColor: '#f1356d',
                borderRadius:'8px'
            }} */}
            {/* Outer {} is dynamic value, inner {} is javascript object */}
            
        </nav>
        

    );
}
 
export default Navbar;