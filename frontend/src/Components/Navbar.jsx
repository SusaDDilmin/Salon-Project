

function Navbar() {
    return (
        <nav className="flex p-6 justify-between md:flex-row flex-col">
            <div className="flex space-x-5 pl-10 md:pl-2">
                <h1>Logo IMG</h1>
                <h1>Logo</h1>
            </div>
            <div className="">
                <ul className="flex space-x-4 hidden md:flex">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#login">Book Now</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar