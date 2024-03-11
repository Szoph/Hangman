import GenreCards from "./GenreCards";

const SearchGenre = () => {
    const tempGenre = [1,2,3,4,5,6,7,8,9,10];

    return (
        <div className="search-genre-container">
            <form className="search-bar-container">
                <label className="search-bar-text">Search Genres</label>
                <input className="search-input" />
            </form>

            <div className="other-genre-container">
                {tempGenre.map((genre, index) => (
                    <GenreCards key={index} height="14em" width="18em" genre={genre} />
                ))}
            </div>
        </div>
    )
};

export default SearchGenre;