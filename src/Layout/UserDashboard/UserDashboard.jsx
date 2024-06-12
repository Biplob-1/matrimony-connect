import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
    const isAdmin = true;
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
                            <li><NavLink to={'admin-dashboard'}>Approved Contact Request</NavLink></li>
                            
                        </>
                        : 
                        <>
                            <li><NavLink to={'user-dashboard'}>User DashBoard</NavLink></li>
                            <li><NavLink to={'edit-biodata'}>Edit Biodata</NavLink></li>
                            <li><NavLink to={'view-biodata'}>View Biodata</NavLink></li>
                            <li><NavLink to={'view-biodata'}> My Contact Request</NavLink></li>
                            <li><NavLink to={'view-biodata'}>Favourites Biodata</NavLink></li>
                        </>
                    }

                    {/* shared navlink */}
                    <li><NavLink to={'admin-dashboard'}>Logout</NavLink></li>
                    
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
};
export default UserDashboard;