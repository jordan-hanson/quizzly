import React, { Component } from "react";
import "../assets/style.css";



import { Row } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../assets/style.css";
import "../assets/quiz.css";
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
// import contentData from "../utils/contentData";
///// THIS BELOW IS WHERE WE COULD PLACE ALL THE QUIZS /////

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">

        <h2 className="my-5 text-center">Did you know?</h2>


        {/* HERE  UNDERNEATH  IS THE CONTENT AFTER THE LINE BREAK */}
        <div className="cardS">
          <Card className="boox imageQuiz0a">
            <CardBody>

              <CardTitle className="smallTexta">The largest known living organism is an aspen grove.</CardTitle>

            </CardBody>
          </Card>
          <Card className="boox imageQuiz0b">
            <CardBody>

              <CardTitle className="smallTexta">The unicorn is the national animal of Scotland.</CardTitle>

            </CardBody>
          </Card>

          <Card className="boox imageQuiz0c">
            <CardBody>

              <CardTitle className="smallTexta">Some cats are allergic to people and other cats!</CardTitle>

            </CardBody>
          </Card>

          <Card className="boox imageQuiz0d">
            <CardBody>

              <CardTitle className="smallTexta">The hashtag symbol is technically called an octothorpe.</CardTitle>

            </CardBody>
          </Card>
        </div>

      </div>
    );
  }
}



export default Content;
