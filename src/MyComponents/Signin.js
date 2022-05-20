import React from 'react';
import { Signup } from "./Signup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import {
  Card,
  CardBody,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
  Button
} from 'reactstrap';
export const Signin = () => {
    const [focus1, setFocus1] = React.useState(false);
    const [focus2, setFocus2] = React.useState(false);
  return (
    <div className="form">
      <div className="d-flex justify-content-center mt-5">
      <Card className="shadow">
          <CardBody>
  
            <div>
              <h1>Sign In</h1>
            </div>
            <FormGroup className={focus1 ? "focused" : ""}>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText id="basic-addon1">@</InputGroupText>
                </InputGroupAddon>
                <Input
                  onFocus={() => setFocus1(true)}
                  onBlur={() => setFocus1(false)}
                  aria-describedby="basic-addon1"
                  aria-label="Username"
                  placeholder="Username"
                  type="text"
                ></Input>
              </InputGroup>
              </FormGroup>
              <FormGroup className={focus2 ? "focused" : ""}>
                <InputGroup>
                  <Input
                    onFocus={() => setFocus2(true)}
                    onBlur={() => setFocus2(false)}
                    aria-describedby="basic-addon2"
                    aria-label="Password"
                    placeholder="******"
                    type="password"
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText type="password" id="basic-addon2">Password</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </FormGroup>
            
            <div className="d-flex justify-content-center mt-3 login_container">
                <Col className="collapse-close" xs="6">
                  <Link to="/signup">
                    <Button block color="success" size="lg">
                      <span className="btn-inner--icon">
                        Sign Up
                      </span>
                    </Button>
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                    <Button block color="primary" size="lg">
                      <span className="btn-inner--icon">
                        <i className="ni ni-atom" />Login
                      </span>
                    </Button>
                </Col> `
              </div>                            
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
