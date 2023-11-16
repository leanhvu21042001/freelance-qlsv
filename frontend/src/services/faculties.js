// faculties.service.js
import request from "./request";

class FacultiesService {
  async create(facultyData) {
    try {
      const response = await request.post(`/faculties`, facultyData);
      return response.data;
    } catch (error) {
      console.error("Error creating faculty:", error);
      throw error;
    }
  }

  async delete(facultyId) {
    try {
      const response = await request.delete(`/faculties/${facultyId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting faculty:", error);
      throw error;
    }
  }

  async update(facultyId, facultyData) {
    try {
      const response = await request.put(
        `/faculties/${facultyId}`,
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
      const response = await request.get(`/faculties/${facultyId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching faculty:", error);
      throw error;
    }
  }

  async list() {
    try {
      const response = await request.get(`/faculties`);

      return response.data;
    } catch (error) {
      console.error("Error fetching faculties:", error);
      throw error;
    }
  }

  async softDelete(facultyId) {
    try {
      const response = await request.put(`/faculties/soft-delete/${facultyId}`);
      return response.data;
    } catch (error) {
      console.error("Error soft deleting faculty:", error);
      throw error;
    }
  }
}

export default new FacultiesService();
