type navType = {
	home: string;
	logo: string;
	about: string;
	connect: string;
};

function Navbar({ logo, home, about, connect }: navType) {
	return (
		<div className="navigateur">
			<nav className="navbar-container">
				<img className="logo" src="src\assets\logo.svg" alt={logo} />
				<a href="#">{home}</a>
				<a href="#">{about}</a>
				<a href="#">{connect}</a>
			</nav>
		</div>
	);
}

export default Navbar;
