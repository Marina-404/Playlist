type navType = {
	logo: string;
	about: string;
	connect: string;
};

function Navbar({ logo, about, connect }: navType) {
	return (
		<div>
			<nav>
				<a href="https://">{logo}</a>
				<a href="https://">{about}</a>
				<a href="https://">{connect}</a>
			</nav>
		</div>
	);
}

export default Navbar;
