import React from 'react';
import { NavLink,Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded" data-scroll-to-active="true">
      <div className="main-menu-content">
        <ul className="navigation" id="main-menu-navigation" data-menu="menu-navigation">
          <li className=" navigation-header"><span>Dashboard</span><i className=" feather icon-minus" data-toggle="tooltip" data-placement="right" data-original-title="General"></i>
          </li>
          <nav id="sidebar">
            <ul class="list-unstyled components">

            <li className="nav-item"><NavLink  to={'/dashboard'} activeClassName="active-nav">
            <i className="feather icon-archive"></i><span className="menu-title" data-i18n="Manufacturer">Dashboard</span></NavLink>
          </li>
              <li class="nav-item">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i className="feather icon-shopping-bag"></i> Product</a>
                    <ul class="collapse" id="homeSubmenu">
                        
                        <li className="ml-2">
                            <NavLink to={'/dashboard/product-group'} activeClassName={"active-nav"}>Product Group</NavLink>
                        </li>
                        <li className="ml-2">
                            <NavLink to={'/dashboard/product/all'} activeClassName={"active-nav"}>Products</NavLink>
                        </li>
                        <li className="ml-2">
                            <NavLink to={'/dashboard/inventory-adjustment'} activeClassName={"active-nav"}>Inventory Adjustment</NavLink>
                        </li>
                        <li className="ml-2">
                            <NavLink to={'/dashboard/price-list/all'} activeClassName={"active-nav"}>Price List</NavLink>
                        </li>
                    </ul>
                </li>
               
                <li className="nav-item"><NavLink to={'/dashboard/customer/all'} activeClassName="active-nav"><i className="feather icon-users"></i><span className="menu-title " >Customers</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to="/dashboard/invoice/all" activeClassName="active-nav"><i className="feather icon-file-text"></i><span className="menu-title " data-i18n="Invoice">Invoice</span></NavLink>
          </li>

                <li className="nav-item"><NavLink  to={'/dashboard/manufacturer/all'} activeClassName="active-nav">
            <i className="feather icon-archive"></i><span className="menu-title" data-i18n="Manufacturer">Manufacturers</span></NavLink>
          </li>

          <li className="nav-item"><NavLink to={'/dashboard/brand/all'} activeClassName="active-nav">
            <i className="feather icon-book"></i><span className="menu-title" data-i18n="Brand">Brands</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/unit/all'} activeClassName="active-nav">
            <i className="feather icon-compass"></i><span className="menu-title" data-i18n="Unit">Units</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/tax/all'} activeClassName="active-nav">
            <i className="feather icon-compass"></i><span className="menu-title" data-i18n="Unit">Taxes</span></NavLink>
          </li>

          <li class="nav-item">
                    <a href="#tillSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i className="feather icon-archive"></i> Till</a>
                    <ul class="collapse" id="tillSubmenu">
                        
                        <li className="ml-2">
                            <NavLink to={'/dashboard/till/resturant'}>Restaurant Till</NavLink>
                        </li>
                        <li className="ml-2">
                            <NavLink to={'/dashboard/till/grocery'}>Grocery Till</NavLink>
                        </li>
                        
                    </ul>
                </li>

                <li className=" nav-item"><NavLink to="/dashboard/sales-order" activeClassName="active-nav"><i className="feather icon-file-text"></i><span className="menu-title " data-i18n="sales Order">Sales Order</span></NavLink>
                </li>
          <li class="nav-item">
                    <a href="#returnsSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                    <i className="feather icon-archive"></i> Returns</a>
                    <ul class="collapse" id="returnsSubmenu">
                        
                        <li className="ml-2">
                            <NavLink to={'/dashboard/return/sales'} activeClassName={"active-nav"}>Sales Returns</NavLink>
                        </li>
                        <li className="ml-2">
                            <NavLink to={'/dashboard/return/credit'} activeClassName={"active-nav"}>Credit Note</NavLink>
                        </li>
                        
                    </ul>
                </li>
                <li className="nav-item"><NavLink to="/dashboard/packages" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " >Packages</span></NavLink>
                </li>
                 
            </ul>
            <div className="d-flex justify-content-center align-items-center mt-2">
        <div className="">
        <img src="/app-assets/images/logo/troo-logo-white.png"
                  alt="branding logo" className=""/>
        </div>
            </div>

        </nav>
          
      

          
        </ul>
      </div>
    </div>
     );
}

export default Nav;
