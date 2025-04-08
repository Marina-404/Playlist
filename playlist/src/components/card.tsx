
export type Playlist = {
    genre: string;
    name: string;
    picture: string;
    description: string;
};

const PlaylistCard = ({genre, name, picture, description}: Playlist) => {
    return (
        <div className="card">
            
            <img src={picture} alt={genre} className="card-image" />
            <p className="genre">{genre}</p>
            <h2>{name}</h2>
            <p className="description">{description}</p>
        </div>
    );
};

export default PlaylistCard
