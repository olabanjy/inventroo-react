import React from "react";
import {
  Switch,
  Route,
  NavLink,
  useHistory
} from "react-router-dom";
import MainSideBar from "../components/MainSideBar";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import TopNav from "../components/TopNav";

import {useSelector} from 'react-redux';
import {notify} from '../components/Toast';
import {routes} from '../components/routes/AdminRoutes'

const AdminDashboard = () => {
  const history = useHistory();
  const { token} = useSelector((state) => state.auth);

  if(!token){
    notify('error',"Authentication Required!!");
    history.push("/login");
  }

    return (
        <>
            <TopNav/>
            <Nav/>

        <div className="app-content content">
      <div className="content-wrapper">
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
              </Switch>
              </div>
              </div>

      </>
     );
}

export default AdminDashboard;
