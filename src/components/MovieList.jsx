const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m3">
                    <img src={movie.Poster} alt="movie"/>
                    <div
                        onClilck={() => props.handleFavoritesClick(movie)}
                        className="overlay d-flex align-items-center jusitfy-content-center"
                    >
                        < FavoriteComponent/>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MovieList;
