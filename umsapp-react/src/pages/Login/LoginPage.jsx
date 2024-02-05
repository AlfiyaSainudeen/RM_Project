import React from 'react';
import './Lstyle.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import LondonLocationImg from '../../utils/images/London-location.jpg';
import ManchesterLocationImg from '../../utils/images/Manchester-location.jpg';
import LiverpoolLocationImg from '../../utils/images/Liverpool-location.jpg';

function Login() {
  return (
    <div className='contact-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'></h1>
                
        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
            <h3 className='text-center fw-semibold text-dark'>Login</h3>
                <Row className='mb-6'>
                    <Col sm={12} md={11} className='mb-3 mb-md-0'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder='User name' />
                    </Col>
                 
                </Row>
                
                <Row className='mb-6'>
                <Col sm={12} md={11}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder='Password' />
                    </Col>
                    </Row>
               
                 <br/>
            

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div>
            </div>
        </header>
{/* 
        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form'>
                <Row className='mb-6'>
                    <Col sm={12} md={11} className='mb-3 mb-md-0'>
                        <Form.Label>User Name</Form.Label>
                        <Form.Control placeholder='User name' />
                    </Col>
                 
                </Row>
                
                <Row className='mb-6'>
                <Col sm={12} md={11}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder='Password' />
                    </Col>
                    </Row>
               
                 <br/>
            

                <Button variant="danger btn-lg" type='submit'>Submit</Button>
            </Form>
        </div> */}

       
    </div>
  )
}

export default Login;