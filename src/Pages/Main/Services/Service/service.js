import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './Service.css'

const Service = ({ service }) => {
    const { city, id, description, img } = service;
    return (
        <div style={{ width: '100%' }} className='service'>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img style={{ width: '100%' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{city}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;