import React from 'react';
import Head from 'next/head';
import './globals.css';


const ContactUs = () => {
    return (
        
        <>
        <div className="header">
        <header className="bg-white shadow-md p-4">
      <nav className="flex justify-between items-right">
        <div className="text-lg font-bold">GEN Z</div>
        <div className="flex space-x-4">
          <a href="#" className="home">Home</a>
          <a href="#" className="products">Products</a>
          <a href="#" className="contact">Contact</a>
        </div>
     {/*buttons*/}
     
     <div className="button-container">
  <button className="login py-2 border rounded-md">Log In</button>
  <button className="signup px-4 py-2 bg-blue-600 text-white border rounded-md">Sign Up</button>
</div>

      </nav>
    </header></div>
        
      {/* Top Section */}
      <section className="hero-section flex flex-col lg:flex-row items-center justify-between">
        <div className="hero-content text-center lg:text-left p-4 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4"></h1>
          
        </div>
        <div className="hero-image lg:w-1/2 p-4">
        <div className='image lg:text-right'></div>
          <img src="../../contact.jpg" className=" h-auto"  width={1400} // Set the desired width
        height={300} />
          
        </div>
      </section>
      


        
            <div className="bg-teal-800 flex items-center justify-center min-h-screen">
                <div className="bg-teal-700 p-10 rounded-lg shadow-lg w-full max-w-lg">
                   
                    <form>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="blocktext-blue    mb-2" htmlFor="first-name">First name</label>
                                <input type="text " id="first-name" className="w-full p-2  border border-gray-300 rounded" />
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
                    <div className="Contact_numbers text-center">
                        <p>Contact numbers: +94 456789123</p> 
                        </div>
                        <div className="text-white5 text-center">
                        <p>+94 123456789</p>
                        </div>
                        <div className="text-white5 text-center">
                        <p>+94 567891234</p>
                    </div>
                </div>
                 {/* Footer */}
    <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto text-center">
      <p>&copy; 2024 ICT Learning Platform. All rights reserved.</p>
      <div className="mt-4">
        <a href="#" className="mx-2">Privacy Policy</a>
        <a href="#" className="mx-2">Terms of Service</a>
      </div>
    </div>
  </footer>

            </div>
            
        </>
        
    );
   
};

export default ContactUs;
