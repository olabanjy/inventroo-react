import { useForm } from 'react-hook-form';
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addTaxComplete, getTaxes,addTax,deleteTax} from '../store/actions/tax';
import {notify} from '../components/Toast';
import Spinner from '../components/Spinner';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';

const TaxList = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {loading,error,taxes,success} = useSelector((state) => state.taxes);
    const addTaxState = useSelector((state) => state.addTax);
    const {loading:addTaxLoading,error:addTaxError,success:addTaxSuccess} = addTaxState;
    const { token} = useSelector((state) => state.auth);
    const {register,formState: { errors },handleSubmit} = useForm();
    const deleteState = useSelector((state) => state.deleteTax);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;

    if(!token){
        history.push('/login');
    }

    function handleCloseModal(){
        document.getElementById("addTax").classList.remove("show", "d-block");
        document.querySelectorAll(".modal-backdrop")
            .forEach(el => el.classList.remove("modal-backdrop"));
    }

    const submit = (data)=>{
        const params = {
            name:data.name,
            percentage:data.percentage
        }
        dispatch(addTax(params,token));
    }
    if(addTaxSuccess){
        handleCloseModal();
        notify("success","Tax Added Successfully");
        dispatch(addTaxComplete());
    }

    if(deleteSuccess){
      notify("success","Tax Deleted Successfully");
    }

useEffect(()=>{
    dispatch(getTaxes());
},[dispatch,deleteSuccess,addTaxSuccess]);

const deleteHandler =(tax)=>{
  if(window.confirm('Are You Sure to Delete?')){
    dispatch(deleteTax(tax.id));
  }
}

    return (
        <div className="content-body">
          <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
<h3 className="font-weight-bold">
All Taxes
</h3>

</div>

<button className="btn btn-success" data-toggle="modal" data-target="#addTax">
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

<div className="unit-list mt-2">
<table className="table table-responsive-sm">
<thead className="btn-main p-1">
<tr>
<th>TAX NAME</th>
<th>PERCENTAGE</th>
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

{taxes && taxes.map(tax=>(
  <tr key={tax.id}>
  <td>{tax.name}</td>
  <td>{tax.percentage} %</td>
  <td>{(tax.created_at).substring(0,10)}</td>
  <td>
      <Link to={`/dashboard/tax/${tax.id}/edit`}>
      <button className="btn btn-warning mr-1"
      >
      <i className="feather icon-edit"></i>
      </button>
      </Link>
      {deleteLoading?(
          <button className="btn btn-danger" onClick={()=>deleteHandler(tax)}>
          <Spinner/>
          </button>

      ):(
          <button className="btn btn-danger" onClick={()=>deleteHandler(tax)}>
          <i className="feather icon-trash-2"></i>
          </button>
      )}

      </td>

</tr>

))}


</tbody>
</table>
</div>









</div>
        )}

<div className="modal fade text-left" id="addTax" tabIndex="-1" role="dialog" aria-labelledby="addTax" aria-hidden="true">
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    {addTaxError && addTaxError}
                                  <div className="modal-header bg-light">
                                    <h3 className="modal-title" id="addTax"> Add Tax</h3>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>

                                  <form onSubmit={handleSubmit(submit)}>
                                    <div className="modal-body">
                                    <fieldset className="form-group floating-label-form-group">
                                            <label htmlFor="name">Tax Name</label>
                                            <input type="text" className="form-control"
                                            placeholder="Tax Name" name="name"
                                            {...register("name", { required: "Tax Name is required" })}

                                            />

                                             <span className="text-danger text-center">{errors.name?.message}</span>

                                        </fieldset>

                                        <fieldset className="form-group floating-label-form-group">
                                            <label htmlFor="percentage">Percentage</label>
                                            <input type="text" className="form-control"
                                            placeholder="Percentage" name="percentage"
                                            {...register("percentage", { required: "Percentage is required" })}

                                            />

                                             <span className="text-danger text-center">{errors.percentage?.message}</span>

                                        </fieldset>

                                    </div>
                                    <div className="modal-footer">

                                       {addTaxLoading? (
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

export default TaxList;
