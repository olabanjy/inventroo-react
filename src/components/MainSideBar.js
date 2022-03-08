import React from 'react';
import { NavLink,Link } from 'react-router-dom';



const MainSideBar = () => {
    return (
      <div className="main-menu menu-fixed menu-dark menu-accordion menu-shadow bg-main" data-scroll-to-active="true" >
      <div className="main-menu-content bg-main">
        <ul className="navigation" id="main-menu-navigation" data-menu="menu-navigation">
        <li className=" navigation-header">
          </li>
        <li className="nav-item">
          <NavLink to="/dashboard" activeClassName="active-nav">
            <i className="feather icon-home"></i><span className="menu-title" data-i18n="Dashboard">Dashboard</span>
            </NavLink>
        </li>
        <li className=" nav-item">
          <a href="#">
          <i className="feather icon-shopping-bag">
            </i><span className="menu-title">Product</span>
            </a>
            <ul className="menu-content">
              <li><NavLink className="menu-item" to={'/dashboard/product-group'} data-i18n="Product Group">Product Group</NavLink>
              </li>
              <li>
                <NavLink className="menu-item" to={'/dashboard/product/all'}>Products</NavLink>
              </li>
              <li><Link className="menu-item" to={'/dashboard/product/inventory-adjustment'} data-i18n="Inventory Adjustment">Inventory Adjustment</Link>
              </li>
              <li><Link className="menu-item" to={'/dashboard/product/price-list'} data-i18n="Price List">Price List</Link>
              </li>

            </ul>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/product/all'} activeClassName="active-nav"><i className="feather icon-users"></i><span className="menu-title " >Customers</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to="/dashboard/invoice" activeClassName="active-nav"><i className="feather icon-file-text"></i><span className="menu-title " data-i18n="Invoice">Invoice</span></NavLink>
          </li>

          <li className=" navigation-header">
          </li>
          <li className=" nav-item"><a href="#"><i className="feather icon-archive"></i><span className="menu-title" data-i18n="Till">Till</span></a>
            <ul className="menu-content">
              <li><a className="menu-item" href="timeline-center.html" data-i18n="Timelines Center">Restaurant Till</a>
              </li>
              <li><a className="menu-item" href="timeline-horizontal.html" data-i18n="Timelines Horizontal">Glocery Till </a>
              </li>
            </ul>
          </li>
          <li className=" nav-item"><NavLink to="/dashboard/sales-order" activeClassName="active-nav"><i className="feather icon-file-text"></i><span className="menu-title " data-i18n="sales Order">Sales Order</span></NavLink>
          </li>
          <li className=" nav-item has-sub"><Link to={"/dashboard"}><i className="feather icon-archive"></i><span className="menu-title" data-i18n="Returns">Returns</span></Link>
            <ul className="menu-content">
              <li><a className="menu-item" href="timeline-center.html" data-i18n="Sales Returns">Sales Returns</a>
              </li>
              <li><a className="menu-item" href="timeline-horizontal.html" data-i18n="Credit Notes">Credit Notes </a>
              </li>
            </ul>
          </li>

          <li className=" nav-item"><NavLink to="/dashboard/packages" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Packages">Packages</span></NavLink>
          </li>
          <li className=" navigation-header">
          </li>

          <li className=" nav-item"><NavLink to="/dashboard/supplier" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Supplier">Supplier</span></NavLink>
          </li>
          <li className=" nav-item"><NavLink to="/dashboard/purchase-orders" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Purchase Orders">Purchase Orders</span></NavLink>
          </li>
          <li className=" nav-item"><NavLink to="/dashboard/bills" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Bills">Bills</span></NavLink>
          </li>

          <li className=" navigation-header">
          </li>

          //<li className=" nav-item"><NavLink to="/dashboard/payments" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Payments">Payments</span></NavLink>
          //</li>
          //<li className=" nav-item"><NavLink to="/dashboard/payment-made" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Payments Made">Payments Made</span></NavLink>
          //</li>
          //<li className=" nav-item"><NavLink to="/dashboard/payment-received" activeClassName="active-nav"><i className="feather icon-package"></i><span className="menu-title " data-i18n="Payments Received">Payments Received</span></NavLink>
          //</li>
          <li className="nav-item"><NavLink  to={'/dashboard/manufacturer/all'}>
            <i className="feather icon-archive"></i><span className="menu-title" data-i18n="Manufacturer">Manufacturers</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/brand/all'}>
            <i className="feather icon-book"></i><span className="menu-title" data-i18n="Brand">Brands</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/unit/all'}>
            <i className="feather icon-compass"></i><span className="menu-title" data-i18n="Unit">Units</span></NavLink>
          </li>
          <li className="nav-item"><NavLink to={'/dashboard/tax/all'}>
            <i className="feather icon-compass"></i><span className="menu-title" data-i18n="Unit">Taxes</span></NavLink>
          </li>

          <div className="row justify-content-center align-items-center mt-5">
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

export default MainSideBar;
