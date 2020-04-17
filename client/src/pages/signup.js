import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
import Axios from "axios";

function Users() {
    const [setUsers] = useState([])
    const [formObject, setFormObject] = useState({
        main: "",
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: ""
    })

    // useEffect(() => {
    //     getUsers()
    // }, [])

    // function getUsers() {
    //     API.getUsers()
    //         .then(res =>
    //             setUsers(res.data)
    //         )
    //         .catch(err => console.log(err));
    // };
    function handleInputChange(event) {
        console.log("we are typing", event.target.value)
        console.log("qho to update", event.target.name)
        const { name, value } = event.target;
        setFormObject({ ...formObject, [event.target.name]: value })
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log('about to save !!!!')
        axios.post("http://localhost:8080/api/users/register", formObject).then(function (data) {
            console.log(data)
        })

        // if (formObject.first_name && formObject.last_name && formObject.username) {
        //     API.saveUser({
        //         first_name: formObject.first_name,
        //         last_name: formObject.last_name,
        //         email: formObject.email,
        //         username: formObject.username,
        //         password: formObject.password
        //     })
        //         .then(res => console.log("response from form", res))
        //         .catch(err => console.log(err));
        // }
    };


    console.log('this is my state!', formObject)
    return (
        <Container fluid>
            <Row>

                <h1>Sign Up Form</h1>

            </Row>
            <Row>
                <form>
                    <p> FIRST NAME:</p>
                    <input name='firstName' onChange={handleInputChange}></input>
                    <p> LAST NAME:</p>
                    <input name='lastName' onChange={handleInputChange}></input>
                    <p> USER NAME:</p>
                    <input name='userName' onChange={handleInputChange}></input>
                    <p> EMAIL:</p>
                    <input name='email' onChange={handleInputChange}></input>
                    <p> PASSWORD:</p>
                    <input name='password' onChange={handleInputChange}></input>
                    <button onClick={handleFormSubmit}>Save Button</button>
                </form>
            </Row>
        </Container>
    )
};

export default Users
