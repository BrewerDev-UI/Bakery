import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from './Card'

const Featured = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <div className='featuredTop'>
                <h3>Weekly Bake</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='featuredBottom'>
                <div className='d-flex grid overflow-auto'>

                    {products.map((product, index) => {
                        return (
                            <div key={index}>
                                <img className='rounded m-3' src={`${product.image}`} height={100} width={100} alt="bread image" />
                                <p className='m-3'>{product.title}</p>
                                <p className='m-3'>${product.price}</p>
                                {/* <p className='m-3'>{product.description}</p> */}
                                <button>Add to Cart</button>

                            </div>
                        )
                    })

                    }
                </div>

            </div>
        </div>
    )
}

export default Featured