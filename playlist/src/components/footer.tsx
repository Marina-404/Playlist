type FooterType = {
	siteName: string;
	copyright: number;
};

function Footer({ siteName, copyright }: FooterType) {
	const currentYear = new Date().getFullYear(); // Créer un object date, qui va recupérer date/heure puis avec le .getFullYear j'aurais l'année exacte, le tout stocker dans currentYear

	return (
		<footer>
			<div>
				<p>
					&copy; {copyright || currentYear} {siteName}
				</p>
			</div>
		</footer>
	);
}

export default Footer;
