import React from 'react';
import Head from 'next/head';
import './globals.css';
import Header from './Header';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome


  

const ContactUs = () => {  
    return (
        <>
        <div>
            <Header />
            
        </div>
            {/* Top Section */}
            <section className="hero-section flex flex-col lg:flex-row items-center justify-between">
                <div className="hero-content text-center lg:text-left p-4 lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4"></h1>
                </div>
                <div className="hero-image lg:w-1/2 p-4">
                    <div className='image lg:text-right'></div>
                    <img src="../../contact.jpg" className=" h-auto" width={1600} height={250} />
                </div>
            </section>

            <div className="bg-teal-800 flex items-center justify-center min-h-screen">
                <div className="bg-teal-700 p-10 rounded-lg shadow-lg w-full max-w-lg">
                    <form>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className='phara' >
                            <p>"At GenZedu, we’re here to help you make the most of your learning journey. Whether you’re a student seeking guidance, an instructor with a question, or a curious visitor wanting to learn more about our virtual environment, our team is ready to assist. Reach out to us with any inquiries, suggestions, or feedback, and let us support you in creating a seamless online learning experience."</p>
                            </div>
                                <div className='last'><p>◉ Your success is our priority, connect with us, and let's grow together!!!</p></div> 
                                <div className="Contact_numbers text-center">
                                    <p>Contact numbers: +94 456789123</p> 
                                </div>
                                <div className="text-white5 text-center">
                                    <p>+94 123456789</p>
                                </div>
                                <div className="text-white5 text-center">
                                    <p>+94 567891234</p>
                                </div>
                                <div className='email text-justify'>
                                    <p>E-mail: genzedu@gmail.com</p>
                                </div>
                            <div>
                                <label className="blocktext-blue mb-2" htmlFor="first-name"> Name</label>
                                <input type="text" id="first-name" className="w-full30 p-2 border border-gray-300 rounded" />
                            </div>
                           
                        </div>
                        <div className="mb-4">
                            <label className="blocktext-white mb-2" htmlFor="email">E-mail </label>
                            <input type="email" id="email" className="w-full31 p-2 border border-gray-300 rounded" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-white mb-2" htmlFor="message">Message</label>
                            <textarea id="message" className="w-full32 p-2 border border-gray-300 rounded h-32"></textarea>
                        </div>
                        <div className="mb-4">
                            <button type="submit" className="button bg-blue-800 text-white py-2 rounded">Send message</button>
                        </div>
                    </form>
                    <div className="flex justify-center space-x-4 mb-4">
                        <a href="#" className="text-white1"><i className="fab fa-facebook fa-2x"></i></a>
                        <a href="#" className="text-white2"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="#" className="text-white3"><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                    
                    
                </div>
                
                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                <div>
            
            <Footer />
        </div>
                </footer>
            </div>
        </>
    );
};

export default ContactUs;
