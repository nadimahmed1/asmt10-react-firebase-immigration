import React from 'react';
import './Categories.css'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tourism from '../../images/tourism-vacation-satisfied-male-tourist-showing-passport-with-tickets-thumb-up-recommending-travel-company-standing-yellow-background.jpg';
import smiling from '../../images/smiling-young-happy-couple-with-suitcases-ticket-around-isolated-white.jpg';
import visitors from '../../images/visitor-visa-application-concept.jpg'
import Category from './Category/Category';

const Categories = () => {
    const categories = [
        { id: 1, img: tourism, categories: 'Family Visa', description: '' },
        { id: 2, img: smiling, categories: 'Work Visa', description: '' },
        { id: 3, img: visitors, categories: 'Tourist Visa', description: '' }
    ]
    return (
        <div className='m-5'>
            <h1 className='text-center text'>Providing Value for
                Visa Categories</h1>

            <div className='categories-container'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;