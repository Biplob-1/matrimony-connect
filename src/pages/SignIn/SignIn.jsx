import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignIn = () => {
    return(
        <div>
            <Helmet>
                <title>Shaadi || Sign In</title>
            </Helmet>
            {/* login form */}
            <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
                <div className="w-full max-w-md p-8 space-y-6 rounded-xl bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100">
                    <h1 className="text-2xl font-bold text-center">Login</h1>
                    <form noValidate="" action="" className="space-y-6">
                        <div className="space-y-1 text-sm">
                            <label htmlFor="email" className="block text-gray-600 dark:text-gray-300">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                        </div>
                        <div className="space-y-1 text-sm">
                            <label htmlFor="password" className="block text-gray-600 dark:text-gray-300">Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:border-violet-600 dark:focus:border-violet-600 focus:outline-none" />
                            <div className="flex justify-end text-xs text-gray-600 dark:text-gray-400">
                                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                            </div>
                        </div>
                        <button className="block w-full p-3 text-center rounded-md bg-violet-600 text-gray-100 dark:bg-violet-700 dark:text-gray-100 uppercase">Sign in</button>
                    </form>
                    <div className="flex items-center pt-4 space-x-1">
                        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
                        <p className="px-3 text-sm text-gray-600 dark:text-gray-400">Login with social accounts</p>
                        <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700"></div>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button aria-label="Log in with Google" className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                            </svg>
                        </button>
                    </div>
                    <p className="text-xs text-center sm:px-6 text-gray-600 dark:text-gray-400">Don't have an account? please 
                    <Link to={'/sign-up'}><button className="btn btn-link font-bold">Sign Up</button></Link>
                    </p>
                </div>
            </div>
        </div>
    )
};
export default SignIn;