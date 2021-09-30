import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import axios from "axios";
import { Form, Button, Alert, Image, Col, Row, Container } from "react-bootstrap";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
      });
    
    const { username, password1, password2 } = signUpData;
    const history = useHistory();
    const [errors, setErrors] = useState({});

    /**
     * Copy signUpData so that we update only the value that has changed
     * And build a key value pair:
     * key = name attribute value
     * value = input field value
     * Then pass this to the setSignUpData function to update the state
    */
    const handleChange = (event) => {
      setSignUpData({
        ...signUpData,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/signin");
      } catch (err) {
        setErrors(err.response?.data);
     }
    };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-0 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
            <h1 className={styles.Header}>sign up</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label className="d-none">Username</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password1">
                    <Form.Label className="d-none">Password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Password"
                        name="password1"
                        value={password1}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password1?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}

                <Form.Group controlId="password2">
                    <Form.Label className="d-none">Confirm password</Form.Label>
                    <Form.Control
                        className={styles.Input}
                        type="password"
                        placeholder="Confirm password"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password2?.map((message, idx) => (
                  <Alert key={idx} variant="warning">
                    {message}
                  </Alert>
                ))}

                
                <Button
                    className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                    type="submit">Sign up</Button>

                {errors.non_field_errors?.map((message, idx) => (
                  <Alert key={idx} variant="warning" className="mt-3">
                    {message}
                  </Alert>
                ))}
            </Form>

        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-0 p-md-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://res.cloudinary.com/drlqahj5d/image/upload/v1630595819/hero2_ylztrr.jpg"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;