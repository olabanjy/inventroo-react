import React from 'react';
import { NavLink,Link } from 'react-router-dom';
const SideBar = () => {
    return (
        <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow bg-main" data-scroll-to-active="true" >
      <div className="main-menu-content bg-main">
        <ul className="navigation" id="main-menu-navigation" data-menu="menu-navigation">

        <li className=" nav-item"><NavLink to="/dashboard" activeClassName="active-nav"><i className="feather icon-home"></i><span className="menu-title " >Dashboard</span></NavLink>
        </li>
          <li className=" navigation-header">

          </li>

          <li className=" navigation-header"><span>Settings</span><i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="Settings"></i>
          </li>
          <li className=" nav-item"><NavLink to="/account/setup/org-profile" activeClassName="active-nav"><i className="feather icon-layers"></i><span className="menu-title " data-i18n="Organization Profil">Organization Profile</span></NavLink>
          </li>
          <li className=" nav-item"><NavLink to="/account/setup/user-role" activeClassName="active-nav"><i className="feather icon-user"></i><span className="menu-title" data-i18n="Users & Roles">Users & Roles</span></NavLink>
          </li>
          <li className=" nav-item"><NavLink to="/account/setup/warehouse" activeClassName="active-nav"><i className="feather icon-home"></i><span className="menu-title" data-i18n="Warehouses">Warehouses</span></NavLink>
          </li>
          <li className=" nav-item"><Link to={'/account/setup/branches'}><i className="feather icon-map"></i><span className="menu-title" data-i18n="Branches">Branches</span></Link>
          </li>

          <div className="row justify-content-center fixed-bottom align-items-center">
        <div className="">
        <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className=""/>
        </div>
            </div>
        </ul>

      </div>
    </div>
     );
}

export default SideBar;
