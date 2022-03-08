import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from '../components/Toast';
import Spinner from '../components/Spinner';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import {getProducts,deleteProduct,deleteProductComplete} from '../store/actions/product';

const ProductList = ()=>{
    const dispatch = useDispatch();
    const {loading,error,products} = useSelector((state) => state.products);
    const deleteState = useSelector((state) => state.deleteProduct);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
        if(deleteSuccess){
            notify("success","Product Deleted Successfully");
            dispatch(deleteProductComplete())
        }
        dispatch(getProducts());
    },[dispatch,deleteSuccess])

    const deleteHandler =(product)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteProduct(Number(product.productID)));
          console.log(Number(product.productID))
        }
    }

    return(

<div className="content-body">
<div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="dropdown">
  <Link className="dropdown-toggle color-main h5 font-weight-bold" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
  All Products
  </Link>

  <ul className="dropdown-menu mt-3 mb-5">
  <p className="ml-1 mr-1">DEFAULT FILTERS</p>

    <li className="dropdown-item">
        <Link >All Products</Link>
    </li>
    <li className="dropdown-item">
        <Link>Active Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Ungroup Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Inactive Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Low Stock Products</Link>
    </li>
    <li className="dropdown-item">
        <Link >Sales</Link>
    </li>
    <li className="dropdown-item">
        <Link >Purchases</Link>
    </li>


    <li className="dropdown-item">
        <Link> <i className="feather icon-plus">
            </i>New Custom View</Link>
    </li>

  </ul>
</div>
<Link to={'/dashboard/product/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
        </button>
</Link>

    </div>
    {loading?(
        <Loader/>
    ):error?(
        <ErrorMessage message={error}/>
    ):(

    <div className="mt-2 mx-auto mb-1">
    <table className="table table-striped table-responsive-sm">
  <thead className="btn-main p-1">
    <tr>
      <th>NAME</th>
      <th >UPC</th>
      <th >STOCK ON HAND</th>
      <th >REORDER POINT</th>
      <th >STATUS</th>
      <th >MANUFACTURER</th>
      <th>ACTIONS</th>
    </tr>
  </thead>
  <tbody>

{products.map(product=>(
    <tr key={product.productID}>
          <td>{product.name}</td>
          <td>{product.upc}</td>
          <td>{product.opening_stock}</td>
          <td>{product.recorder_point}</td>
          <td>{product.productStatus}</td>
          <td>{product.manufacturer?.name}</td>

          <td>
          <Link to={`/dashboard/product/${product.productID}/edit`}>
                  <button className="btn btn-warning mr-1">
              <i className="feather icon-edit"></i>
              </button>
                  </Link>

              <button className="btn btn-danger" onClick={()=>deleteHandler(product)}>
              <i className="feather icon-trash-2"></i>
              </button>
          </td>
    </tr>
))}




  </tbody>
  </table>
    </div>
    )}


</div>


    )
}
export default ProductList;
