import "@/app/styles/genremenu.css";
import GenreCards from "../components/GenreMenuComponents/GenreCards";
import SearchGenre from "../components/GenreMenuComponents/SearchGenre";
import UserAvatar from "../components/UserAvatar";

const GenreMenuPage = () => {
  const tempPop = ["Horror", "Romance", "Comedy", "Action"];

  return (
    <div className="genre-menu-container">
      <UserAvatar />

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

export default GenreMenuPage;
