import axios from "axios";

const SERVER_URL: string = "http://127.0.0.1:5000/game";

interface GameResponse {
  success: boolean;
  message?: any;
  error?: string;
}

class GameClient {
 

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
    }}

    async uploadGameData(gameState: any): Promise<any> {
      if (typeof window === "undefined") {
        return;
      }
  
      const accessToken: string | null = localStorage.getItem("access_token");
  
      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const uploadData = await axios.post(
        `${SERVER_URL}/upload_game`,
        { game_state: gameState },
        config
      );
  
      const response = uploadData.data;
  
      if (!response.success) {
        return {
          success: false,
          message: response.message,
          error: response.error,
        };
      }
  
      return {
        success: true,
        message: response.message,
      };
    }
    
    async uploadPoints(gameState: any): Promise<any> {
      const pointsParams = gameState.username;
      const userHasPoints = await axios.get(`${SERVER_URL}/check_user_points/${pointsParams}`);
  
      if (userHasPoints.data.success) {
        // Update Points
        const updatePoints = await axios.put(`${SERVER_URL}/update_points`,
          {game_state: gameState},
        )
      } else {
        // Upload Points
        const uploadPoints = await axios.post(`${SERVER_URL}/upload_points`,
          { game_state: gameState },
        );
        console.log(uploadPoints);
      }
    }
  
    async worldRanking(): Promise<any> {
      const rankingResponse = await axios.get(`${SERVER_URL}/world_ranking`);
  
      if (!rankingResponse.data.success) {
        return {
          success: false,
          error: "Failed to get ranking"
        }
      };
  
      return {
        success: true,
        data: rankingResponse.data.message
      }
    }
  }
  
  export default new GameClient();