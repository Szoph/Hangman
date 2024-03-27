import axios from "axios";
const SERVER_URL: string = "http://127.0.0.1:5000/game";

class GameClient {
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
