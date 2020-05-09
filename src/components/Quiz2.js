import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0, Auth0Context } from "../react-auth0-spa";




class Quiz2 extends React.Component {
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
            quizResult.quizType = 'bike'
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
                    <h1 className="Quiz quizTitle"> Bicycle Knowledge</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Where were bicycles first introduced?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option value={"incorrect1"}>Germany</option>
                                <option value={"correct"} className="correctAnswer">Europe</option>
                                <option value={"incorrect2"}>US</option>
                                <option value={"incorrect3"}>Brazil</option>
                                <option value={"incorrect4"}>China</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What's the core of a bicycle called?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value1 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option value={"incorrect1"}>Bracket</option>
                                <option value={"incorrect2"}>Pedal</option>
                                <option value={"correct"} className="correctAnswer">Frame</option>
                                <option value={"incorrect3"}>Wheel</option>
                                <option value={"incorrect4"}>Horn</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What does the front fork hold?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value2 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option value={"incorrect4"}>The back wheel</option>
                                <option value={"correct"} className="correctAnswer">The front wheel</option>
                                <option value={"incorrect1"}>The chain</option>
                                <option value={"incorrect2"}>The pedals</option>
                                <option value={"incorrect3"}>The back</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What do bicycles use to reduce friction?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value3 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option value={"incorrect1"}>Rubber</option>
                                <option value={"incorrect2"}>Pedals</option>
                                <option value={"incorrect3"}>Brakes</option>
                                <option value={"incorrect4"}>Air resistance</option>
                                <option value={"correct"} className="correctAnswer">Ball bearings</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which bicycle part doesn't have ball bearings?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value4 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option value={"incorrect1"}>Rear hub</option>
                                <option value={"incorrect2"}>Front hub</option>
                                <option value={"incorrect3"}>Pedals</option>
                                <option value={"correct"} className="correctAnswer">Gear shift</option>
                                <option value={"incorrect4"}>Rear wheel</option>
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
Quiz2.contextType = Auth0Context

export default Quiz2;