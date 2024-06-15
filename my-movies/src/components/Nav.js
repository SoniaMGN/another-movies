import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/">Movie</Link>
          </li>
          <li>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/genre">Genre</Link>
          </li>
          <li>
            <Link className="nav-link py-3 px-0 px-lg-3 rounded" to="/actors">Actors</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
