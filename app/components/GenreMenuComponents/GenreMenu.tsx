import "./genremenu.scss";
import GenreCards from "./GenreCards";
import SearchGenre from "./SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";

const GenreMenu = () => {
  const tempPop = ["Horror", "Romance", "Comedy", "Action"];

  return (
    <div className="genre-menu-container">

      <div className="popular-container">
        <div className="popular-text-container">
          <h1 className="popular-text">Popular Genre</h1>
        </div>

        <div className="popular-genre-container flex-row">
          {tempPop.map((genre, index) => (
            <GenreCards key={index} height="80%" width="20%" genre={genre} />
          ))}
        </div>
      </div>

      <SearchGenre />
    </div>
  );
};

export default GenreMenu;
