//Header.js
import React from 'react';
import {Container, Row} from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

//The Header component which will be main ui of game
function Background() {
    return (
        <Container fluid>
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
        </Container>
    );
  }

//Exports Background Component to be used in app.js
export default Background;