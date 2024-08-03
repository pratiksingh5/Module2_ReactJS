import config from "../config/index";
import { Client, Databases, Query } from "appwrite";

class BlogService {
  client = new Client();
  databases;

  constructor() {
    this.client.setEndpoint(config.BACKEND_URL).setProject(config.PROJECT_KEY);
    this.databases = new Databases(this.client);
  }

  async createPost({ title, slug, content, mainImage, status, userId }) {
    // Error Handling

    try {
      const result = await this.databases.createDocument(
        config.DATABASE_KEY,
        config.COLLECTION_KEY,
        slug,
        {
          title,
          content,
          mainImage,
          status,
          userId,
        }
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updatePost({ title, slug, content, mainImage, status }) {
    try {
      const result = await this.databases.updateDocument(
        config.DATABASE_KEY,
        config.COLLECTION_KEY,
        slug,
        {
          title,
          content,
          mainImage,
          status,
        }
      );

      return result;
    } catch (error) {
      console.log();
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.DATABASE_KEY,
        config.COLLECTION_KEY,
        slug
      );
      return true;
    } catch (err) {
      console.log("Failed to delete");
      return false;
    }
  }

  async getPost(slug) {
    try {
      const result = await this.databases.getDocument(
        config.DATABASE_KEY,
        config.COLLECTION_KEY,
        slug
      );

      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getAllPost(queries = [Query.equal("status", "active")]) {
    try {
      const result = await this.databases.listDocuments(
        config.DATABASE_KEY,
        config.COLLECTION_KEY,
        queries
      );
      return result;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  //   blogService

  // createPost()
  // getPost()
  // getAllPost()
  // updatePost()
  // deletePost()

  // fileService

  // uploadFile()
  // deleteFile()
  //  getFilePreview() 
}
