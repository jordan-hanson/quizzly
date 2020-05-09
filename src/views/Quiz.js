import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-spa";
import axios from "axios";
import "../assets/style.css";
import "../assets/quiz.css"
import Quiz0 from "../components/Quiz0";
import Quiz1 from "../components/Quiz1";
import Quiz2 from "../components/Quiz2";
import Quiz3 from "../components/Quiz3";
import Quiz4 from "../components/Quiz4";



import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import { Route, Link, Switch } from "react-router-dom";



function Quiz() {
    const { loading, user } = useAuth0();
    const [state, setState] = useState({
        Pa1: "",
        Pa2: "",
        ActiveQuiz: "ShowAll",
        DisplayQuiz: ""
    })

    const handleTyping = (e) => {

        console.log("we are typing", e.target.value)
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // const handleSubmit = () => {
    //     var submission = {}
    //     submission.user_email = user.user_email
    //     submission.answers = [state.Pa1, state.Pa2]
    //     axios.post("http://localhost:3001/savequiz", submission)
    //         .then(function () {
    //             console.log("were back from the backend")
    //         })
    //     console.log("handled the submit")
    // }

    const Routes = () => (
        <Switch>
            <Route path="/quiz/Quiz0"
                render={(props) => <Quiz0 {...props} />} />
            <Route path="/quiz/Quiz1"
                render={(props) => <Quiz1 {...props} />} />
            <Route path="/quiz/Quiz2"
                render={(props) => <Quiz2 {...props} />} />
            <Route path="/quiz/Quiz3"
                render={(props) => <Quiz3 {...props} />} />
            <Route path="/quiz/Quiz4"
                render={(props) => <Quiz4 {...props} />} />
        </Switch>
    );

    const handleSelectQuiz = (button) => {
        switch (button) {
            case 0:
                setState({ ActiveQuiz: "Quiz0" });
                console.log(state.ActiveQuiz)
                break;
            case 1:
                setState({ ActiveQuiz: "Quiz1" });
                console.log(state.ActiveQuiz)
                break;
            case 2:
                setState({ ActiveQuiz: "Quiz2" });
                console.log(state.ActiveQuiz)
                break;
            case 3:
                setState({ ActiveQuiz: "Quiz3" });
                console.log(state.ActiveQuiz)
                break;
            case 4:
                setState({ ActiveQuiz: "Quiz4" });
                console.log(state.ActiveQuiz)
                break;
            default:
                setState({ ActiveQuiz: "ShowAll" });
        }
    }

    console.log("this is our state", state)
    return (


        <Container>
            {/* {state.ActiveQuiz()}  CHECK THE STATE HERE       isthistrue  ?() : ()*/}
            <h2 className="quiztitle">Take the coolest Quizzly quizes!</h2>
            <div className="cardS">

                <Card className="boox imageQuiz0 quizText0">
                    <h2 className="quizTitles">Jalapeno's Quiz</h2>
                    <CardBody>
                        <CardTitle>Oooh its hot!</CardTitle>
                        <CardSubtitle>Peppas</CardSubtitle>
                        <CardText>Test your knowledge here!</CardText>
                        <Link to="/quiz/Quiz0" onClick={() => { handleSelectQuiz(0) }}>
                            <u className="quizButton">Take the Quiz!</u>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="boox imageQuiz1">
                    <h2 className="quizTitles quizTitle1">Milks gone bad?</h2>
                    <CardBody className="quizText0">
                        <CardTitle>Like it sour?</CardTitle>
                        <CardSubtitle>Utterly savvy</CardSubtitle>
                        <CardText>Test your knowledge here!</CardText>
                        <Link to="/quiz/Quiz1" onClick={() => { handleSelectQuiz(1) }}>
                            <u className="quizButton">Take the Quiz!</u>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="boox imageQuiz2">
                    <h2 className="quizTitles quizTitle1">But do you Bike?</h2>
                    <CardBody className="quizText1">
                        <CardTitle>Forever Two Wheels</CardTitle>
                        <CardSubtitle>Keep on rollin</CardSubtitle>
                        <CardText>Test your knowledge here!</CardText>
                        <Link to="/quiz/Quiz2" onClick={() => { handleSelectQuiz(2) }}>
                            <u className="quizButton">Take the Quiz!</u>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="boox imageQuiz3">
                    <h2 className="quizTitles quizText1">Quizzly Bears?</h2>
                    <CardBody className="quizText1">
                        <CardTitle>Grrrrrowl</CardTitle>
                        <CardSubtitle>Sup honey</CardSubtitle>
                        <CardText>Test your knowledge here!</CardText>
                        <Link to="/quiz/Quiz3" onClick={() => { handleSelectQuiz(3) }}>
                            <u className="quizButton">Take the Quiz!</u>
                        </Link>
                    </CardBody>
                </Card>
                <Card className="boox imageQuiz4">
                    <h2 className="quizTitles quizText0">Phish?</h2>
                    <CardBody className="quizText0">
                        <CardTitle>Something smells</CardTitle>
                        <CardSubtitle>Where the hook at doe?</CardSubtitle>
                        <CardText>Test your knowledge here!</CardText>
                        <Link to="/quiz/Quiz4" onClick={() => { handleSelectQuiz(4) }}>
                            <u className="quizButton">Take the Quiz!</u>
                        </Link>
                    </CardBody>
                </Card>
            </div>

            <Card className="noLine">
                <Routes />
            </Card>

        </Container>


    )
}

export default Quiz;