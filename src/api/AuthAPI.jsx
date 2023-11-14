import apiCall from "./baseURL";

class AuthAPI {
  login(credentials) {
    return apiCall.post("auth/login", credentials);
  }
  signup(credentials) {
    return apiCall.post("auth/signup", credentials);
  }
}

const AuthAPIObject = new AuthAPI();

export default AuthAPIObject;