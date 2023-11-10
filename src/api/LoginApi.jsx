import apiCall from "./baseURL";

class LoginAPI {
  login(credentials) {
    return apiCall.post("auth/login", credentials);
  }
}

const LoginAPIObject = new LoginAPI();

export default LoginAPIObject;
