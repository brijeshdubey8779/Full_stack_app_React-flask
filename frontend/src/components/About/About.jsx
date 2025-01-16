import React from 'react'

function About() {
    return (
        <>
            {/* A simple about page with few images and text */}
            <div className="bg-gray-50 min-h-screen py-12 px-6 lg:px-20">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        About Us
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        We are passionate about building modern, scalable web applications with
                        the latest technologies. Our team is dedicated to delivering high-quality
                        and innovative solutions that help businesses grow and succeed.
                    </p>

                    <div className="mt-10 flex justify-center gap-16">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Our Mission</h2>
                            <p className="mt-2 text-gray-600">
                                We aim to empower businesses through technology by providing
                                innovative solutions that make a positive impact in the digital world.
                            </p>
                        </div>
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-800">Our Vision</h2>
                            <p className="mt-2 text-gray-600">
                                To be a leader in delivering cutting-edge software solutions that
                                transform industries and improve lives.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800">Our Team</h3>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
                                <img
                                    className="mx-auto h-24 w-24 rounded-full"
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">John Doe</h4>
                                <p className="mt-2 text-gray-600">CEO & Founder</p>
                            </div>
                            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
                                <img
                                    className="mx-auto h-24 w-24 rounded-full"
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">Jane Smith</h4>
                                <p className="mt-2 text-gray-600">CTO</p>
                            </div>
                            <div className="text-center bg-gray-100 p-6 rounded-lg shadow-lg">
                                <img
                                    className="mx-auto h-24 w-24 rounded-full"
                                    src="https://via.placeholder.com/150"
                                    alt="Team Member"
                                />
                                <h4 className="mt-4 text-lg font-semibold text-gray-800">Alex Johnson</h4>
                                <p className="mt-2 text-gray-600">Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About