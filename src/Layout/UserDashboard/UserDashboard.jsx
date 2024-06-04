import { NavLink, Outlet } from "react-router-dom";

const UserDashboard = () => {
    return(
        <div className="flex">
            <div className="max-w-60 max-h-screen bg-purple-400">
                <ul className="menu">
                    <li><NavLink to={'edit-biodata'}>Edit Biodata</NavLink></li>
                    <li><NavLink to={'view-biodata'}>View Biodata</NavLink></li>
                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    )
};
export default UserDashboard;