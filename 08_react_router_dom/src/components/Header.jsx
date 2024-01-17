// Header.js
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo or Brand */}
                <Link to="/" className="text-white text-xl font-bold">Your Logo</Link>

                {/* Navigation Links */}
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink to="/" exact className="text-white" activeClassName="font-bold">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="text-white" activeClassName="font-bold">
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/github" className="text-white" activeClassName="font-bold">
                                Github
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/us/contact" className="text-white" activeClassName="font-bold">
                                contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
