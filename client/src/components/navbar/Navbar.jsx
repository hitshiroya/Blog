import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  let user=true;
  return (
    
    <div className='nav'>
    <div className="leftpart">
    <i id="tw" class="fab fa-twitter"></i>
    <i id="fb" class="fab fa-facebook"></i>
    <i id="ig" class="fab fa-instagram"></i>
    <i id="pi" class="fab fa-pinterest"></i>
    </div>
    <div className="centerpart">
        <ui className="list">
            <li className="listitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>HOME</Link>
            </li>
            <li className="listitem">
              <Link to="/" style={{textDecoration:"none",color:"inherit"}}>ABOUT</Link>
            </li>
            <li className="listitem">
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>CONTACT</Link>
            </li>
            <li className="listitem">
              <Link to="/write" style={{textDecoration:"none",color:"inherit"}}>WRITE</Link>
            </li>
            <li className="listitem">
            {user && "LOGOUT"}
            </li>
        </ui>
    </div>
    <div className="rightpart">
        {user?(
          <Link to="/settings">
          <div className="pic">
          <img src="sdtitle.jpg" className='navimg' alt="here was image" />
          </div>
          </Link>
        ):(
          <ul className='listitem'>
          <Link to="/login" style={{textDecoration:"none",color:"inherit"}} >Login </Link>
          <Link to="/register" style={{textDecoration:"none",color:"inherit"}}>Register </Link>
          </ul>

        )}
    <i id='searchicon' class="fas fa-search"></i>
    
    </div>
</div>
  )
}
