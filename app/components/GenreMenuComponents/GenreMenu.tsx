import "./genremenu.scss";
import GenreCards from "./GenreCards/GenreCards";
import SearchGenre from "./SearchGenre/SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";
import PopularGenre from "./PopularGenres/PopularGenres";

const GenreMenu = () => {


  return (
    <div className="genre-menu-container">

      <div className="popular-container">
        <div className="popular-genre-container flex-row">
          <PopularGenre/>
        </div>
      </div>

      <SearchGenre />
    </div>
  );
};

export default GenreMenu;
