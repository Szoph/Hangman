import "./genremenu.scss";
import GenreCards from "./GenreCards/GenreCards";
import SearchGenre from "./SearchGenre/SearchGenre";
import UserAvatar from "../ProfileComponents/UserAvatar";
import PopularGenre from "./PopularGenres/PopularGenres";


const GenreMenu = () => {
  return (
    <section className="genre-menu-container">
      <div className="popular-container">
        <div className="popular-genre-container">
          <PopularGenre/>
        </div>
      </div>

      <SearchGenre />
    </section>
  );
};

export default GenreMenu;
