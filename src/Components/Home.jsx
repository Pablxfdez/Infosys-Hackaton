import { useState } from "react";
import Dashboard from "./Dashboard";
import SideLeftBar from "./SideBar";
import React from "react";

const Home=()=>{
    const [activeTab, setActiveTab] = useState('overview');
    return (
        <div className="flex">
            <SideLeftBar activeTab={activeTab} setActiveTab={setActiveTab} />
            <Dashboard activeTab={activeTab} setActiveTab={setActiveTab}></Dashboard>

        </div>
     
    )
}
export default Home;