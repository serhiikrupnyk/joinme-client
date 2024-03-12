import $api from "../http";

export default class AuthService {
    static async login(email, password) {
        return $api.post('/login', { email, password });
    }

    static async registration(firstName, lastName, email, password) {
        return $api.post('/registration', { firstName, lastName, email, password });
    }

    static async logout() {
        return $api.post('/logout');
    }

    static async sendResetLink(email) {
        return $api.post('/forgot-password', { email });
    }

    static async resetPassword(id, accessToken, password) {
        return $api.post(`/reset-password/${id}/${accessToken}`, { password });
    }
}