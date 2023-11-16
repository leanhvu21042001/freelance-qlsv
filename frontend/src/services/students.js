// students.service.js
import request from "./request";

class StudentsService {
  constructor() {
    this.baseURL = "/students"; // Adjust the base URL according to your backend API endpoint
  }

  async create(name, dob, gender, email, classId, facultyId) {
    try {
      const response = await request.post(`${this.baseURL}`, {
        name,
        dob,
        gender,
        email,
        class_id: classId,
        faculty_id: facultyId,
      });
      return response.data;
    } catch (error) {
      console.error("Error creating student:", error);
      throw error;
    }
  }

  async delete(studentId) {
    try {
      const response = await request.delete(`${this.baseURL}/${studentId}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting student:", error);
      throw error;
    }
  }

  async update(studentId, name, dob, gender, email, classId, facultyId) {
    try {
      const response = await request.put(`${this.baseURL}/${studentId}`, {
        name,
        dob,
        gender,
        email,
        class_id: classId,
        faculty_id: facultyId,
      });
      return response.data;
    } catch (error) {
      console.error("Error updating student:", error);
      throw error;
    }
  }

  async show(studentId) {
    try {
      const response = await request.get(`${this.baseURL}/${studentId}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching student:", error);
      throw error;
    }
  }

  async list() {
    try {
      const response = await request.get(`${this.baseURL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  }

  async softDelete(studentId) {
    try {
      const response = await request.put(
        `${this.baseURL}/soft-delete/${studentId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error soft deleting student:", error);
      throw error;
    }
  }
}

export default new StudentsService();
