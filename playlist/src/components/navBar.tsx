type navType = {
	logo: string;
	about: string;
	connect: string;
};

function Navbar({ logo, about, connect }: navType) {
	return (
		<div className="navigateur">
			<nav className="navbar-container">
				<a href="https://">{logo}</a>
				<a href="https://">{about}</a>
				<a href="https://">{connect}</a>
			</nav>
		</div>
	);
}

export default Navbar;
