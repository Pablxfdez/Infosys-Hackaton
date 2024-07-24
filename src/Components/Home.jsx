import Dashboard from "./Dashboard";
import SideLeftBar from "./SideBar";
import Figgen from "./Figgen";
const Home=()=>{
    return (
        <div className="flex">
            <SideLeftBar></SideLeftBar>
            <Dashboard></Dashboard>
            <Figgen></Figgen>
        </div>
     
    )
}
export default Home;