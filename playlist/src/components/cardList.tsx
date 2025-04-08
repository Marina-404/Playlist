import PlaylistCard, {Playlist} from "./card.tsx"; 

const playlists: Playlist[] = [
    { genre: "Pop", name:"Pop Hits", picture: "../images/pop.jpg", description:"Les hits pop qui font sensation et les mélodies accrocheuses du moment. 🕺" },
    { genre: "Electro", name:"Electronic Vibes", picture: "../images/electro.jpeg", description: "Des beats électroniques modernes pour transformer chaque moment en fête.⚡"},
    { genre: "Funk", name:"Groove Station", picture: "../images/funk.png", description:"Les meilleurs sons du rap français actuel, mis à jour chaque semaine.🔥"},
    { genre: "Kpop", name:"K-Wave", picture: "../images/kpop.png", description:"Le meilleur de la pop coréenne qui conquiert le monde, fraîchement sélectionné 🌟"},
    { genre: "Rap", name:"Rap FR",picture: "../images/rap.png", description:"Les meilleurs sons du rap français actuel, mis à jour chaque semaine. 🎤"},
    { genre: "Rock", name:"Rock Anthems", picture: "../images/rock.webp", description:"Les classiques intemporels et les nouveaux hits du rock, rassemblés pour une expérience électrisante.🎸" },
];

  

const CardList = () => {
    return (
        <div className="card-list">
             {playlists.map((playlist,index) => {
                return (
                <PlaylistCard 
                    key={index}
                    genre={playlist.genre}
                    name={playlist.name}
                    picture={playlist.picture} 
                    description={playlist.description}
                />
             );
                
            })}
        </div>
    );
}

export default CardList;