import React    from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form, Accordion, ListGroup, Badge, Nav, Tab, Jumbotron } from 'react-bootstrap';

import '@sass-components/preloader.scss';

const Preloader = (props) => {
    return (
        <div className="preloader" id="preloader">
        	<div className='preloader-inner'>
        	 	<div className='container-ball'>
                    <div>
        	 		    <div className="ball"></div>
        	 		    <div className="shadow"></div>
        	 	    </div>       
        	 	    <div>
        	 		    <div className="ball" style={{ animationDelay: '0.3s' }}></div>
        	 		    <div className="shadow" style={{ animationDelay: '0.3s' }}></div>
        	 	    </div>
        	 	    <div>
        	 		    <div className="ball" style={{ animationDelay: '0.6s' }}></div>
        	 		    <div className="shadow" style={{ animationDelay: '0.6s' }}></div>
        	 	    </div>
                </div>  
                <div className='container-text'> 
                    <p>
                        Espera un momento...
                        <span className='message'>Estamos procesando</span>
                    </p>
                </div>
        	</div>
        </div>
    )
}

export default Preloader;