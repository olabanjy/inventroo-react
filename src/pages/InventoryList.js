import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {notify} from '../components/Toast';
import Spinner from '../components/Spinner';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
//import {getPriceList,deletePriceList,deletePriceListComplete} from '../store/actions/priceList';

const PriceList = ()=>{

    const dispatch = useDispatch();
    //const {loading,error,price_lists} = useSelector((state) => state.products);
    //const deleteState = useSelector((state) => state.deleteProduct);
    //const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;



    return (
        <div className="content-body">
            <div className="row d-flex justify-content-between ml-2 mr-5 ">
  <div className="">
    <h3 className="font-weight-bold">
    All Inventory
    </h3>
  
  </div>
  <Link to={'/dashboard/inventory-adjustment/new'}>
  <button className="btn btn-success btm-sm-small">
          <i className="feather icon-plus"></i>
          New Inventory
      </button>
  </Link>
      </div>
          {/* {
          loading? (
            <Loader/>
          ):error?(
            <ErrorMessage message={error}/>
          ):( */}
  
          <div className="unit-list mt-2">
          <table className="table table-responsive-sm">
    <thead className="btn-main p-1">
      <tr>
        <th>Name and Description</th>
        <th>Currency</th>
        <th>Details</th>
        <th>Pricing Scheme</th>
        <th>Rounding</th>
        <th >Action</th>
      </tr>
    </thead>
    <tbody>
        {/* {manufacturers && manufacturers.map(manufacturer=>(
   <tr key={manufacturer.id}>
                  <td>{manufacturer.name}</td>
                  <td>{manufacturer.contact_person}</td>
                  <td>{manufacturer.contact_phone}</td>

                  <td>
                    <Link to={`/dashboard/manufacturer/${manufacturer.id}/edit`}>
                    <button className="btn btn-warning mr-1">
                <i className="feather icon-edit"></i>
                </button>
                    </Link>
  
                <button className="btn btn-danger" onClick={()=>deleteHandler(manufacturer)}>
                <i className="feather icon-trash-2"></i>
                </button>
                </td>
                  </tr>
        ))} */}
  
  
    </tbody>
    </table>
          </div>
  
  
          {/* )} */}
          </div>
       );
}
export default InventoryList;