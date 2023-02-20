import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerTop">
                <div className="footerItem">
                    <h5>Links</h5>
                    <span>FAQ</span>
                    <span>Recipes</span>
                    <span><Link className='links' to="/admin">Admin</Link></span>

                </div>
                <div className="footerItem">
                    <h5>About</h5>
                    <span className='footerSpan'>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
                <div className="footerItem">
                    <h5>Contact</h5>
                    <span className='footerSpan'>
                        Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
                        amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
                        ut labore etdolore.
                    </span>
                </div>
            </div>
            <div className="footerBottom">
                <div className="fBleft">
                    <span className="">All You Knead Bakery</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Footer