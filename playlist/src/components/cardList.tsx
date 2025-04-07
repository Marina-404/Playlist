import PlaylistCard, {Playlist} from "./card.tsx"; 

const playlists: Playlist[] = [
    { title: "Pop", picture: "../images/pop.jpeg" },
    { title: "Electro", picture: "../images/electro.jpeg"},
    { title: "Funk", picture: "../images/funk.png" },
    { title: "Kpop", picture: "../images/kpop.jpeg" },
    { title: "R&B", picture: "../images/rap.jpg" },
    { title: "Rock", picture: "../images/rock.webp" },
];

  

const CardList = () => {
    return (
        <div className="card-list">
             {playlists.map((playlist,index) => {
                return (
                <PlaylistCard 
                    key={index}
                    title={playlist.title}
                    picture={playlist.picture} 
                />
             );
                
            })}
        </div>
    );
}

export default CardList;