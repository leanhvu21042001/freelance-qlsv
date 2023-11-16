// faculties.service.js
import request from "./request";

class FacultiesService {
  constructor() {
    this.baseURL = "/faculties"; // Adjust the base URL according to your backend API endpoint
  }

  async create(facultyData) {
    try {
      const response = await request.post(`${this.baseURL}`, facultyData);
      return response.data;
    } catch (error) {
      console.error("Error creating faculty:", error);
      throw error;
    }
  }

  async delete(facultyId) {
    try {
      const response = await request.delete(`${this.baseURL}/${facultyId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting faculty:", error);
      throw error;
    }
  }

  async update(facultyId, facultyData) {
    try {
      const response = await request.put(
        `${this.baseURL}/${facultyId}`,
        facultyData
      );
      return response.data;
    } catch (error) {
      console.error("Error updating faculty:", error);
      throw error;
    }
  }

  async show(facultyId) {
    try {
      const response = await request.get(`${this.baseURL}/${facultyId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching faculty:", error);
      throw error;
    }
  }

  async list() {
    try {
      const response = await request.get(`${this.baseURL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching faculties:", error);
      throw error;
    }
  }

  async softDelete(facultyId) {
    try {
      const response = await request.put(
        `${this.baseURL}/soft-delete/${facultyId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error soft deleting faculty:", error);
      throw error;
    }
  }
}

export default new FacultiesService();
