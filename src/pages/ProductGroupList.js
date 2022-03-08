import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import {getProductGroups,deleteProductGroup,deleteProductGroupComplete} from '../store/actions/productGroup';

const ProductGroupList = () => {
    const dispatch = useDispatch();
    const {loading,error,manufacturers} = useSelector((state) => state.manufacturers);
    const deleteState = useSelector((state) => state.deleteManufacturer);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deleteProductGroupComplete());
      }
        dispatch(getProductGroups(token));
    },[dispatch,deleteSuccess]);

    const deleteHandler =(productGroup)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteProductGroup(productGroup.id,token));
        }
    }

    return (
      <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  All Product Groups
  </h3>

</div>
<Link to={'/dashboard/product-group/new'}>
<button className="btn btn-success">
        <i className="feather icon-plus"></i>
        New
    </button>
</Link>
    </div>
        {loading? (
          <Loader/>
        ):error?(
          <ErrorMessage message={error}/>
        ):(

        <div className="unit-list mt-2">
        <table className="table table-responsive-sm">
  <thead className="btn-main p-1">
    <tr>
      <th>NAME</th>
      <th >TYPE</th>
      <th >RETURNABLE</th>
      <th >ACTION</th>
    </tr>
  </thead>
  <tbody>
      {productGroups && productGroups.map(productGroup=>(
 <tr key={productGroup.productGroupID}>
                <td>{productGroup.name}</td>
                <td>{productGroup.type}</td>
                <td>{productGroup.returnable}</td>
                <td>
                  <Link to={`/dashboard/productGroup/${productGroup.productGroupID}/edit`}>
                  <button className="btn btn-warning mr-1">
              <i className="feather icon-edit"></i>
              </button>
                  </Link>

              <button className="btn btn-danger" onClick={()=>deleteHandler(productGroup)}>
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
     );
}

export default ProductGroupList;
