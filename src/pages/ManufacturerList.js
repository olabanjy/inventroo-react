import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';
import {getManufacturers,deleteManufacturer,deleteManufacturerComplete} from '../store/actions/manufacturer';

const ManufacturerList = () => {
    const dispatch = useDispatch();
    const {loading,error,manufacturers} = useSelector((state) => state.manufacturers);
    const deleteState = useSelector((state) => state.deleteManufacturer);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;
    const { token} = useSelector((state) => state.auth);

    useEffect(()=>{
      if(deleteSuccess){
      dispatch(deleteManufacturerComplete());
      }
        dispatch(getManufacturers(token));
    },[dispatch,deleteSuccess]);

    const deleteHandler =(manufacturer)=>{
        if(window.confirm('Are You Sure to Delete?')){
          dispatch(deleteManufacturer(manufacturer.id,token));
        }
    }

    return (
      <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
  <h3 className="font-weight-bold">
  All Manufacturer
  </h3>

</div>
<Link to={'/dashboard/manufacturer/new'}>
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
      <th>MANUFACTURER NAME</th>
      <th >CONTACT PERSON'S NAME</th>
      <th >PHONE</th>
      <th >ACTION</th>
    </tr>
  </thead>
  <tbody>
      {manufacturers && manufacturers.map(manufacturer=>(
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
      ))}


  </tbody>
  </table>
        </div>


        )}
        </div>
     );
}

export default ManufacturerList;
