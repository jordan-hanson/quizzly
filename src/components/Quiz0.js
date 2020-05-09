import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0, Auth0Context } from "../react-auth0-spa";
// const { value: firstName, bind: bindFirstName, reset: resetFirstName } = useInput('');
// const { value: lastName, bind: bindLastName, reset: resetLastName } = useInput('');
// const [state, setState] = useState({
//     value: "",
//     ActiveQuiz: "ShowAll",
//     DisplayQuiz: "",

// })



class Quiz0 extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange1 = this.handleChange1.bind(this);
        this.state = {
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            numberCorrect: 0,
            showAnswers: false
        };

        // this.handleSubmit = this.handleSubmit.bind(this);

    }


    componentDidMount() {
        console.log(this.context, "context")
    }

    handleChange = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value: selected })

    }
    handleChange1 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value1: selected })

    }
    handleChange2 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value2: selected })

    }
    handleChange3 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value3: selected })

    }
    handleChange4 = (e) => {
        e.preventDefault();
        var selected = e.target.value
        this.setState({ value4: selected })

    }

    handleSubmit = (event) => {
        let { user } = this.context;
        event.preventDefault();
        let quizResult = {
            question1: this.state.value,
            question2: this.state.value1,
            question3: this.state.value2,
            question4: this.state.value3,
            question5: this.state.value4,
            numberCorrect: this.state.correct,
            score: 0,
            email: user.email
        }


        if (quizResult.question1 === "correct") {
            console.log("yes")
            quizResult.score = quizResult.score + 1;

        } else if (quizResult.question1 === "incorrect1" || "incorrect2" || "incorrect3" || "incorrect4") {
            console.log("wrong")
        }

        if (quizResult.question2 === "correct") {
            console.log("yes")
            quizResult.score = quizResult.score + 1;

        } else if (quizResult.question2 === "incorrect1" || "incorrect2" || "incorrect3" || "incorrect4") {
            console.log("wrong")
        }
        if (quizResult.question3 === "correct") {
            console.log("yes")
            quizResult.score = quizResult.score + 1;

        } else if (quizResult.question3 === "incorrect1" || "incorrect2" || "incorrect3" || "incorrect4") {
            console.log("wrong")
        }
        if (quizResult.question4 === "correct") {
            console.log("yes")
            quizResult.score = quizResult.score + 1;

        } else if (quizResult.question4 === "incorrect1" || "incorrect2" || "incorrect3" || "incorrect4") {
            console.log("wrong")
        }
        if (quizResult.question5 === "correct") {
            console.log("yes")
            quizResult.score = quizResult.score + 1;

        } else if (quizResult.question5 === "incorrect1" || "incorrect2" || "incorrect3" || "incorrect4") {
            console.log("wrong")
        };

        this.setState({ showAnswers: true }, function () {
            quizResult.quizType = 'jalapeno'
            API.create(quizResult);
        })

        // console.log(quizResult);
    }



    render() {

        var style = {
            correct: {
                backgroundColor: this.state.showAnswers ? 'green' : ''
            },
            wrong: {
                backgroundColor: 'red'
            }
        }

        return (
            <Card className="displayArea">
                <Form onSubmit={this.handleSubmit}>
                    <h1 className="Quiz quizTitle">How well do you know Jalapenos?</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which fun fact is true?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>

                                <option value={"incorrect1"}>Jalapenos are used as bullets</option>
                                <option value={"correct"} className="correctAnswer">Jalapenos are one of the best sources of vitamin C</option>
                                <option value={"incorrect2"}>Jalapenos are not known to be spicy</option>
                                <option value={"incorrect3"}>The seeds in a jalapeno are the HOTTEST part of the pepper</option>
                                <option value={"incorrect4"}>Couldn't it be 5</option>


                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is crazy about jalapenos?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value1 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>

                                <option value={"incorrect1"}>You cant grow jalapenos</option>
                                <option value={"incorrect2"}>Jalapenos can only grow in the desert</option>
                                <option value={"incorrect3"}>Jalapenos grow up to 6 feet long! But they shrink after picking</option>
                                <option value={"correct"} className="correctAnswer">After harvest if Jalapenos are stored at 45°F they have a shelf life of up to 3-5 weeks</option>
                                <option value={"incorrect4"}>Jalapenos are dark blue</option>

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What can Jalapenos do??</Label>
                        <Col sm={10}>
                            <Input style={this.state.value2 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>

                                <option value={"incorrect1"}>jalapenos will blind you</option>
                                <option value={"incorrect2"}>Jalapenos can hit the woah</option>
                                <option value={"correct"} className="correctAnswer">Jalapenos help lower blood pressure, fight migraine headaches and lose weight</option>
                                <option value={"incorrect3"}>Jalapeno Gigante II can grow up to 15 inches!!</option>
                                <option value={"incorrect4"}>They taste like chicken!</option>

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value3 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>

                                <option value={"incorrect1"}>Bell peppers are the same as jalapenos</option>
                                <option value={"correct"} className="correctAnswer">About 40,000 acres are dedicated for the cultivation of Jalapenos in Mexico</option>
                                <option value={"incorrect2"}>jalapenos are actually eggs from a green animal</option>
                                <option value={"incorrect3"}>Leprechauns try to steal them</option>
                                <option value={"incorrect4"}>They taste great with peanut butter!</option>

                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is fun about jalapenos?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value4 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>

                                <option value={"incorrect1"}>Jalapenos are used as a dessert for kids!</option>
                                <option value={"incorrect1"}>Jalapenos rot your teeth</option>
                                <option value={"incorrect1"}>Jalapenos make your feet stink!</option>
                                <option value={"incorrect1"}>Jalapenos make you want to eat grass</option>
                                <option value={"correct"} className="correctAnswer">August 19th is National Hot and Spicy Food Day</option>

                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>

                            <Button type="submit" value="Submit">Submit</Button>

                        </Col>
                    </FormGroup>
                </Form>
            </Card>
        )
    }
};

Quiz0.contextType = Auth0Context

export default Quiz0;