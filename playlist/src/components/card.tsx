
export type Playlist = {
    title: string;
    picture: string;
};

const PlaylistCard = ({title, picture}: Playlist) => {
    return (
        <div className="card">
            <h2>{title}</h2>
            <img src={picture} alt={title} className="card-image" />
        </div>
    );
};

export default PlaylistCard
