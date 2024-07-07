import { Client, Account, ID } from "appwrite";
import config from "config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.BACKEND_URL).setProject(config.PROJECT_KEY);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        // do something
        // Yahan login krwaynege that means yahan login call krenge
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
