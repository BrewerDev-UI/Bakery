import React, { useState } from "react";
import { Link } from 'react-router-dom'
import '../App.css';
// import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
    const [open, setOpen] = useState(false)
    // const products = useSelector((state) => state.cart.products);

    return (
        <div className='navbar'>
            <div className='wrapperNav'>
                <div className='leftNav'>
                    <Link className='links' to="/">Home</Link>
                    <Link className='links' to="/recipes">Recipes</Link>
                    <Link className='links' to="/about ">About Us</Link>
                </div>
                <div className='centerNav'>
                    <h1>All You Knead Bakery</h1>

                </div>
                <div className='rightNav'>
                    <Link className='links' to="/">Contact</Link>
                    {/* <div className="cartIcon" onClick={() => setOpen(!open)}>
                        <ShoppingCartOutlinedIcon />
                        <span className="cartIconNum">{products.length}</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default NavBar