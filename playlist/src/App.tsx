import "./App.css";
import Footer from "./components/footer";
import Navbar from "./components/navBar";

function App() {
	return (
		<>
			<div className="navbar-container">
				<nav>
					<Navbar
						logo={"PartageTaPlaylist"}
						about={"About-us"}
						connect={"Connect"}
					/>
				</nav>
			</div>

			<div className="footer-container">
				<footer>
					<Footer siteName="PartageTaPlaylist" />
				</footer>
			</div>
		</>
	);
}

export default App;
