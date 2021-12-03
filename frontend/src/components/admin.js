import React from "react";
import TopBoard from "./adminDashboard/topBoard";
import BottomBoard from "./adminDashboard/bottomBoard";

const Admin = ({ userProfile }) => {


    return (
        <div className="admin">
        <h1>Admin</h1>
            <TopBoard />
            <BottomBoard />
        </div>
    )
}

export default Admin