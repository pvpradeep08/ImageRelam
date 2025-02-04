import "../components/navbar.css";

export const Navbar = ({name,children}) => {
  return (
    <>
        <nav className="navbar">
            <div className="logo">{name}</div>
            {children}
            <ul className="nav-items">
                <li className="nav-item">
                    <a href="#" className="nav-link explore">Explore</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link login">Login</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link join">Join</a>
                </li>
                

            </ul>
            
            <button className="button1"> Upload</button>
        </nav>
    </>
  )
}
