import axios from "axios";

export default {
  // Gets all Users
  getUser: function () {
    return axios.get("/api/users");
  },
  // Gets the User with the given id
  // getUser: function (id) {
  //   return axios.get("/api/quiz/" + id);
  // },
  // Saves a User to the database
  saveUser: (body) => {
    console.log("this is body", body)
    return axios.post("http://localhost:8080/api/users/register", body)
      .then(res => res)
      .catch(err => {
        throw err
      }
      )
  }
};
