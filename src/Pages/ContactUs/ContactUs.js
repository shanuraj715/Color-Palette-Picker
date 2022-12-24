import React from 'react'
import './contactus.css'
import Helmet from 'react-helmet'

function ContactUs() {
    return (
        <>
        <Helmet>
            <title>Conatct us Page</title>
        </Helmet>
            <div className="contactPage-container">
                <div className="contact-left">
                    <div className="contact-image-cont">
                        <img src={require('../../assets/images/shanu.jpg')} alt="" />
                    </div>

                    <h3>Developed By</h3>
                    <h2>Shanu Raj</h2>
                    <div className="social-icons-cont">
                        <a href="https://www.instagram.com/shanu_the_web_dev/" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="mailto://someemail@example.com">
                            <i className="fa-solid fa-at"></i>
                        </a>
                        <a href="https://github.com/shanuraj715" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-title">Contact Us</p>
                    <p className="contact-description">
                        <span>For any query please mail us to </span>
                        <strong>someemail@example.com</strong>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactUs