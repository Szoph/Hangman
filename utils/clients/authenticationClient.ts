import axios from "axios";

const SERVER_URL: string = "http://127.0.0.1:5000/auth";

interface AuthResponse {
    success: boolean;
    message?: any;
    error?: string;
}

class AuthClient {
    async userExists(username: string): Promise<AuthResponse> {
        const userExisetence: any = await axios.get(`${SERVER_URL}/user_exists/${username}`);

        if (!userExisetence.data.success) {
            return {
                success: false,
                message: "User doesn't exist!",
            }
        }

        return {
            success: true,
            message: "User already exists!",
        };
    }

    getUser(): void {

    }

    signInUser(): void {

    }

    async signUpUser(username: string, password: string): Promise<AuthResponse> {
        const params = {
            username,
            password
        }
        const signUp = await axios.post(`${SERVER_URL}/signup`, params);

        if (signUp.data.success) {
            return {
                success: true,
                message: signUp.data.data
            }
        }

        return {
            success: false,
            message: signUp.data.error
        }
    }

    deleteUser(): void {

    }

    updateUser(): void {

    }
}

export default new AuthClient;