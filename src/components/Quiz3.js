import React, { useState } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0, Auth0Context } from "../react-auth0-spa";



class Quiz3 extends React.Component {
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
            quizResult.quizType = 'bear'
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
                    <h1 className="Quiz quizTitle">Daa Bears</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Where do bears live?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option value={"incorrect1"}>South of equater</option>
                                <option value={"incorrect2"}>Along the equater</option>
                                <option value={"correct"} className="correctAnswer">North of equater</option>
                                <option value={"incorrect3"}>Only madagascar</option>
                                <option value={"incorrect4"}>With Goldilocks</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is the largest type of bear?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value1 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option value={"incorrect1"}>Grizzly bears</option>
                                <option value={"incorrect2"}>Polar bears</option>
                                <option value={"correct"} className="correctAnswer">Kodiak bears</option>
                                <option value={"incorrect3"}>Black bears</option>
                                <option value={"incorrect4"}>Panda bears</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What is a bear's strongest sense?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value2 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option value={"incorrect1"}>Sight</option>
                                <option value={"incorrect2"}>Speech</option>
                                <option value={"incorrect3"}>Touch</option>
                                <option value={"incorrect4"}>Hearing</option>
                                <option value={"correct"} className="correctAnswer">Smell</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which is the only part of a bear's body that is unprotected from bee stings?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value3 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option value={"incorrect1"}>Paws</option>
                                <option value={"incorrect2"}>Butt</option>
                                <option value={"incorrect3"}>Toes</option>
                                <option value={"incorrect4"}>Eyes</option>
                                <option value={"correct"} className="correctAnswer">Nose</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>How are sun bears different from other bears?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value4 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option value={"incorrect1"}>They have very shaggy fur.</option>
                                <option value={"correct"} className="correctAnswer">They have a distinctive marking on their chest.</option>
                                <option value={"incorrect2"}>They have red fur.</option>
                                <option value={"incorrect3"}>They eat sunlight</option>
                                <option value={"incorrect4"}>They dont drink water</option>
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
Quiz3.contextType = Auth0Context

export default Quiz3;