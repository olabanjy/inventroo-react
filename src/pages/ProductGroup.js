
import {Link} from 'react-router-dom';
const ProductGroup = ()=>{
    return(

<div className="content-body">
<div className="row d-flex justify-content-between ml-2 mr-5">
<div className="dropdown">
  <Link className="dropdown-toggle color-main h5 font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  All Product Groups
  </Link>

  <ul className="dropdown-menu">
  <p className="ml-1 mr-1">DEFAULT FILTERS</p>

    <li className="dropdown-item">
        <Link >All Product Group</Link>
    </li>
    <li className="dropdown-item">
        <Link>Active Product Group</Link>
    </li>
    <li className="dropdown-item">
        <Link >Inactive Product Group</Link>
    </li>

  </ul>
</div>
<Link to={'/dashboard/product-group/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
        </button>
</Link>

    </div>



    <div className="row mt-2 mx-auto">
              <div className="col-md-6">
              <div className="card shadow-none border-main mr-3" >
  <div className="card-body">
    <h5 className="card-title text-center">Product Group</h5>

    <p className="card-text text-center m-2">
        <i className="feather icon-shopping-cart m-1 icon-size color-main"></i>
        <i className="feather icon-shopping-cart m-1 icon-size color-main"></i>
        <i className="feather icon-shopping-cart m-1 icon-size color-main"></i>
    </p>
    <p className="text-center">Create multiple variant of the same item using Product Group</p>
   <div className="d-flex justify-content-center">
   <Link to={'/dashboard/product-group/new'}>
   <button  className="btn btn-success card-link">New Product Group</button>
   </Link>
   </div>

  </div>
</div>
              </div>
              <div className="col-md-6">
              <div className="card shadow-none border-main mr-3" >
  <div className="card-body">
    <h5 className="card-title text-center">Products</h5>

    <p className="card-text text-center m-2">
        <i className="feather icon-shopping-cart m-1 icon-size color-main"></i>

    </p>
    <p className="text-center">Create standalone products that you buy and sell</p>
   <div className="d-flex justify-content-center">
  <Link to={'/dashboard/product/new'}>
  <button  className="btn btn-success card-link">New Product</button>
  </Link>
   </div>

  </div>
</div>
              </div>
              <div className="col-md-6">
              <div className="card shadow-none border-main mr-3" >
  <div className="card-body">
    <h5 className="card-title text-center">Composite Product</h5>

    <p className="card-text text-center m-2">
        <i className="feather icon-shopping-cart m-1 icon-size color-main"></i>

    </p>
    <p className="text-center">Bundle different items together and sell them as kits</p>
   <div className="d-flex justify-content-center">
   <button  className="btn btn-success card-link">New Composite Group</button>
   </div>

  </div>
</div>
              </div>
              <div className="col-md-6">
                  <div className="card shadow-none border-main mr-3" >
  <div className="card-body">
    <h5 className="card-title text-center">Product Group</h5>

    <p className="card-text text-center m-2">
        <i className="feather icon-list m-1 icon-size color-main"></i>

    </p>
    <p className="text-center">Create standalone products that you buy and sell</p>
   <div className="d-flex justify-content-center">
   <button  className="btn btn-success card-link">New Product List</button>
   </div>

  </div>
</div>
              </div>
            </div>


</div>


    )
}
export default ProductGroup;
