import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserDashboard = () => {
    const [isAdmin] = useAdmin();
    const {logOut} = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate('/sign-in');
        } catch (error) {
          console.error("Logout error:", error);
        }
      };
    return(
        <div className="flex">
            <div className="max-w-60 max-h-screen bg-purple-400">
                <ul className="menu">
                    {
                        isAdmin ? <>
                            <li><NavLink to={'admin-dashboard'}>Admin DashBoard</NavLink></li>
                            <li><NavLink to={'all-users'}>Manage Users</NavLink></li>
                            <li><NavLink to={'admin-dashboard'}> Approved Premium
                            </NavLink></li>
                            <li><NavLink to={'all-req'}>Approved Contact Request</NavLink></li>
                            
                        </>
                        : 
                        <>
                            {/* <li><NavLink to={'user-dashboard'}>User DashBoard</NavLink></li> */}
                            <li><NavLink to={'add-biodata'}>Add Biodata</NavLink></li>
                            {/* <li><NavLink to={'edit-biodata'}>Edit Biodata</NavLink></li> */}
                            <li><NavLink to={'view-biodata'}>View Biodata</NavLink></li>
                            <li><NavLink to={'contact-request'}> My Contact Request</NavLink></li>
                            <li><NavLink to={'favourites-biodatas'}>Favourites Biodata</NavLink></li>
                        </>
                    }

                    {/* shared navlink */}
                    <li><button onClick={handleLogout}>Logout</button></li>
                    <li><Link to={'/'}><button>Home</button></Link></li>
                    
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
};
export default UserDashboard;