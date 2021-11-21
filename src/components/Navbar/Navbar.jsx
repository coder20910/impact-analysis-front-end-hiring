import React from 'react';
import  {Link} from 'react-router-dom';

import "./Navbar.css"
function Navbar() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shortlisted">ShortListed</Link></li>
                <li><Link to="/rejected">Rejected</Link></li>
            </ul>  
            <div class="spacer">
                &nbsp;
            </div>
        </>
    )
}

export default Navbar
