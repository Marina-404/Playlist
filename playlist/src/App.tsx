import Navbar from "./components/navBar";
import CardList from './components/cardList'
import Footer from "./components/footer";

import './App.css'
import './Card.css'

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
      
      <div>
        <h1>Ecoute ta Playlist !</h1>
        <CardList />
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
