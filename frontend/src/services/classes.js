// classes.service.js

import request from "./request";

class ClassesService {
  constructor() {
    this.baseURL = "/classes";
  }

  async create(className, facultyId) {
    try {
      const response = await request.post(this.baseURL, {
        className,
        facultyId,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating class:", error);
      throw error;
    }
  }

  async delete(classId) {
    try {
      const response = await request.delete(`${this.baseURL}/${classId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting class:", error);
      throw error;
    }
  }

  async update(classId, className, facultyId) {
    try {
      const response = await request.put(`${this.baseURL}/${classId}`, {
        className,
        facultyId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating class:", error);
      throw error;
    }
  }

  async show(classId) {
    try {
      const response = await request.get(`${this.baseURL}/${classId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching class:", error);
      throw error;
    }
  }

  async list() {
    try {
      const response = await request.get(this.baseURL);
      return response.data;
    } catch (error) {
      console.error("Error fetching classes:", error);
      throw error;
    }
  }

  async softDelete(classId) {
    try {
      const response = await request.put(
        `${this.baseURL}/soft-delete/${classId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error soft deleting class:", error);
      throw error;
    }
  }
}

export default new ClassesService();
