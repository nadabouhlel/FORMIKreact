

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "@material-ui/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select from './components/Select'
import Card from './components/Card'

const LoginSchema = Yup.object().shape({
email: Yup.string()
	.email("Invalid email address format")
	.required("Email is required"),
password: Yup.string()
	.min(3, "Password must be 3 characters at minimum")
	.required("Password is required"),
});

class App extends React.Component {
render() {
	return (
	<div className="container">
		<div className="row">
		<div className="col-lg-12">
			<Formik
			initialValues={{ email: "", password: "" }}
			validationSchema={LoginSchema}
			onSubmit={(values) => {
				console.log(values);
				alert("Form is validated! Submitting the form...");
			}}
			>
			{({ touched, errors, isSubmitting, values }) =>
				!isSubmitting ? (
				<div>
					<div className="row mb-5">
					<div className="col-lg-12 text-center">
						<h1 className="mt-5">Login Form</h1>
					</div>
					</div>
 


					<Container>
						<Row>
						<Col>
						<Card/>
					put text rocket here
					</Col>
{/* **************************************************************************************** */}

                        <Col xs={3}>	
						<Form>
					
					<div className="form-group">
						<Field
						type="text"
						name="name"
						placeholder="Your name*"
						autocomplete="off"
						className={`mt-2 form-control
						${touched.name && errors.name ? "is-invalid" : ""}`}
						/>
					</div>

					<div className="form-group">
				
						<Field
						type="text"
						name="Lastname"
						placeholder="Last name*"
						className={`mt-2 form-control
						${
							touched.Lastname && errors.Lastname
							? "is-invalid"
							: ""
						}`}
						/>
					</div>

			
					
					<div className="form-group">
                        
                        <Field
                          type="password"
                          name="password"
                          placeholder="password*"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="password"
                          className="invalid-feedback"
                        />
                      </div>

					  <div className="form-group">
                        
                        <Field
                          type="passwordconfirm"
                          name="passwordconfirm"
                          placeholder="confirm password*"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="passwordconfirm"
                          className="invalid-feedback"
                        />
                      </div>
					 
					

					
					</Form>
					</Col>

					{/* ***********************************************************/}
					<Col>
					
					<div className="form-group">
                        
                        <Field
                          type="email"
                          name="email"
                          placeholder="Your email*"
                          autocomplete="off"
                          className={`mt-2 form-control
                          ${touched.email && errors.email ? "is-invalid" : ""}`}
                        />
  
                        <ErrorMessage
                          component="div"
                          name="email"
                          className="invalid-feedback"
                        />
                      </div>
					  
					<div className="form-group">
				
						<Field
						type="phone"
						name="phone"
						placeholder="Your phone*"
						className={`mt-2 form-control
						${
							touched.Lastname && errors.Lastname
							? "is-invalid"
							: ""
						}`}
						/>
					</div>




					<div className="form-group">
                        
                        <Select />
						
                      </div>



					  <div className="form-group">
                        
                        <Field
                          type="text"
                          name="activity"
                          placeholder="Enter your activity*"
                          className={`mt-2 form-control
                          ${
                            touched.password && errors.password
                              ? "is-invalid"
                              : ""
                          }`}
                        />
                        <ErrorMessage
                          component="div"
                          name="pactivity"
                          className="invalid-feedback"
                        />
                      </div>
					 
					

					<button
						type="submit"
						className="btn btn-primary btn-block mt-4"
					>
						Submit
					</button>
					
					
					
							</Col>
						</Row>
					</Container>





					
				</div>
				) : (
				<div>
					<h1 className="p-3 mt-5">Form Submitted</h1>

					<div className="alert alert-success mt-3">
					Thank for your connecting with us. Here's what we got from
					you !
					</div>
					<ul className="list-group">
					<li className="list-group-item">Email: {values.email}</li>
					<li className="list-group-item">
						Password: {values.password}
					</li>
					</ul>
				</div>
				)
			}
			</Formik>
		</div>
		</div>
	</div>
	);
}
}

export default App;
