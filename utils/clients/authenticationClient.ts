import axios from "axios";

const SERVER_URL: string = "http://127.0.0.1:5000/auth";

interface AuthResponse {
  success: boolean;
  message?: any;
  error?: string;
}

class AuthClient {
  async userExists(username: string): Promise<AuthResponse> {
    const userExisetence: any = await axios.get(
      `${SERVER_URL}/user_exists/${username}`
    );

    if (!userExisetence.data.success) {
      return {
        success: false,
        message: "User doesn't exist!",
      };
    }

    return {
      success: true,
      message: "User already exists!",
    };
  }

  async getUser(username: string): Promise<any> {
    if (typeof window === "undefined") {
        return;
    };
    
    const accessToken: string | null = localStorage.getItem("access_token");

    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    const checkToken = await axios.get(`${SERVER_URL}/access_token/${username}`, config);

    if (!checkToken.data.success) {
        return {
            success: false,
            message: "Problem authenticating token",
            error: checkToken.data.error,
        };
    };

    return {
        success: true,
        data: checkToken.data.payload,
        message: "User authenticated",
    }
}


  async signInUser(username: string, password: string): Promise<AuthResponse> {
    const params = {
      username,
      password,
    };

    const signIn = await axios.post(`${SERVER_URL}/signin`, params);

    if (!signIn.data.success) {
      return {
        success: false,
        message: "Failed to log in",
      };
    }

    const jwtToken = signIn.data.message;
    if (!jwtToken) {
      return {
        success: false,
        message: "Problem with JWT Token.",
      };
    };

    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", jwtToken.token);
    };

    return {
      success: true,
      message: jwtToken.message,
    };
  }

  async signUpUser(username: string, password: string): Promise<AuthResponse> {
    const params = {
      username,
      password,
    };
    const signUp = await axios.post(`${SERVER_URL}/signup`, params);

    if (signUp.data.success) {
      return {
        success: true,
        message: signUp.data.data,
      };
    }

    return {
      success: false,
      message: signUp.data.error,
    };
  }

  deleteUser(): void {}

  updateUser(): void {}
}

export default new AuthClient();
