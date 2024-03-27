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
    }

    const accessToken: string | null = localStorage.getItem("access_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const checkToken = await axios.get(
      `${SERVER_URL}/access_token/${username}`,
      config
    );

    if (!checkToken.data.success) {
      return {
        success: false,
        message: "Problem authenticating token",
        error: checkToken.data.error,
      };
    }

    return {
      success: true,
      data: checkToken.data.payload,
      message: "User authenticated",
    };
  }

  async signInUser(username: string, password: string): Promise<AuthResponse> {
    const params = {
      username,
      password,
    };

    const signIn = await axios.post(`${SERVER_URL}/signin`, params);
    console.log("This should be the sign indata", signIn)
    if (!signIn.data.success) {
      console.error("Failed to sign in")
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
    }

    if (typeof window !== "undefined") {
      localStorage.setItem("access_token", jwtToken.token);
    }

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

  async deleteUser(user: string): Promise<any> {
    if (typeof window === "undefined") {
      return;
    }

    const accessToken: string | null = localStorage.getItem("access_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const userUpdate = await axios.delete(`${SERVER_URL}/delete_user/${user}`,config);
    if (!userUpdate.data.success) {
      return {
        success: false,
        error: userUpdate.data.error,
        message: userUpdate.data.message
      };
    };

    return {
      success: true,
      message: userUpdate.data.message
    }
  }

  async updateUser(
    user: string,
    type: string,
    oldValue: string,
    newValue: string
  ): Promise<AuthResponse | any> {
    if (typeof window === "undefined") {
      return;
    }

    const accessToken: string | null = localStorage.getItem("access_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const userUpdate = await axios.put(
      `${SERVER_URL}/update_user`,
      {
        user,
        type,
        oldValue,
        newValue,
      },
      config
    );

    const response = userUpdate.data;

    if (!response.success) {
      return {
        success: false,
        error: response.error,
        message: response.message,
      };
    }

    if (response.message["new_token"]) {
      localStorage.setItem("access_token", response.message["new_token"]);
    }

    return {
      success: true,
      message: response.message,
    };
  }

  signOutUser(): void {
    if (typeof window !== "undefined") {
      localStorage.removeItem("access_token");
      localStorage.removeItem("persist:root");
    }
  }
}

export default new AuthClient();
