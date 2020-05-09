import axios from "axios";

export default {
  create: function (quizResults) {
    console.log(quizResults);
    return axios.post('http://localhost:3001/api/savequiz', quizResults);
  },
  viewResults: function (query) {
    return axios.get(`http://localhost:3001/api/savequiz${query ? `${query}` : ''}`);
  }
}