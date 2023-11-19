import React,{useState} from 'react';
import './Utils.css';
import { Link, useLocation } from 'react-router-dom';

function Sidebar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <div className="Sidebar">
      <ul className="hello">
        <li className='li'>
        <Link
            to="/dashboard"
            onClick={() => handleLinkClick("/dashboard")}
            className={activeLink === "/dashboard" ? "active" : ""}
          >
            <div className="sidebar-item">
              <i className="fas fa-th"></i>
              <span>Dashboard</span>
            </div>
          </Link>
        </li>
       
        <li className='li'>
          <Link to="/reports"
          onClick={() => handleLinkClick("/reports")}
          className={activeLink === "/reports" ? "active" : ""}
          >
            <div className="sidebar-item">
              <i className="fas fa-file"></i>
              <span>Reports</span>
              <i class="fas fa-chevron-circle-down adeel"></i>
            </div>
          </Link>
        </li>
      </ul>
      <ul className="help">
        <li className='li'>
          <Link to="">
            <div className="sidebar-item">
              <i className="far fa-question-circle"></i>
              <span>Help</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
