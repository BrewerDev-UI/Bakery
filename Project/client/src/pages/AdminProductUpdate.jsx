import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminProductUpdate = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then((res) => {
                setTitle(res.data.title)
                setPrice(res.data.price)
                setDescription(res.data.description)
                setImage(res.data.image)

            })
            .catch(err => console.log(err))
    }, [id])

    const updateProduct = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/product/${id}`, { title, price, description })
            .then(res => {
                console.log(res)
                navigate('/admin/manager')
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='text-center mt-5'>
            <h3 className='m-4'>Product Manager</h3>
            <form onSubmit={updateProduct}>
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
                    <button type='submit'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default AdminProductUpdate