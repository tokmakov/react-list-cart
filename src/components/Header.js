export default function Header(props) {
    return (
        <header>
            <nav className="teal lighten-1">
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">React Shop</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Link one</a></li>
                        <li><a href="#">Link two</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}