import $api from "../http";

export default class AuthService {
  static fechUsers() {
    return $api.get("/users");
  }
}
