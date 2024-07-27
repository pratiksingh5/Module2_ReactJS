/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
// import config from "config";
import config from "../config/index";

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
        // Yahan login krwaynege that means yahan login call krenge
        return this.login({email, password})
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}
