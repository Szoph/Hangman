import axios from "axios";

const SERVER_URL: string = "http://127.0.0.1:5000/game";


interface GameResponse {
    success: boolean;
    message?: any;
    error?: string;
  }
class GameClient {
    // Get title for the the movie
    async getMoviesFromApi(genre: string): Promise <GameResponse | any> {
        if (typeof window === "undefined") {
            return;
          }

          console.log("The genre in gameclient", genre)
            const params = {
                genre
            }
        
          const selectedGenre = await axios.get(`${SERVER_URL}/get-movies`, {params});
          console.log("This is the selectedGenre: ", selectedGenre)
          if (!selectedGenre.data.sucess) {
            return {
                success: false,
                error: selectedGenre.data.error,
                message: selectedGenre.data.message
              };
          }

          return {
            success: true,
            message: selectedGenre.data.message
          }
    }

    async getMoviesByGenre(genre: string): Promise <GameResponse | any> {
        console.log("Movies are now being retrieved for the genre: ",genre)

        const params = {genre}

        try {
            const response = await axios.get(`${SERVER_URL}/get-movies`, {params})
            console.log(`These should be the movies in the ${genre}:`, response)

            console.log("This is the movie response i.e response.data.movies.title", response.data.movies)
            
            if(response.data.movies && Array.isArray(response.data.movies)) {
                return {
                    success: true,
                    movies: response.data.movies
    
                };
            } else {
                return {
                    success: false,
                    error: "Movies data is not in the expected format",
                    message: null
                }
            }
        } catch (error: any) {
             console.error("Error fetching movies by genre: ", error);
             return {
                success: false,
                error: error.message,
                message: null
                }
        }

    }

    selectGenre(): any {
        // User chooses genre
        // Filter movies with genre
        // Return movies in that genre
    }

    updateFinalResult(): void {
        // 
    }

    updateUserPoints(): void {

    }

    worldRanking(): void {
        
    }
}

export default new GameClient;