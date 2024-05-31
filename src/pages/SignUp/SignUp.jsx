import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {
    return(
        <div>
            <Helmet>
                <title>Shaadi || Sign Up</title>
            </Helmet>
            {/* sign up form */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Register</h1>
                    <form noValidate="" action="" className="space-y-6">
                    <div className="space-y-1 text-sm">
                            <label htmlFor="fullName" className="block text-gray-600 dark:text-gray-300">Full Name</label>
                            <input type="text" name="fullName" id="username" placeholder="Your Name" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email</label>
                            <input type="email" name="email" id="username" placeholder="email" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="imageURL" className="block text-gray-600 dark:text-gray-300">Image URL</label>
                            <input type="url" name="imageURL" id="imageURL" placeholder="Image URL" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                            <div className="flex justify-end text-xs text-gray-600 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-md bg-violet-600 text-gray-100 dark:bg-violet-700 dark:text-gray-100 uppercase">Sign Up</button>
                    </form>
                    <p className="text-xs text-center sm:px-6 text-gray-600 dark:text-gray-400">Already have an account? please
                    <Link to={'/sign-in'}><button className="btn btn-link font-bold">Sign In</button></Link>
                        {/* <a rel="noopener noreferrer" href="#" className="underline text-gray-800 dark:text-gray-100">Sign In</a> */}
                    </p>
                </div>
            </div>
        </div>
    )
};
export default SignUp;