import { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { fetchSignInMethodsForEmail, getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const auth = getAuth();

    const onSubmit = async (data) => {
        setErrorMessage(null);
        try {
            const existingEmail = await fetchSignInMethodsForEmail(auth, data.email);
            if (existingEmail && existingEmail.length > 0) {
                setErrorMessage('Email already exists. Please use a different email.');
                return;
            }
            const result = await createUser(data.email, data.password, data.name, data.imageUrl);
            const loggedUser = result.user;
            console.log(loggedUser);
        } catch (error) {
            if (error instanceof FirebaseError && error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email already exists. Please use a different email.');
            } else {
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div>
            <Helmet>
                <title>Shaadi || Sign Up</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="fullName" className="block text-gray-600 dark:text-gray-300">Full Name</label>
                            <input
                                type="text"
                                {...register("name", { required: "Full Name is required" })}
                                id="fullName"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none"
                            />
                            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                {...register("email", { 
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }
                                })}
                                id="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none"
                            />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="imageUrl" className="block text-gray-600 dark:text-gray-300">Image URL</label>
                            <input
                                type="url"
                                {...register("imageUrl", { required: "Image URL is required" })}
                                id="imageUrl"
                                placeholder="Image URL"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none"
                            />
                            {errors.imageUrl && <p className="text-red-600">{errors.imageUrl.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                {...register("password", { 
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long"
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                                        message: "Password must contain at least one uppercase letter and one lowercase letter"
                                    }
                                })}
                                id="password"
                                placeholder="Password"
                                className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none"
                            />
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                            <div className="flex justify-end text-xs text-gray-600 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                        <button className="block w-full p-3 text-center rounded-md bg-violet-600 text-gray-100 dark:bg-violet-700 dark:text-gray-100 uppercase">Sign Up</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 text-gray-600 dark:text-gray-400">Already have an account? Please
                        <Link to={'/sign-in'}><button className="btn btn-link font-bold">Sign In</button></Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
