import React from 'react';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Shaadi || About Us</title>
            </Helmet>
            <div className="container mx-auto p-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-4 text-center">About Us</h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Welcome to Shaadi, your trusted platform for finding the perfect match. Our mission is to connect people from all over the world, helping them find love and companionship.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Founded in 2021, Shaadi has grown to become a leading matrimonial site, dedicated to bringing together singles from various backgrounds. Our team is committed to providing a safe and secure environment for our members, ensuring that their journey to find a partner is as smooth and enjoyable as possible.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Our user-friendly platform allows members to create detailed profiles, search for potential matches based on specific criteria, and communicate with each other through a secure messaging system. We continuously work on improving our services and features to enhance your experience and increase your chances of finding the right match.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        At Shaadi, we believe in the power of love and the importance of family. Our goal is to help you find a partner who shares your values, interests, and dreams, so you can build a strong and lasting relationship together.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        Thank you for choosing Shaadi. We are honored to be a part of your journey and look forward to helping you find your perfect match.
                    </p>
                    <div className="text-center mt-8">
                        <img src="team-photo-url.jpg" alt="Our Team" className="w-1/2 mx-auto rounded-lg shadow-md"/>
                    </div>
                    <p className="text-gray-700 text-lg mt-4 text-center">
                        Sincerely,<br/>
                        The Shaadi Team
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
