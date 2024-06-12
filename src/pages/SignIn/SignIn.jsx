import { useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProvider";
import { getAuth } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const auth = getAuth();

    const onSubmit = async (data) => {
        setErrorMessage(null);
        try {
            await signIn(data.email, data.password);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Registered Successfully ",
                showConfirmButton: false,
                timer: 1500
              }).then(() => {
                navigate('/')
              })
        } catch (error) {
            if (error instanceof FirebaseError && error.code === 'auth/user-not-found') {
                setErrorMessage('User not found. Please check your email.');
            } else if (error instanceof FirebaseError && error.code === 'auth/wrong-password') {
                setErrorMessage('Invalid password. Please try again.');
            } else {
                setErrorMessage(error.message);
            }
        }
    };

    return (
        <div>
            <Helmet>
                <title>Shaadi || Sign In</title>
            </Helmet>
            {/* login form */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email</label>
                            <input type="email" {...register("email", { required: "Email is required" })} id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800  focus:border-violet-600  focus:outline-none" />
                            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">Password</label>
                            <input type="password" {...register("password", { required: "Password is required" })} id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800  focus:border-violet-600 focus:outline-none" />
                            {errors.password && <p className="text-red-600">{errors.password.message}</p>}
                            <div className="flex justify-end text-xs text-gray-600 ">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                        <button type="submit" className="block w-full p-3 text-center rounded-md bg-violet-600 text-gray-100 uppercase">Sign in</button>
                    </form>
                    <SocialLogin></SocialLogin>
                    <p className="text-xs text-center sm:px-6 text-gray-600">Don't have an account? please 
                    <Link to={'/sign-up'}><button className="btn btn-link font-bold">Sign Up</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default SignIn;
