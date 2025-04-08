import Navbar from "./components/navBar";
import CardList from "./components/cardList";
import Footer from "./components/footer";

import "./App.css";
import "./Card.css";

function App() {
	return (
		<>
			<div>
				<nav>
					<Navbar
						logo={""}
						home={"Acceuil"}
						about={"A Propos"}
						connect={"Connexion"}
					/>
				</nav>
			</div>

			<div className="cardplaylist">
				<h1>Playlists tendances !</h1>
				<CardList />
			</div>

			<div className="footer-container">
				<footer>
					<Footer siteName="PartageTaPlaylist.fr" />
				</footer>
			</div>
		</>
	);
}

export default App;
