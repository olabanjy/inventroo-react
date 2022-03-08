import React,{useEffect} from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';
import {
  Switch,
  Route,
} from "react-router-dom";
import {
  Home,
  Register,
  Login,
  AdminDashboard,
  EmailConfirmation,
  Confirm,
  AddUserRole,
  UserRoles,
  OrganizationProfile,
  PageNotFound} from './pages'

export default function App() {

    return (

      <div>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/dashboard">
            <AdminDashboard/>
          </Route>
         
          <Route path="/email-confirmation">
            <EmailConfirmation />
          </Route>
          <Route path="/account/confirm">
            <Confirm/>
          </Route>
          <Route path="/account/setup/user-role/new">
            <AddUserRole/>
          </Route>
          <Route path="/account/setup/user-role">
            <UserRoles/>
          </Route>
          <Route path="/account/setup/org-profile">
           <OrganizationProfile/>
          </Route>

      <Route path="*">
      <PageNotFound/>
      </Route>
        </Switch>
        <ToastContainer />
      </div>
    );
  }
