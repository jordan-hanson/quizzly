import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/quiz");
  },
  // Gets the User with the given id
  getUser: function (id) {
    return axios.get("/api/quiz/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/users/register", userData);
  }
};
