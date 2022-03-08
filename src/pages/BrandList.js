import { useForm } from 'react-hook-form';
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addBrandsComplete, getBrands,addBrands,deleteBrand} from '../store/actions/brand';
import {notify} from '../components/Toast';
import Loader from '../components/Loader';
import {ErrorMessage} from '../components/Message';

const UnitList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {loading,error,manufacturers,brands,success} = useSelector((state) => state.brands);
    const addBrandState = useSelector((state) => state.addBrands);
    const {loading:addBrandLoading,error:addBrandError,success:addBrandSuccess} = addBrandState;
    const { token} = useSelector((state) => state.auth);
    const {register,formState: { errors },handleSubmit} = useForm();
    const deleteState = useSelector((state) => state.deleteBrand);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;

    if(!token){
        history.push('/login');
    }

    function handleCloseModal(){
        document.getElementById("addBrand").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    }

    const submit = (data)=>{
        const params = {
            name:data.name,
            manufacturer_id:data.manufacturer
        }
        dispatch(addBrands(params,token));
    }
    if(addBrandSuccess){
        handleCloseModal();
        notify("success","Brand Added Successfully");
        dispatch(addBrandsComplete());
        //history.push('/dashboard/brand/all');

    }
    if(deleteSuccess){
      notify("success","Brand Deleted Successfully");
    }

useEffect(()=>{
    dispatch(getBrands(token));
},[dispatch,deleteSuccess,addBrandSuccess]);

const deleteHandler =(brand)=>{
  if(window.confirm('Are You Sure to Delete?')){
    dispatch(deleteBrand(brand.id,token));
  }
}

    return (
        <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
<h3 className="font-weight-bold">
All Brands
</h3>

</div>

<button className="btn btn-success" data-toggle="modal" data-target="#addBrand">
<i className="feather icon-plus"></i>
New
</button>
</div>

        {loading? (
            <Loader/>
        ):error?(
            <ErrorMessage message={error}/>
        ):(

<div >

<div className="unit-list mt-1">
<table className="table table-responsive-sm">
<thead className="btn-main p-1">
<tr>
<th>BRAND NAME</th>
<th >DATE CREATED</th>
<th >ACTION</th>
</tr>
</thead>
<tbody>
{/* {brands && (brands.length) &&
  <tr>
  <td colSpan={3}>NO RECORD FOUND</td>
  </tr>

} */}

{brands && brands.map(brand=>(
  <tr key={brand.id}>
  <td>{brand.name}</td>
  <td>{(brand.created_at).substring(0,10)}</td>
  <td>
      <Link to={`/dashboard/brand/${brand.id}/edit`}>
      <button className="btn btn-warning mr-1"
      >
      <i className="feather icon-edit"></i>
      </button>
      </Link>
      <button className="btn btn-danger" onClick={()=>deleteHandler(brand)}>
      <i className="feather icon-trash-2"></i>
      </button>
      </td>

</tr>

))}


</tbody>
</table>
</div>









</div>
        )}

<div className="modal fade text-left" id="addBrand" tabIndex="-1" role="dialog" aria-labelledby="addBrand" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    {addBrandError && addBrandError}
                                  <div className="modal-header bg-light">
                                    <h3 className="modal-title" id="addBrand"> Add Brand</h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>

                                  <form onSubmit={handleSubmit(submit)}>
                                    <div className="modal-body">
                                    <fieldset className="form-group floating-label-form-group">
                                            <label htmlFor="name">Brand Name</label>
                                            <input type="text" className="form-control"
                                            placeholder="Brand Name" name="name"
                                            {...register("name", { required: "Brand is required" })}

                                            />

                                             <span className="text-danger text-center">{errors.name?.message}</span>

                                        </fieldset>

                                        <fieldset className="form-group floating-label-form-group">
                                            <label htmlFor="role">Manufacturer</label>
                                            <select className="custom-select" name="role" {...register("manufacturer", { required: "Please select a manufacturer" })} >
                                                <option value="">Choose Manufacturer</option>
                                            {manufacturers && manufacturers.map(manufacturer=>(
                                                <option value={manufacturer.id}>{manufacturer.name}</option>
                                            ))}


                                            </select>



                                             <span className="text-danger text-center">{errors.manufacturer?.message}</span>

                                        </fieldset>

                                    </div>
                                    <div className="modal-footer">

                                       {addBrandLoading? (
                                      <button type="submit" className="btn btn-main pr-1 pl-1">Loading...</button>
                                       ):(
                                        <button type="submit" className="btn btn-main pr-1 pl-1">Send</button>
                                       )}



                                    <button type="reset" className="btn btn-outline-main" data-dismiss="modal">Cancel</button>

                                    </div>
                                  </form>
                                </div>
                              </div>
                              </div>
        </div>
     );
}

export default UnitList;
