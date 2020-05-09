import React, { Component } from "react";
import "../assets/style.css"
import "../assets/quiz.css"
import "../views/Quiz"
import { Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
// import { Link } from "react-router-dom";
import API from '../utils/API';
import { useAuth0, Auth0Context } from "../react-auth0-spa";




class Quiz1 extends React.Component {
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
            quizResult.quizType = 'milk'
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
                    <h1 className="Quiz quizTitle">Its Organic & Non GMO....</h1>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>What about milk is true?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value} onChange={this.handleChange}>
                                <option value={"incorrect1"}>Milk will never go bad</option>
                                <option value={"incorrect2"}>Nobody can drink milk</option>
                                <option value={"correct"} className="correctAnswer">To make one gallon of ice cream, it takes 12 pounds of whole milk</option>
                                <option value={"incorrect3"}>Regular milk is not as healthy as organic regular milk</option>
                                <option value={"incorrect4"}>Only whole milk contains vitamin D</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which truthfully describes milk?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value1 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value1} onChange={this.handleChange1}>
                                <option value={"incorrect1"}>Flavored milk isn’t good for you due to added sugar</option>
                                <option value={"correct"} className="correctAnswer">For the price, milk supplies more nutrients than juice</option>
                                <option value={"incorrect2"}>Soy, almond, coconut and rice beverages are healthier than real dairy milk</option>
                                <option value={"incorrect3"}>People who are sensitive to lactose should avoid milk and all dairy foods like cheese and yogurt</option>
                                <option value={"incorrect4"}>Farmers disregard the environment and use large amounts of pesticides</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which of the following is true?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value2 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value2} onChange={this.handleChange2}>
                                <option value={"incorrect1"}>Dairy cows are given unnecessary antibiotics, transferring antibiotics to the milk we drink</option>
                                <option value={"incorrect2"}>People should avoid milk because of hormones</option>
                                <option value={"incorrect3"}>Milk is made of solid iron</option>
                                <option value={"correct"} className="correctAnswer">Pasteurized milk offers more health benefits than unpasteurized milk</option>
                                <option value={"incorrect4"}>Milk can be found in rocks!</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Which statement about milk is true?</Label>
                        <Col sm={10}>
                            <Input style={this.state.value3 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value3} onChange={this.handleChange3}>
                                <option value={"incorrect1"}>Milk builds strong bones</option>
                                <option value={"correct"} className="correctAnswer">UK dairy farmers produce 14 billion litres of milk each year</option>
                                <option value={"incorrect2"}>Drinking milk can help you lose weight</option>
                                <option value={"incorrect3"}>Chicken contains milk!</option>
                                <option value={"incorrect4"}>Milk is “nature’s perfect food.”</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Milk...</Label>
                        <Col sm={10}>
                            <Input style={this.state.value4 === 'correct' ? style.correct : {}} type="select" name="select" id="exampleSelect" value={this.state.value4} onChange={this.handleChange4}>
                                <option value={"incorrect1"}>Milk is normally green</option>
                                <option value={"incorrect2"}>Milk cannot conduct electricity</option>
                                <option value={"correct"} className="correctAnswer">It contains 90% water which helps to rehydrate the body</option>
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

Quiz1.contextType = Auth0Context

export default Quiz1;