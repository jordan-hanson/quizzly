import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";
import API from '../utils/API'
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import "../assets/quiz.css";

const Profile = () => {
  const { loading, user } = useAuth0();
  console.log(user, "autho user")
  let [quizes, setQuizes] = useState([])



  useEffect(() => {
    let isSubscribed = true;
    if (isSubscribed) {
      loadData()
    }

    return () => isSubscribed = false;
  }, [user])

  const loadData = (isSubscribed) => {
    API.viewResults(`?email=${user.email}`).then(function (res) {
      if (res.status >= 200) {
        setQuizes(res.data)
      }

    })
  }


  let filterQuizByType = (x) => quizes.filter(quiz => quiz.quizType === x && quiz.score);
  //// THIS IS WHERE WE CAN DISPLAY WHAT ONLY PEOPLE WHO LOG IN CAN SEE ////
  return (
    <>
      {loading || !user ? <Loading /> :

        <Container className="mb-5a">
          <Row className="align-items-center profile-header mb-5 text-center text-md-middle profileSpace">
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
              />
            </Col>
            <Col md>
              <h2>
                <p className="lead2 text-muted">Hello {user.name} !</p>
              </h2>
            </Col>
          </Row>
          <div className="userInfo">
            <ul>
              <p>Username: {user.name} </p>
              <p>Email: {user.email}</p>
              <p>Nickname: {user.nickname}</p>
            </ul>
          </div>

          {/* THIS IS WHERE FILLER CARDS ARE  .... WHERE EVENTUALLY THE DB WILL REPLACE INFO */}

          <div className="cardS">
            <Card className="boox imageQuiz0">
              <h2 className="profScoreHead">Jalapeno's Quiz</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText"></CardSubtitle>
                <CardText className="profScoreText">SCORED: {filterQuizByType("jalapeno").length ? filterQuizByType("jalapeno")[0].score : 0}/5</CardText>


              </CardBody>
            </Card>

            <Card className="boox imageQuiz1">
              <h2 className="profScoreHead">Milks gone bad?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText"></CardSubtitle>
                <CardText className="profScoreText">SCORED: {filterQuizByType("milk").length ? filterQuizByType("milk")[0].score : 0}/5</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz2">
              <h2 className="profScoreHead">But do you Bike?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText"></CardSubtitle>
                <CardText className="profScoreText">SCORED: {filterQuizByType("bike").length ? filterQuizByType("bike")[0].score : 0}/5</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz3">
              <h2 className="profScoreHead">Quizzly Bears?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText"></CardSubtitle>
                <CardText className="profScoreText">SCORED: {filterQuizByType("bear").length ? filterQuizByType("bear")[0].score : 0}/5</CardText>


              </CardBody>
            </Card>
            <Card className="boox imageQuiz4">
              <h2 className="profScoreHead">Phish?</h2>
              <CardBody className="quizText0">

                <CardSubtitle className="profScoreText"></CardSubtitle>
                <CardText className="profScoreText">SCORED: {filterQuizByType("phish").length ? filterQuizByType("phish")[0].score : 0}/5</CardText>


              </CardBody>
            </Card>
          </div>

        </Container >
      }
    </>
  );
};

export default Profile;
