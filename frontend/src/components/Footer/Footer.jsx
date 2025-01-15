import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">
                        {/* Contact Section */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="text-xl font-semibold mb-4">Get in Touch</h5>
                            <p className="mb-2">Address: 123 Main St, Anytown, USA 12345</p>
                            <p className="mb-2">Phone: 555-555-5555</p>
                            <p>
                                Email: <Link href="mailto:info@example.com" className="text-blue-400 hover:underline">info@example.com</Link>
                            </p>
                        </div>
                        {/* Social Media Section */}
                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
                            <div className="flex space-x-4">
                                <Link href="#" className="text-white hover:text-blue-600"><FontAwesomeIcon icon={faFacebook} /></Link>
                                <Link href="#" className="text-white hover:text-blue-400"><FontAwesomeIcon icon={faTwitter} /></Link>
                                <Link href="#" className="text-white hover:text-pink-500"><FontAwesomeIcon icon={faInstagram} /></Link>
                            </div>
                        </div>
                        {/* Quick Links Section */}
                        <div className="w-full md:w-1/3">
                            <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
                            <ul>
                                <li><Link href="#" className="text-white hover:text-gray-400">Home</Link></li>
                                <li><Link href="#" className="text-white hover:text-gray-400">About</Link></li>
                                <li><Link href="#" className="text-white hover:text-gray-400">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
