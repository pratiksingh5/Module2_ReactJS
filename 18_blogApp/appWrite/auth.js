import { Client, Account, ID } from "appwrite";
import config from "config";

class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.BASEURL).setProject(config.PROJECT_KEY);
  }
}

const authService = new AuthService();

export default authService;