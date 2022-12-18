import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { id, img, categories, description } = category;
    return (
        <div style={{ width: '100%' }} className='service'>
            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img style={{ width: '100%' }} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{categories}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>
    );
};

export default Category;