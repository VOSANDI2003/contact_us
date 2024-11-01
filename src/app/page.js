import React from 'react';
import Head from 'next/head';
import './globals.css';


const ContactUs = () => {
    return (
        <>
            <Head>
                <title>Contact Us</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="bg-teal-800 flex items-center justify-center min-h-screen">
                <div className="bg-teal-700 p-10 rounded-lg shadow-lg w-full max-w-lg">
                    <h1 className="text-4xl font-bold text-white mb-6">CONTACT US</h1>
                    <form>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="blocktext-blue   mb-2" htmlFor="first-name">First name</label>
                                <input type="text" id="first-name" className="w-full p-2  border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="blocktext-white mb-2" htmlFor="last-name">Last name</label>
                                <input type="text" id="last-name" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="blocktext-white mb-2" htmlFor="email">Email address</label>
                            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="blocktext-white mb-2" htmlFor="message">Message</label>
                            <textarea id="message" className="w-full p-2 border border-gray-300 rounded h-32"></textarea>
                        </div>
                        
                        <div className="mb-4">
                            <button type="submit" className="w-fullbg-blue-800 text-white py-2 rounded">Send message</button>
                        </div>
                    </form>
                    <div className="flexjustify-center space-x-4 mb-4">
                        <a href="#" className="text-white1"><i className="fab fa-facebook"></i> Facebook</a>
                        <a href="#" className="text-white2"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#" className="text-white3"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                    <div className="text-white text-center">
                        <p>Contact numbers:</p> 
                        <p>+94 123456789</p>
                        </div>
                        <div className="text-white text-center">
                        <p>+94 567891234</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactUs;
