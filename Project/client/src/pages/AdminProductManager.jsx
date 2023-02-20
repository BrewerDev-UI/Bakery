import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const AdminProductManager = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [products, setProducts] = useState([])
    const [deleteToggle, setDeleteToggle] = useState('')
    const { id } = useParams();


    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8000/api/product`, { title, price, description, image })
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err));
        setTitle("");
        setPrice("");
        setDescription("");
        setImage("");
    };

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    })

    const deleteProduct = (id, e) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setDeleteToggle(!deleteToggle)
            })
            .catch(err => console.log(err))
    }


    return (
        <>
            <div className='text-center mt-5'>
                <h3 className='m-4'>Product Manager</h3>
                <form onSubmit={handleSubmit}>
                    <div className=''>
                        <label>Title:</label>
                        <input type="text" onChange={(e) => { setTitle(e.target.value) }} value={title} />
                    </div>
                    <div className=''>
                        <label>Price:</label>
                        <input type="number" onChange={(e) => { setPrice(e.target.value) }} value={price} />
                    </div>
                    <div className=''>
                        <label>Description:</label>
                        <input type="text" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                    </div>
                    <div className=''>
                        <label>Image Link:</label>
                        <input type="text" onChange={(e) => { setImage(e.target.value) }} value={image} />
                    </div>
                    <div className=''>
                        <button type='submit'>Create</button>
                    </div>
                </form>
            </div>
            <h3>All Products:</h3>
            <div className='d-flex grid overflow-auto'>

                {products.map((product, index) => {
                    return (
                        <div key={index}>
                            <img className='rounded' src={`${product.image}`} height={100} width={100} alt="bread image" />
                            <p className='m-3'>{product.title}</p>
                            <p className='m-3'>{product.price}</p>
                            <p className='m-3'>{product.description}</p>
                            <button className='btn btn-outline-danger m-2' onClick={(e) => { deleteProduct(product._id, e) }}> Delete</button>
                            <button className='btn btn-outline-info m-2'> <Link to={`/admin/update/${product._id}`}>Update</Link></button>
                        </div>
                    )
                })

                }
            </div>


        </>
    )
}

export default AdminProductManager