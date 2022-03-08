import { useForm } from 'react-hook-form';
import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useHistory} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {addUnitsComplete, getUnits,addUnits,deleteUnit} from '../store/actions/unit';
import {notify} from '../components/Toast';
import LoadingButton from '../components/LoadingButton';
import {ErrorMessage} from '../components/Message';
import Loader from '../components/Loader';

const UnitList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {loading,error,units} = useSelector((state) => state.units);
  const addUnitState = useSelector((state) => state.addUnit);
    const {loading:addUnitLoading,error:addUnitError,success:addUnitSuccess} = addUnitState;
  const { token} = useSelector((state) => state.auth);
  const {register,formState: { errors },handleSubmit} = useForm();
  const deleteState = useSelector((state) => state.deleteUnit);
    const {loading:deleteLoading,error:deleteError,success:deleteSuccess} = deleteState;



  function handleCloseModal(){
    document.getElementById("addUnit").classList.remove("show", "d-block");
    document.querySelectorAll(".modal-backdrop")
        .forEach(el => el.classList.remove("modal-backdrop"));
}




if(addUnitSuccess){
  handleCloseModal();
  notify("success","Unit Added Successfully");
  dispatch(addUnitsComplete());
  //history.push('/dashboard/brand/all');

}
if(deleteSuccess){
  notify("success","Unit Deleted Successfully");
}

useEffect(()=>{
dispatch(getUnits(token));
},[dispatch,deleteSuccess,addUnitSuccess]);

const submit = (data)=>{
  const params = {
      name:data.name,
      display_name:data.display_name
  }
  dispatch(addUnits(params,token));
}

const deleteHandler =(unit)=>{
  if(window.confirm('Are You Sure to Delete?')){
    dispatch(deleteUnit(unit.id,token));
  }
}

    return (
        <div className="content-body">
        <div className="row d-flex justify-content-between ml-2 mr-5 ">
<div className="">
<h3 className="font-weight-bold">
All Units
</h3>

</div>

<button className="btn btn-success" data-toggle="modal" data-target="#addUnit">
<i className="feather icon-plus"></i>
New
</button>
</div>
        {loading? (
        <Loader/>
        ):error?(
          <ErrorMessage message={error}/>
        ):(

<div className="">

<div className="unit-list mt-2">
<table className="table table-responsive-sm">
<thead className="btn-main p-1">
<tr>
<th>UNIT NAME</th>
<th >UNIT SYMBOL</th>
<th >CREATED AT</th>
<th >ACTION</th>
</tr>
</thead>
<tbody>

{units.map(unit=>(
<tr key={unit.id}>
  <td>{unit.name}</td>
  <td>{unit.display_name}</td>
  <td>{(unit.created_at).substring(0,10)}</td>
  <td>
    <Link to={`/dashboard/unit/${unit.id}/edit`}>
      <button className="btn btn-warning mr-1"
      >
      <i className="feather icon-edit"></i>
      </button>
      </Link>
      <button className="btn btn-danger" onClick={()=>deleteHandler(unit)}>
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

<div className="modal fade text-left" id="addUnit" tabIndex="-1" role="dialog" aria-labelledby="addUnit" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header bg-light">
              <h3 className="modal-title" id="addUnit"> Add Unit</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <form onSubmit={handleSubmit(submit)}>
              <div className="modal-body">
                                    <fieldset className="form-group floating-label-form-group">
                  <label htmlFor="name">Unit Name</label>
                  <input type="text" className="form-control"
                                            placeholder="Unit Name" name="name"
                                            {...register("name", { required: "Unit is required" })}
                                            />
                                             <span className="text-danger text-center">{errors.name?.message}</span>

                </fieldset>

                <fieldset className="form-group floating-label-form-group">
                  <label htmlFor="name">Symbol</label>
                  <input type="text" className="form-control"
                                            placeholder="Symbol (kg,cm)" name="display_name"
                                            {...register("display_name", { required: "Symbol is required" })}
                                            />
                                             <span className="text-danger text-center">{errors.display_name?.message}</span>

                </fieldset>

              </div>
              <div className="modal-footer">
                {addUnitLoading? (
                 <button type="submit" className="btn btn-main pr-1 pl-1">Loading...</button>
                ):(
        <button type="submit" className="btn btn-main pr-1 pl-1">Add Unit</button>
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
