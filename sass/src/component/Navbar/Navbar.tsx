import "./navbar.css"
const logo = require("../../images/zooki-nav-icon.png")


const Navbar = () => {
    return (
        <div>
            <div><img src={logo} alt="" /></div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
            </ul>


        </div>
    )
}

export default Navbar