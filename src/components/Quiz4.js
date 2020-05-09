import React, { useState } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0, Auth0Context } from "../react-auth0-spa";



class Quiz4 extends React.Component {
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
            quizResult.quizType = 'phish'
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
                    <h1 className="Quiz quizTitle">So you know fish?</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What feature sets fish apart from other water-dwelling animals?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option value={"incorrect1"}>Tailfin</option>
                                <option value={"incorrect2"}>Eyes</option>
                                <option value={"incorrect3"}>Fins</option>
                                <option value={"incorrect4"}>Gills</option>
                                <option value={"correct"} className="correctAnswer">two-chambered heart</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What's the proper term for the study of fish?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value1 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option value={"incorrect1"}>Fishology</option>
                                <option value={"incorrect2"}>Scalology</option>
                                <option value={"correct"} className="correctAnswer">ichthyology</option>
                                <option value={"incorrect3"}>Swimology</option>
                                <option value={"incorrect4"}>Oceography</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which of the following is true about fish scales?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value2 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option value={"incorrect1"}>Scales can make music</option>
                                <option value={"incorrect2"}>Scales are alive</option>
                                <option value={"incorrect3"}>All fish are covered in scales.</option>
                                <option value={"incorrect4"}>Fish scales do not overlap.</option>
                                <option value={"correct"} className="correctAnswer">Older fish have larger scales.</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which part of a fish's body does not help enhance its hearing?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value3 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option value={"incorrect1"}>Fins</option>
                                <option value={"correct"} className="correctAnswer">Gills</option>
                                <option value={"incorrect2"}>Gas bladder</option>
                                <option value={"incorrect3"}>Lateral line</option>
                                <option value={"incorrect4"}>Ears</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is the largest fish?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value4 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option value={"incorrect1"}>Humpback whale</option>
                                <option value={"incorrect2"}>Killer whale</option>
                                <option value={"incorrect3"}>Guppy</option>
                                <option value={"correct"} className="correctAnswer">Whaleshark</option>
                                <option value={"incorrect4"}>Jellyfish</option>
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
Quiz4.contextType = Auth0Context

export default Quiz4;