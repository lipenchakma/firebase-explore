import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-2xl text-center flex justify-between mx-6">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/login"}>Login</NavLink>
        </div>
    );
};

export default Header;